import { useState, useEffect } from 'react';
import { MessageCircle, UtensilsCrossed, ChevronDown, Flame, Beer, Sparkles, Zap, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax translation: moves background slower than scroll
  const parallaxOffset = scrollY * 0.35;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D0D0D] pt-24 sm:pt-28"
    >
      {/* Real JS Parallax Background Image */}
      <div
        id="hero-parallax-bg"
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center will-change-transform pointer-events-none scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=85')`,
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        }}
      />

      {/* Dark Gastronomic Vignette / Overlays */}
      <div
        id="hero-dark-overlay"
        className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70 z-10"
      />
      <div
        id="hero-radial-glow"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FF5500]/15 via-transparent to-transparent z-10 pointer-events-none"
      />
      <div
        id="hero-bottom-fade"
        className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent z-10"
      />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 my-auto w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            id="hero-badge"
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[#FFA000] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-md"
          >
            <Flame className="w-4 h-4 text-[#FF5500]" />
            <span>Espetaria & Petiscaria em Arapongas</span>
            <span className="w-1 h-1 rounded-full bg-neutral-500" />
            <span className="text-neutral-300 font-medium">Desde 18h</span>
          </div>

          {/* H1 Heading */}
          <h1
            id="hero-main-title"
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] mb-6 drop-shadow-2xl"
          >
            Espetos na Brasa,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FFA000] to-[#FF5500]">
              Petiscos Variados
            </span>{' '}
            e Cerveja Trincando de Gelada.
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-10 text-balance"
          >
            Cortes nobres assados no carvão no ponto exato, porções generosas de boteco e cervejas estupidamente geladas. Peça direto no WhatsApp para entrega rápida ou venha saborear em nosso espaço em Arapongas.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
            <a
              id="hero-primary-cta"
              href={siteData.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E64A19] hover:from-[#E64A19] hover:to-[#FF5500] text-white font-heading font-bold text-base sm:text-lg uppercase tracking-wider shadow-2xl shadow-[#FF5500]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 box-glow-orange hover:box-glow-orange-lg"
            >
              <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              <span>Pedir pelo WhatsApp Agora</span>
            </a>

            <a
              id="hero-secondary-cta"
              href="#cardapio"
              className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-neutral-500 text-neutral-100 font-heading font-semibold text-base uppercase tracking-wider transition-all duration-200 backdrop-blur-sm"
            >
              <UtensilsCrossed className="w-5 h-5 text-[#FFA000]" />
              <span>Ver Cardápio & Destaques</span>
            </a>
          </div>

          {/* Social Proof / Fast Stats Micro-Badge */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-neutral-800/80 text-sm text-neutral-300">
            <div className="flex items-center space-x-2">
              <div className="flex text-[#FFA000]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Award key={i} className="w-4 h-4 fill-[#FFA000] text-[#FFA000]" />
                ))}
              </div>
              <span className="font-bold text-white">4.7 no Google</span>
              <span className="text-neutral-400">({siteData.googleReviewCount} avaliações)</span>
            </div>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[#FF5500]" />
              <span className="text-neutral-300 font-medium">Preparo artesanal na brasa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Value Pillars Strip (Inspired by reference Smokehouse image) */}
      <div className="relative z-20 border-t border-neutral-800/70 bg-neutral-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-neutral-300">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[#FF5500]">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">100% Na Brasa</p>
                <p className="text-[11px] text-neutral-400">Churrasco no ponto certo</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[#FFA000]">
                <Beer className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Cerveja Trincando</p>
                <p className="text-[11px] text-neutral-400">Litrão e Long Neck no gelo</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[#FF5500]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Molhos da Casa</p>
                <p className="text-[11px] text-neutral-400">Receitas próprias artesanais</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[#FFA000]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Pedido sem Fila</p>
                <p className="text-[11px] text-neutral-400">WhatsApp direto para retirada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="relative z-20 flex justify-center pb-3 pt-2">
        <a
          id="hero-scroll-indicator"
          href="#estatisticas"
          className="flex flex-col items-center text-neutral-500 hover:text-neutral-300 transition-colors py-1 group"
          aria-label="Rolar para próxima seção"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest mb-1 text-neutral-500 group-hover:text-neutral-300">
            Explorar
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#FF5500]" />
        </a>
      </div>
    </section>
  );
}
