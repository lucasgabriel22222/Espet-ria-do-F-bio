import { useState, useEffect } from 'react';
import { Star, Users, UtensilsCrossed, Zap } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function StatsBanner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = (scrollY - 400) * 0.15;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-6 h-6 text-[#FFA000] fill-[#FFA000]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#FF5500]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#FFA000]" />;
      case 'Zap':
      default:
        return <Zap className="w-6 h-6 text-[#FF5500]" />;
    }
  };

  return (
    <section
      id="estatisticas"
      className="relative py-16 sm:py-20 overflow-hidden bg-neutral-950 border-y border-neutral-800/80"
    >
      {/* Background with subtle parallax */}
      <div
        id="stats-parallax-bg"
        className="absolute inset-0 w-full h-[130%] -top-[15%] bg-cover bg-center pointer-events-none opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80')`,
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
        }}
      />

      <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-sm z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.stats.map((stat) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="relative p-6 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/85 border border-neutral-800 hover:border-neutral-700 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 group shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60 group-hover:scale-110 group-hover:border-[#FF5500]/50 transition-all">
                  {getIcon(stat.iconName)}
                </div>
                <div className="w-2 h-2 rounded-full bg-[#FF5500]/50 group-hover:bg-[#FF5500] transition-colors" />
              </div>

              <div className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-1 group-hover:text-[#FFA000] transition-colors">
                {stat.value}
              </div>

              <div className="text-sm font-bold uppercase tracking-wider text-neutral-200 mb-1">
                {stat.label}
              </div>

              <div className="text-xs text-neutral-400 font-normal">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
