import { Flame, Beer, Clock, Smartphone, Sparkles, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Differentiators() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#FF5500]" />;
      case 'Beer':
        return <Beer className="w-6 h-6 text-[#FFA000]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#FF5500]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#FFA000]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FF5500]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#FFA000]" />;
    }
  };

  return (
    <section
      id="diferenciais"
      className="py-20 sm:py-28 bg-neutral-950 border-t border-neutral-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[#FFA000] text-xs font-bold uppercase tracking-widest mb-4">
            <Flame className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Padrão de Qualidade Fábio</span>
          </div>

          <h2
            id="differentiators-title"
            className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4"
          >
            Por Que Escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FFA000]">
              Espetaria do Fábio?
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sem complicações e sem enrolação: churrasco preparado com carinho e técnica, cerveja trincando e respeito total ao seu tempo e paladar.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteData.differentiators.map((diff) => (
            <div
              key={diff.id}
              id={`diff-card-${diff.id}`}
              className="group p-8 rounded-2xl bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800 hover:border-[#FF5500]/50 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#FF5500]/40 transition-all duration-300 shadow-md">
                  {getIcon(diff.iconName)}
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#FFA000] transition-colors leading-snug">
                  {diff.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center text-xs font-semibold text-neutral-500 uppercase tracking-wider group-hover:text-neutral-300 transition-colors">
                <span>Garantia de Qualidade</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
