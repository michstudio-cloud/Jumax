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
         className="transform transition hover:scale-110 drop-shadow-2xl bg-white rounded-full p-2"
         aria-label="Contactar por WhatsApp"
       >
         <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="Chat WhatsApp" 
          className="w-14 h-14 md:w-16 md:h-16"
         />
       </a>
    </div>
  );
};