import React from 'react';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="relative">
               {/* Main Image */}
               <img 
                  src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&w=800&q=80" 
                  alt="Herramientas profesionales" 
                  className="rounded-2xl shadow-2xl relative z-10 w-full"
                  loading="lazy"
               />
               {/* Decorative Box */}
               <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-slate-100 rounded-2xl z-0"></div>
               {/* Stats Card */}
               <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-6 rounded-xl shadow-xl z-20 max-w-[200px]">
                  <div className="text-4xl font-black text-brand-orange mb-1">10+</div>
                  <div className="text-sm font-medium leading-tight">Años de experiencia en Reynosa</div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">¿Por qué elegirnos?</h2>
            <h3 className="text-4xl font-heading font-bold text-slate-900 mb-8">Compromiso con la Excelencia</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-slate-50 p-4 rounded-xl text-black shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">Cobertura Total en Reynosa</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">Nuestras unidades móviles están distribuidas estratégicamente para llegar a cualquier colonia en tiempo récord.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-xl text-brand-orange shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">Respuesta Inmediata</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">Sabemos que una fuga o un drenaje tapado no puede esperar. Priorizamos las emergencias.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-green-50 p-4 rounded-xl text-green-600 shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">Garantía por Escrito</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">Respaldamos cada trabajo. Si el problema persiste, regresamos sin costo adicional dentro del periodo de garantía.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};