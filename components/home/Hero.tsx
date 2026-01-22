import React from 'react';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { WarrantyBadge } from '../Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image - High Quality Plumber */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80" 
          alt="Plomero profesional trabajando" 
          className="w-full h-full object-cover object-center scale-105"
          fetchPriority="high"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl pt-20">
          {/* Warranty Badge Image - SVG Inline */}
          <div className="mb-6 animate-fade-in-down">
              <WarrantyBadge className="h-14 md:h-16 drop-shadow-lg" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-xl">
            ¿Problemas de drenaje <br/><span className="text-brand-orange">en tu hogar?</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl font-light leading-relaxed border-l-4 border-brand-orange pl-6">
            Jumax ofrece soluciones rápidas, limpias y garantizadas. Desde destapes urgentes hasta instalaciones complejas, recupera la tranquilidad de tu hogar hoy mismo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
              <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-lg text-lg transition shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="text-green-600"/>
              Cotizar por WhatsApp
            </a>
             <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-4 px-8 rounded-lg text-lg transition shadow-xl text-center"
            >
              Llamar Ahora
            </a>
          </div>
        </div>

        {/* Social Proof (Improved Layout) */}
        <div className="absolute bottom-12 right-4 md:left-auto md:right-8 lg:right-12 max-w-xs bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] border border-white/20 hidden sm:flex animate-bounce-slow">
          <div className="flex gap-4 items-center">
            <div className="relative flex-shrink-0">
               <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" 
                alt="Cliente Satisfecho" 
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
               />
               <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white flex items-center justify-center">
                  <ThumbsUp size={12} className="text-white" />
               </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-white text-sm truncate">Magdalena Mejia</h4>
              <p className="text-slate-200 text-xs mt-0.5 leading-snug line-clamp-2">
                "Servicio rápido y limpio. ¡Los recomiendo!"
              </p>
              <div className="flex items-center gap-0.5 mt-1.5">
                 {[...Array(5)].map((_,i)=><span key={i} className="text-yellow-400 text-[10px]">★</span>)}
                 <span className="text-xs text-white ml-1 font-medium">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};