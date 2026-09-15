import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#0D0D0D] border-t border-neutral-800/80 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[#FFA000] text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2
            id="faq-section-title"
            className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4"
          >
            Perguntas Frequentes
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto">
            Tudo o que você precisa saber sobre nosso atendimento, entregas, pedidos e funcionamento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteData.faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-900/80 border-[#FF5500]/60 shadow-xl shadow-[#FF5500]/5'
                    : 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <button
                  id={`faq-toggle-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-lg bg-neutral-800 text-neutral-300 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#FF5500] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800">
          <p className="text-neutral-300 text-sm font-medium mb-3">
            Ainda tem alguma dúvida ou gostaria de fazer uma reserva especial?
          </p>
          <a
            id="faq-direct-whatsapp-btn"
            href={siteData.getWhatsAppUrl("Olá! Tenho uma dúvida sobre a Espetaria do Fábio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#FFA000] hover:text-[#FF5500] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com nossa equipe no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
