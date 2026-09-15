import { useState } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { MenuItem, siteData } from '../data/siteData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function OrderDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: OrderDrawerProps) {
  const [orderType, setOrderType] = useState<'delivery' | 'retirada'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const total = cart.reduce((acc, current) => acc + current.item.price * current.quantity, 0);

  const generateWhatsAppOrderUrl = () => {
    let message = `*NOVO PEDIDO - ESPETARIA DO FÁBIO*\n`;
    message += `------------------------------------\n`;
    if (customerName.trim()) {
      message += `*Cliente:* ${customerName.trim()}\n`;
    }
    message += `*Tipo:* ${orderType === 'delivery' ? 'Entrega (Delivery)' : 'Retirada no Balcão'}\n`;
    if (orderType === 'delivery' && customerAddress.trim()) {
      message += `*Endereço:* ${customerAddress.trim()}\n`;
    }
    message += `------------------------------------\n`;
    message += `*ITENS DO PEDIDO:*\n`;

    cart.forEach((c) => {
      const itemSubtotal = (c.item.price * c.quantity).toFixed(2).replace('.', ',');
      message += `• ${c.quantity}x ${c.item.name} - R$ ${itemSubtotal}\n`;
    });

    message += `------------------------------------\n`;
    message += `*TOTAL:* R$ ${total.toFixed(2).replace('.', ',')}\n`;

    if (notes.trim()) {
      message += `*Observações:* ${notes.trim()}\n`;
    }

    message += `------------------------------------\n`;
    message += `Pedido gerado pelo site da Espetaria do Fábio`;

    return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="order-drawer-backdrop" className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          id="order-drawer-panel"
          aria-label="Sacola de Pedidos"
          className="w-screen max-w-md bg-neutral-950 border-l border-neutral-800 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300"
        >
          {/* Header */}
          <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/60">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-lg bg-[#FF5500]/20 text-[#FF5500]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base">
                  Sacola de Pedidos
                </h3>
                <p className="text-xs text-neutral-400">
                  {cart.length} {cart.length === 1 ? 'item selecionado' : 'itens selecionados'}
                </p>
              </div>
            </div>

            <button
              id="close-order-drawer-btn"
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-neutral-700 mx-auto mb-3" />
                <p className="text-neutral-400 text-sm font-medium">
                  Sua sacola está vazia no momento.
                </p>
                <p className="text-neutral-500 text-xs mt-1">
                  Navegue pelo cardápio e clique no botão "+" para montar seu pedido.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cart.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#FFA000] font-semibold mt-0.5">
                          R$ {(item.price * quantity).toFixed(2).replace('.', ',')}
                          <span className="text-neutral-500 font-normal ml-1">
                            (R$ {item.price.toFixed(2).replace('.', ',')} un)
                          </span>
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-1.5 bg-neutral-950 border border-neutral-800 rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-1.5 text-xs font-bold text-white min-w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Button */}
                <button
                  onClick={onClearCart}
                  className="text-xs text-neutral-500 hover:text-neutral-300 underline block"
                >
                  Limpar sacola
                </button>

                {/* Delivery Option Selector */}
                <div className="pt-3 border-t border-neutral-800/80 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 block">
                    Como deseja receber?
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all ${
                        orderType === 'delivery'
                          ? 'bg-[#FF5500] text-white'
                          : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white'
                      }`}
                    >
                      Entrega (Delivery)
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('retirada')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all ${
                        orderType === 'retirada'
                          ? 'bg-[#FF5500] text-white'
                          : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white'
                      }`}
                    >
                      Retirada no Balcão
                    </button>
                  </div>

                  {/* Customer Info Form */}
                  <div className="space-y-2 pt-2">
                    <input
                      type="text"
                      placeholder="Seu nome (opcional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5500]"
                    />

                    {orderType === 'delivery' && (
                      <input
                        type="text"
                        placeholder="Endereço para entrega (Rua, Nº, Bairro)"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5500]"
                      />
                    )}

                    <input
                      type="text"
                      placeholder="Observações (ex: ponto da carne, sem cebola)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with Final WhatsApp Action */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-neutral-800 bg-neutral-900/90 space-y-3">
              <div className="flex items-center justify-between text-base">
                <span className="text-neutral-300 font-medium">Total do Pedido:</span>
                <span className="font-heading font-black text-xl text-[#FFA000]">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <a
                id="send-consolidated-order-whatsapp-btn"
                href={generateWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E64A19] hover:from-[#E64A19] hover:to-[#FF5500] text-white font-heading font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF5500]/25 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar Pedido Pronto no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-center text-neutral-500">
                Ao clicar, seu pedido será aberto com todos os itens calculados no WhatsApp da Espetaria do Fábio.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
