import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-black text-white text-center relative overflow-hidden">
       <div className="max-w-4xl mx-auto px-4 relative z-10">
         <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">¿Drenaje tapado? <br/> <span className="text-brand-orange">Te atendemos hoy</span></h2>
         <p className="text-xl mb-10 text-slate-300 font-light max-w-2xl mx-auto">No dejes que un problema pequeño se convierta en una reparación costosa. Agenda tu visita ahora.</p>
         <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-5 px-12 rounded-full text-lg transition shadow-2xl hover:scale-105"
          >
            <MessageCircle size={24} />
            Solicitar Servicio
          </a>
       </div>
    </section>
  );
};