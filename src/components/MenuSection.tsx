import { useState } from 'react';
import { MessageCircle, Plus, Check, Flame, UtensilsCrossed, Sparkles } from 'lucide-react';
import { siteData, MenuItem } from '../data/siteData';

interface MenuSectionProps {
  onAddToCart?: (item: MenuItem) => void;
  cartItemIds?: string[];
}

export default function MenuSection({ onAddToCart, cartItemIds = [] }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = siteData.menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cardapio" className="py-20 sm:py-28 bg-[#0D0D0D] relative">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FF5500]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFA000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[#FF5500] text-xs font-bold uppercase tracking-widest mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Sabor Autêntico na Brasa</span>
          </div>

          <h2
            id="menu-section-title"
            className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4"
          >
            Nossos Destaques &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FFA000]">
              Cardápio Completo
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Carnes preparadas no carvão ao ponto desejado, petiscos fartos de boteco e cervejas servidas trincando de gelada. Escolha seus favoritos e peça direto no WhatsApp.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 sm:gap-3">
          {siteData.categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-category-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FF5500] to-[#E64A19] text-white border-[#FF5500] shadow-lg shadow-[#FF5500]/25'
                  : 'bg-neutral-900/90 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid (3 Columns on Desktop, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isAdded = cartItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                id={`menu-item-card-${item.id}`}
                className="group relative bg-neutral-900/60 rounded-2xl border border-neutral-800 hover:border-[#FF5500]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF5500]/10 backdrop-blur-sm"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#FF5500]/40 text-[#FFA000] text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                        <Flame className="w-3 h-3 text-[#FF5500]" />
                        <span>{item.badge}</span>
                      </span>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-md text-[10px] uppercase font-semibold text-neutral-400 border border-neutral-800">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Price Tag in Image Bottom */}
                  <div className="absolute bottom-3 right-3">
                    <div className="px-3.5 py-1.5 rounded-lg bg-black/90 border border-neutral-700/80 backdrop-blur-md text-white font-heading font-black text-base shadow-lg">
                      <span className="text-xs font-normal text-[#FFA000] mr-1">R$</span>
                      {item.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#FFA000] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-sm text-neutral-400 font-normal leading-relaxed line-clamp-3 mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2">
                    <a
                      id={`order-whatsapp-btn-${item.id}`}
                      href={siteData.getItemOrderUrl(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E64A19] hover:from-[#E64A19] hover:to-[#FF5500] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-[#FF5500]/20 hover:shadow-[#FF5500]/30 transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Pedir no WhatsApp</span>
                    </a>

                    {onAddToCart && (
                      <button
                        id={`add-cart-btn-${item.id}`}
                        onClick={() => onAddToCart(item)}
                        className={`p-2.5 rounded-xl border transition-all duration-200 ${
                          isAdded
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                            : 'bg-neutral-800 border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white'
                        }`}
                        title={isAdded ? 'Item na sacola (clique para adicionar mais)' : 'Adicionar ao pedido'}
                        aria-label="Adicionar item à sacola"
                      >
                        {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Special Combo Box (Inspired by Reference BBQ Feast) */}
        <div
          id="destaques"
          className="mt-16 sm:mt-20 relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/80 backdrop-blur-md p-6 sm:p-10"
        >
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#FF5500]/40 text-[#FFA000] text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Sugestão da Casa • Combo Especial</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
                Combo Boteco do Fábio
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                O combo perfeito para compartilhar entre 3 a 4 pessoas: 4 espetos selecionados na brasa (Picanha, Alcatra, Medalhão com Bacon e Queijo Coalho) + 1 porção farta de Batata com Queijo e Bacon + 1 Pão de Alho Especial + 2 Cervejas Litrão trincando de geladas.
              </p>

              <div className="flex flex-wrap items-baseline gap-4 mb-6">
                <div className="text-3xl sm:text-4xl font-black font-heading text-white">
                  <span className="text-xs text-neutral-400 font-normal mr-1 uppercase">Apenas</span>
                  <span className="text-[#FFA000]">R$ 119,90</span>
                </div>
                <span className="text-xs text-neutral-400 font-medium">
                  Ideal para 3 a 4 pessoas • Economia garantida
                </span>
              </div>

              <a
                id="cta-special-combo"
                href={siteData.getWhatsAppUrl("Olá! Gostaria de pedir o Combo Boteco do Fábio (R$ 119,90) visto no site.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E64A19] hover:from-[#E64A19] hover:to-[#FF5500] text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-[#FF5500]/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pedir Este Combo no WhatsApp</span>
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                  alt="Combo Churrasco Especial do Fábio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="inline-block px-3 py-1 rounded bg-[#FF5500] text-white text-xs font-bold uppercase tracking-wider">
                    Sucesso Absoluto em Arapongas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
