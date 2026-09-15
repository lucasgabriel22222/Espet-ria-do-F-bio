import { MessageCircle, Flame, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FinalCta() {
  const status = siteData.isOpenNow();

  return (
    <section id="cta-final" className="py-20 sm:py-28 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          id="final-cta-card"
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800 shadow-2xl"
        >
          {/* Fiery Accent Radiance */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#FF5500]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-[#FFA000]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-[#FF5500]/50 text-[#FFA000] text-xs font-bold uppercase tracking-widest mb-6">
              <Flame className="w-4 h-4 text-[#FF5500]" />
              <span>Churrasco de Verdade em Arapongas</span>
            </div>

            <h2
              id="final-cta-title"
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight"
            >
              Deu fome ou vontade de uma{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FFA000] to-[#FF5500]">
                cerveja gelada?
              </span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-xl font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
              Faça seu pedido agora mesmo pelo WhatsApp ou venha nos visitar em Arapongas. Preparo rápido, carnes nobres e cerveja estupidamente gelada.
            </p>

            {/* Operating status reminder */}
            <div className="flex items-center justify-center space-x-2 text-xs text-neutral-400 mb-8">
              <Clock className="w-4 h-4 text-[#FFA000]" />
              <span>{siteData.openingHoursText}</span>
              <span className="text-neutral-600">•</span>
              <span className={status.isOpen ? 'text-emerald-400 font-semibold' : 'text-neutral-400'}>
                {status.statusText}
              </span>
            </div>

            {/* Large Pulsing CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="final-cta-whatsapp-btn"
                href={siteData.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#FF5500] via-[#E64A19] to-[#FF5500] hover:from-[#E64A19] hover:to-[#FF5500] text-white font-heading font-black text-lg sm:text-xl uppercase tracking-wider shadow-2xl shadow-[#FF5500]/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 animate-pulse hover:animate-none box-glow-orange-lg"
              >
                <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                <span>Fazer Pedido pelo WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-neutral-500 mt-6 font-medium">
              Atendimento ágil • Entrega via delivery ou retirada no balcão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
