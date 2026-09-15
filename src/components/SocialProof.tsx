import { Star, CheckCircle2, Award, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function SocialProof() {
  return (
    <section
      id="avaliacoes"
      className="py-20 sm:py-28 bg-[#0D0D0D] border-t border-neutral-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Google Score Spotlight */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[#FFA000] text-xs font-bold uppercase tracking-widest mb-4">
              <Award className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Opinião de Quem Já Provou</span>
            </div>

            <h2
              id="social-proof-title"
              className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight"
            >
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-3 max-w-xl">
              Confira as opiniões de quem frequenta ou pede em casa pela Espetaria do Fábio em Arapongas.
            </p>
          </div>

          {/* Google Score Spotlight Card */}
          <div
            id="google-rating-summary-card"
            className="flex items-center space-x-5 p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-md self-start lg:self-auto shadow-xl"
          >
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center font-black text-2xl text-neutral-900 shadow-md">
              G
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-heading text-2xl font-black text-white">{siteData.googleRating}</span>
                <div className="flex text-[#FFA000]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFA000] text-[#FFA000]" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Mais de <strong className="text-neutral-200">{siteData.googleReviewCount} avaliações</strong> no Google Perfil de Empresa
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteData.testimonials.map((dep) => (
            <div
              key={dep.id}
              id={`testimonial-card-${dep.id}`}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header of review: Stars + Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FFA000]">
                    {Array.from({ length: dep.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFA000] text-[#FFA000]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[10px] font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Avaliação Verificada</span>
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-[#FF5500]/30 mb-2" />
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed italic">
                    "{dep.text}"
                  </p>
                </div>
              </div>

              {/* Author info */}
              <div className="flex items-center space-x-3.5 pt-4 border-t border-neutral-800/80">
                <img
                  src={dep.avatar}
                  alt={dep.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-neutral-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {dep.name}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {dep.city} • {dep.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
