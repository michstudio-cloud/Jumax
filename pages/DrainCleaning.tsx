import React, { useEffect } from 'react';
import { Check, AlertTriangle, Clock, ShieldCheck, Phone, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const DrainCleaning: React.FC = () => {
  useEffect(() => {
    document.title = "Destape de Drenajes en Reynosa | JUMAX Urgencias 24/7";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans text-slate-800">
      
      {/* 1. HERO SECTION - High Urgency / Conversion */}
      <header className="relative bg-slate-900 text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
         {/* Background with darker overlay for text readability */}
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1616198814651-e71f960c3180?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-30" 
              alt="Tubería limpia y funcional" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
         </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <div className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
                ¡LLEGAMOS EN MENOS DE 2 HORAS!
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight">
                ¿Drenaje Tapado en <span className="text-brand-orange">Reynosa?</span> <br/>
                <span className="text-2xl md:text-4xl font-medium text-slate-300 block mt-2">Lo solucionamos sin romper tus pisos.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 font-light max-w-2xl leading-relaxed">
                Olvídate de los malos olores y el agua estancada. Usamos equipo eléctrico industrial para destapar WC, fregaderos y registros al instante.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-orange-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Llamar Ahora
                </a>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola JUMAX, tengo una urgencia con mi drenaje en Reynosa.`}
                  className="bg-white text-slate-900 hover:bg-slate-50 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition flex items-center justify-center gap-2"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-400 flex items-center justify-center md:justify-start gap-2">
                <ShieldCheck size={16} className="text-green-500" /> Garantía de 30 días por escrito.
              </p>
            </div>

            {/* Visual Hook - Mobile friendly card */}
            <div className="md:w-2/5 w-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-white/20 pb-2">¿Identificas estos problemas?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-200">
                    <AlertTriangle className="text-yellow-400 shrink-0 mt-1" size={18} />
                    <span>El agua del WC sube y baja lento.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-200">
                    <AlertTriangle className="text-yellow-400 shrink-0 mt-1" size={18} />
                    <span>Mal olor saliendo de las coladeras.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-200">
                    <AlertTriangle className="text-yellow-400 shrink-0 mt-1" size={18} />
                    <span>Gorgoreos en las tuberías al lavar.</span>
                  </li>
                </ul>
                <div className="mt-6 bg-red-500/20 border border-red-500/50 p-3 rounded-lg text-center">
                  <p className="text-sm font-bold text-red-100">¡Actúa antes de que se inunde!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. PAIN AGITATION & SOLUTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              ¿Por qué elegir JUMAX para tu destape?
            </h2>
            <p className="text-lg text-slate-600">
              Muchos "plomeros" intentan destapar con varillas, rompiendo tubos y pisos. Nosotros somos especialistas equipados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition duration-300">
              <div className="bg-brand-blue/10 w-14 h-14 rounded-full flex items-center justify-center text-brand-blue mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Sin Romper Pisos</h3>
              <p className="text-slate-600 leading-relaxed">
                Nuestra maquinaria de sonda eléctrica entra por el registro o la coladera, triturando obstrucciones sin necesidad de obras costosas de albañilería.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition duration-300">
              <div className="bg-brand-orange/10 w-14 h-14 rounded-full flex items-center justify-center text-brand-orange mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Servicio Express Reynosa</h3>
              <p className="text-slate-600 leading-relaxed">
                Sabemos que es una emergencia. Tenemos unidades listas en sectores clave (Fuentes, Jarachina, Centro) para llegar rápido.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition duration-300">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Garantía Real</h3>
              <p className="text-slate-600 leading-relaxed">
                No cobramos "visitas fantasma". Si realizamos el trabajo, tienes 30 días de garantía. Tu satisfacción es nuestra reputación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE TYPES (Targeting specific keywords) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decoracion */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                 Atendemos cualquier obstrucción <br/> <span className="text-brand-orange">Residencial y Comercial</span>
               </h2>
               <p className="text-slate-400 text-lg mb-8">
                 Desde un lavabo lento hasta el registro principal de un restaurante colapsado por grasa.
               </p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                   <div className="bg-brand-orange p-2 rounded-full"><Check size={20} /></div>
                   <span className="font-bold text-lg">Destape de WC (Inodoros)</span>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                   <div className="bg-brand-orange p-2 rounded-full"><Check size={20} /></div>
                   <span className="font-bold text-lg">Limpieza de Fregaderos y Trampas de Grasa</span>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                   <div className="bg-brand-orange p-2 rounded-full"><Check size={20} /></div>
                   <span className="font-bold text-lg">Desazolve de Registros Principales</span>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                   <div className="bg-brand-orange p-2 rounded-full"><Check size={20} /></div>
                   <span className="font-bold text-lg">Bajantes Pluviales y de Drenaje</span>
                 </div>
               </div>
             </div>

             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Equipo profesional de destape JUMAX" 
                  className="rounded-2xl shadow-2xl border-4 border-slate-700"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                  <p className="font-bold text-lg mb-2">"¡Recuperé mi baño en 30 minutos!"</p>
                  <div className="flex text-yellow-500 mb-1">★★★★★</div>
                  <p className="text-sm text-slate-500">- Cliente en Col. Aztlán</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. LOCAL SEO FOOTER BANNER */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="flex flex-wrap justify-center items-center gap-2 text-slate-500 font-medium">
             <MapPin size={18} className="text-brand-orange" />
             Atendiendo urgencias en:
             <span className="bg-slate-100 px-2 py-1 rounded text-slate-700">Las Fuentes</span>
             <span className="bg-slate-100 px-2 py-1 rounded text-slate-700">Jarachina</span>
             <span className="bg-slate-100 px-2 py-1 rounded text-slate-700">La Cima</span>
             <span className="bg-slate-100 px-2 py-1 rounded text-slate-700">Vista Hermosa</span>
             <span className="bg-slate-100 px-2 py-1 rounded text-slate-700">Petrolera</span>
             <span className="bg-slate-100 px-2 py-1 rounded text-slate-700">Centro</span>
             <span className="text-slate-400 text-sm">(y todo Reynosa)</span>
           </p>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-20 bg-brand-blue text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">¡No esperes a que se inunde!</h2>
          <p className="text-xl text-blue-100 mb-10">
            Agenda hoy mismo y recibe un diagnóstico profesional. Precios claros desde el principio.
          </p>
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola JUMAX, necesito cotizar un destape de drenaje.`}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-10 rounded-full text-xl shadow-2xl hover:scale-105 transition"
          >
            <Phone size={24} />
            Pedir Cotización por WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
};

export default DrainCleaning;