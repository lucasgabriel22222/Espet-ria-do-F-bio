import { useState, useEffect } from 'react';
import { Flame, MessageCircle, Menu, X, Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { siteData } from '../data/siteData';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export default function Navbar({ cartCount = 0, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openStatus = siteData.isOpenNow();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 40);

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'nav-link-inicio' },
    { label: 'Cardápio', href: '#cardapio', id: 'nav-link-cardapio' },
    { label: 'Destaques', href: '#destaques', id: 'nav-link-destaques' },
    { label: 'Diferenciais', href: '#diferenciais', id: 'nav-link-diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes', id: 'nav-link-avaliacoes' },
    { label: 'Localização', href: '#localizacao', id: 'nav-link-localizacao' },
    { label: 'FAQ', href: '#faq', id: 'nav-link-faq' }
  ];

  return (
    <header id="site-header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="h-1 bg-gradient-to-r from-[#FF5500] via-[#FFA000] to-[#FF5500] w-full transition-all duration-75 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Top Notification / Info Strip (Desktop) */}
      <div
        id="top-info-bar"
        className={`hidden lg:block bg-black/90 border-b border-neutral-800/60 text-xs text-neutral-300 py-1.5 px-6 transition-all duration-300 ${
          isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden border-b-0' : 'opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>{siteData.shortAddress}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#FFA000]" />
              <span>{siteData.openingHoursText}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-500'}`} />
              <span className={openStatus.isOpen ? 'text-emerald-400 font-medium' : 'text-neutral-400'}>
                {openStatus.statusText}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              id="top-phone-link"
              href={`tel:${siteData.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-[#FF5500] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>{siteData.phone}</span>
            </a>
            <span className="text-neutral-700">|</span>
            <a
              id="top-instagram-link"
              href={siteData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-[#FFA000] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FFA000]" />
              <span>{siteData.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <nav
        id="main-navbar"
        className={`w-full transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? 'bg-neutral-950/90 border-b border-neutral-800 shadow-xl shadow-black/40 py-3'
            : 'bg-neutral-950/75 border-b border-neutral-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#inicio"
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF5500] to-[#E64A19] flex items-center justify-center shadow-lg shadow-[#FF5500]/25 group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase leading-tight group-hover:text-[#FFA000] transition-colors">
                {siteData.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-neutral-400 uppercase">
                Churrasco na Brasa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {onOpenCart && cartCount > 0 && (
              <button
                id="navbar-open-cart-btn"
                onClick={onOpenCart}
                className="relative px-3 py-2 bg-neutral-900 border border-neutral-700 hover:border-[#FF5500] rounded-lg text-sm text-white flex items-center space-x-2 transition-all"
              >
                <span className="text-neutral-300">Meu Pedido</span>
                <span className="bg-[#FF5500] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </button>
            )}

            <a
              id="navbar-cta-order-btn"
              href={siteData.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#FF5500] to-[#E64A19] hover:from-[#E64A19] hover:to-[#FF5500] text-white text-sm font-bold tracking-wide uppercase shadow-lg shadow-[#FF5500]/20 hover:shadow-[#FF5500]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fazer Pedido</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {onOpenCart && cartCount > 0 && (
              <button
                id="mobile-cart-badge-btn"
                onClick={onOpenCart}
                className="relative p-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white"
              >
                <span className="bg-[#FF5500] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </button>
            )}

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white bg-neutral-900/80 border border-neutral-800 rounded-lg transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden bg-neutral-950/98 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-2 mt-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-[#FFA000] hover:bg-neutral-900/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-neutral-800 space-y-3">
              <div className="flex items-center space-x-2 text-xs text-neutral-400 px-3">
                <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-500'}`} />
                <span>{openStatus.statusText} ({siteData.scheduleHours})</span>
              </div>

              <a
                id="mobile-cta-order-btn"
                href={siteData.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#FF5500] to-[#E64A19] text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#FF5500]/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fazer Pedido no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
