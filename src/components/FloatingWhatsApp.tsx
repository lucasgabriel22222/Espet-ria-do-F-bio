import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/5543999130154?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20ver%20o%20card%C3%A1pio%20e%20fazer%20um%20pedido.";

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on hover */}
      <div
        id="floating-whatsapp-tooltip"
        className={`mr-3 px-3.5 py-1.5 rounded-xl bg-neutral-900/95 border border-neutral-700 text-white text-xs font-bold shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none whitespace-nowrap ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Faça seu pedido aqui!</span>
      </div>

      {/* Button with Pulse Animation */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp da Espetaria do Fábio"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#25D366] via-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Pulse Ripple Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-[#FF5500] opacity-20 animate-pulse pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 drop-shadow-md group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </aside>
  );
}
