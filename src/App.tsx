import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import MenuSection from './components/MenuSection';
import Differentiators from './components/Differentiators';
import SocialProof from './components/SocialProof';
import LocationSection from './components/LocationSection';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import OrderDrawer, { CartItem } from './components/OrderDrawer';
import { MenuItem } from './data/siteData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { item, quantity: 1 }];
      }
    });
    setIsDrawerOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter((c): c is CartItem => c !== null);
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((c) => c.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-neutral-100 flex flex-col font-sans selection:bg-[#FF5500] selection:text-white">
      {/* 1. NAVBAR (Header Fixo) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsDrawerOpen(true)}
      />

      <main className="flex-1">
        {/* 2. HERO (Seção Principal) */}
        <Hero />

        {/* 3. SEÇÃO DE ESTATÍSTICAS E DESTAQUES PRÁTICOS (BANNER PARALLAX) */}
        <StatsBanner />

        {/* 4. SEÇÃO CARDÁPIO / DESTAQUES DA CASA */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cart.map((c) => c.item.id)}
        />

        {/* 5. SEÇÃO POR QUE A ESPETARIA DO FÁBIO? (DIFERENCIAIS) */}
        <Differentiators />

        {/* 6. SEÇÃO DE PROVA SOCIAL (AVALIAÇÕES DO GOOGLE) */}
        <SocialProof />

        {/* 7. SEÇÃO DE LOCALIZAÇÃO & HORÁRIO DE ATENDIMENTO */}
        <LocationSection />

        {/* 8. SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
        <FaqSection />

        {/* 9. CTA FINAL (CHAMADA PARA AÇÃO DIRETA) */}
        <FinalCta />
      </main>

      {/* 10. FOOTER (RODAPÉ) */}
      <Footer />

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsApp />

      {/* Quick Order Cart Drawer */}
      <OrderDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
