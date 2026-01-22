import React from 'react';
import { CONTACT_INFO } from '../../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 flex flex-col items-end gap-3 z-50">
       <div className="bg-white text-slate-800 px-4 py-2 rounded-xl font-bold shadow-lg text-sm mb-2 animate-bounce flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          ¿Necesitas ayuda urgente?
       </div>
       <a 
         href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
         className="transform transition hover:scale-110 drop-shadow-2xl"
         aria-label="Contactar por WhatsApp"
       >
         <img 
          src="https://res.cloudinary.com/dztjnc74v/image/upload/v1769053566/whatsapp-bot_o0ggw6.png" 
          alt="Chat WhatsApp JUMAX" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
         />
       </a>
    </div>
  );
};