import { Flame, MapPin, Phone, Clock, Instagram, ChevronUp } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-neutral-950 border-t border-neutral-800/80 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF5500] to-[#E64A19] flex items-center justify-center shadow-lg shadow-[#FF5500]/25">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-wider text-white uppercase">
                  {siteData.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-neutral-400 uppercase">
                  Churrasco na Brasa
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed pr-4">
              {siteData.tagline}. Cortes artesanais preparados no carvão, petiscos generosos de boteco e cerveja trincando de gelada.
            </p>

            <div className="pt-2">
              <a
                id="footer-instagram-link"
                href={siteData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-[#FFA000] text-xs transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#FFA000]" />
                <span>{siteData.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-white transition-colors">
                  Destaques
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Atendimento & Horários
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#FFA000] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Horário:</span>
                  <span>{siteData.openingHoursText}</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">WhatsApp / Pedidos:</span>
                  <a
                    href={`tel:${siteData.phoneRaw}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteData.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Location details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Localização
            </h4>
            <div className="flex items-start space-x-2.5 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-300 block mb-1">
                  {siteData.address}
                </span>
                <span className="text-neutral-500 block">
                  CEP: {siteData.cep}
                </span>
                <a
                  id="footer-maps-link"
                  href={siteData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#FFA000] hover:text-[#FF5500] text-xs font-semibold"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-10 mt-12 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} {siteData.name}. Todos os direitos reservados. CNPJ / Arapongas - PR.
          </p>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
