import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function LocationSection() {
  const status = siteData.isOpenNow();

  return (
    <section
      id="localizacao"
      className="py-20 sm:py-28 bg-neutral-950 border-t border-neutral-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[#FF5500] text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fácil Acesso em Arapongas</span>
          </div>

          <h2
            id="location-section-title"
            className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4"
          >
            Onde Estamos e Como Pedir
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Venha nos visitar para saborear nossos espetos e petiscos quentinhos com cerveja trincando ou solicite via delivery/retirada.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Practical Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
              {/* Live Status Badge */}
              <div
                id="live-open-status-badge"
                className={`inline-flex items-center space-x-3 px-4 py-2 rounded-xl text-sm font-bold border ${
                  status.isOpen
                    ? 'bg-emerald-950/70 border-emerald-800 text-emerald-400'
                    : 'bg-neutral-800/80 border-neutral-700 text-neutral-300'
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full ${
                    status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-500'
                  }`}
                />
                <div>
                  <span className="font-heading">{status.statusText}</span>
                  <span className="text-xs font-normal opacity-80 block">{status.detail}</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-[#FF5500] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Endereço Completo
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {siteData.address}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    CEP: {siteData.cep} • Conj. Novo Centauro
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-[#FFA000] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-neutral-300 text-sm font-medium">
                    {siteData.openingHoursText}
                  </p>
                  <div className="mt-2 text-xs text-neutral-400 space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>Quarta, Quinta, Sexta, Sábado e Domingo</span>
                    </div>
                    <p className="text-neutral-500 pl-5">Segunda e Terça: Fechado para descanso da equipe</p>
                  </div>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-[#FF5500] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    WhatsApp & Telefone
                  </h4>
                  <p className="text-neutral-300 text-sm font-medium">
                    {siteData.phone}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Atendimento imediato no horário do expediente
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                <a
                  id="open-google-maps-btn"
                  href={siteData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#FFA000]" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>

                <a
                  id="location-whatsapp-btn"
                  href={siteData.getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre a localização ou fazer um pedido na Espetaria do Fábio.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#E64A19] hover:from-[#E64A19] hover:to-[#FF5500] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#FF5500]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Google Maps Iframe */}
          <div className="lg:col-span-7 h-full min-h-[400px]">
            <div
              id="google-maps-container"
              className="w-full h-full min-h-[420px] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 relative shadow-2xl"
            >
              <iframe
                title="Localização Espetaria do Fábio Arapongas PR"
                src={siteData.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Overlay Badge */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <div className="px-4 py-2 rounded-xl bg-black/90 border border-neutral-800 backdrop-blur-md text-white text-xs font-bold shadow-lg flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#FF5500]" />
                  <span>Espetaria do Fábio • Arapongas - PR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
