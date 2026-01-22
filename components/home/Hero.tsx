import React from 'react';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { WarrantyBadge } from '../Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[650px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80" 
          alt="Plomero profesional trabajando" 
          className="w-full h-full object-cover object-center scale-105"
          fetchPriority="high"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl pt-10 md:pt-20">
          
          {/* Warranty Badge Image - Adjusted Size */}
          <div className="mb-8 animate-fade-in-down">
              {/* Ajuste de tamaño: w-32 (128px) en móvil, w-48 (192px) en desktop */}
              <WarrantyBadge className="w-32 md:w-48 h-auto drop-shadow-2xl" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-xl">
            ¿Problemas de drenaje <br className="hidden md:block" /><span className="text-brand-orange">en tu hogar?</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl font-light leading-relaxed border-l-4 border-brand-orange pl-6">
            Soluciones rápidas, limpias y garantizadas en Reynosa. Recupera la tranquilidad de tu hogar hoy mismo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="bg-white text-slate-900 hover:bg-slate-50 font-bold py-4 px-8 rounded-xl text-lg transition shadow-xl flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="text-green-600 group-hover:scale-110 transition"/>
              Cotizar por WhatsApp
            </a>
             <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-4 px-8 rounded-xl text-lg transition shadow-xl text-center"
            >
              Llamar Ahora
            </a>
          </div>

          {/* Social Proof - Mobile (Inline) */}
          <div className="block md:hidden animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 w-fit">
               <div className="relative">
                 <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" 
                  alt="Cliente" 
                  className="w-10 h-10 rounded-full object-cover border border-white"
                 />
                 <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border border-white">
                    <ThumbsUp size={8} className="text-white" />
                 </div>
               </div>
               <div>
                  <div className="flex text-yellow-400 text-xs mb-0.5">★★★★★</div>
                  <p className="text-white text-xs font-medium">"Servicio rápido y limpio"</p>
               </div>
            </div>
          </div>
        </div>

        {/* Social Proof - Desktop (Floating Card) */}
        <div className="absolute bottom-20 right-8 max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] border border-white/20 hidden md:flex items-center gap-5 animate-bounce-slow hover:bg-white/15 transition cursor-default">
            <div className="relative flex-shrink-0">
               <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" 
                alt="Cliente Satisfecho" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
               />
               <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 border-2 border-white flex items-center justify-center shadow-sm">
                  <ThumbsUp size={14} className="text-white" />
               </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-heading font-bold text-white text-lg truncate">Magdalena Mejia</h4>
              <p className="text-slate-200 text-sm mt-1 leading-snug">
                "Excelente servicio. Llegaron rápido a la col. Petrolera y solucionaron todo."
              </p>
              <div className="flex items-center gap-1 mt-2 bg-black/20 w-fit px-2 py-0.5 rounded-full">
                 {[...Array(5)].map((_,i)=><span key={i} className="text-yellow-400 text-xs">★</span>)}
                 <span className="text-xs text-white ml-1 font-bold">5.0</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};