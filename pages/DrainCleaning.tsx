import React, { useEffect } from 'react';
import { Check, AlertTriangle, HelpCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const DrainCleaning: React.FC = () => {
  useEffect(() => {
    document.title = "Destape de drenajes en Reynosa | Limpieza profesional JUMAX";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
         {/* Background Subtle Image */}
         <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1616198814651-e71f960c3180?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background Texture" />
         </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-orange font-bold tracking-widest uppercase mb-4 block">Especialistas Certificados</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">Destape y Limpieza <br/>de Drenajes en Reynosa</h1>
          <p className="text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Servicio especializado en desazolve y destape de tuberías. Solucionamos problemas de flujo lento, malos olores y obstrucciones totales con equipo industrial.
          </p>
        </div>
      </header>

      {/* Intro / Problem Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">¿Drenaje lento o completamente tapado?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Un drenaje obstruido no solo es molesto, puede causar daños graves a tu propiedad y riesgos sanitarios. En JUMAX, utilizamos equipo profesional para eliminar el problema de raíz, no solo "empujarlo".
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 text-slate-700 font-medium text-lg">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600" size={16} /></div> 
                Sin romper pisos (en la mayoría de los casos)
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-medium text-lg">
                <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600" size={16} /></div> 
                Maquinaria eléctrica especializada
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-medium text-lg">
                 <div className="bg-green-100 p-1 rounded-full"><Check className="text-green-600" size={16} /></div> 
                 Atención a comercios y residencias
              </li>
            </ul>
             <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                className="bg-brand-blue hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg transition inline-flex items-center gap-2 shadow-lg"
              >
                Cotiza tu destape por WhatsApp
              </a>
          </div>
          <div className="relative">
             <img 
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
                alt="Baño limpio y moderno" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
             />
             <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-brand-orange max-w-xs">
                <p className="text-sm font-bold text-slate-800">Recupera la higiene de tu hogar hoy mismo.</p>
             </div>
          </div>
        </div>
      </section>

      {/* What includes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-heading font-bold text-slate-900">¿Qué incluye nuestro servicio?</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition duration-300">
              <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Destape de Tuberías</h3>
              <p className="text-slate-500 text-lg leading-relaxed">Removemos obstrucciones sólidas, juguetes, raíces y acumulaciones utilizando sondas eléctricas.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition duration-300">
              <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Limpieza Profunda</h3>
              <p className="text-slate-500 text-lg leading-relaxed">Raspado de paredes internas de la tubería para recuperar el diámetro original y mejorar el flujo.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition duration-300">
              <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Eliminación de Residuos</h3>
              <p className="text-slate-500 text-lg leading-relaxed">Extracción de grasa solidificada y sedimentos que causan malos olores recurrentes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition duration-300">
              <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">Asesoría Preventiva</h3>
              <p className="text-slate-500 text-lg leading-relaxed">Te explicamos la causa del problema y cómo evitar futuros tapones en tu red sanitaria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of drains */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Atendemos todo tipo de drenajes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="font-semibold text-slate-700 text-lg">Baños (WC)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="font-semibold text-slate-700 text-lg">Fregaderos</span>
                </div>
                 <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="font-semibold text-slate-700 text-lg">Lavabos</span>
                </div>
                 <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="font-semibold text-slate-700 text-lg">Regaderas</span>
                </div>
                 <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="font-semibold text-slate-700 text-lg">Registros</span>
                </div>
                 <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  <span className="font-semibold text-slate-700 text-lg">Bajantes</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-2xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange rounded-full blur-[60px] opacity-20"></div>
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="text-brand-orange" />
                ¿Por qué se tapa el drenaje?
              </h3>
              <ul className="space-y-6">
                <li className="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                  <strong className="text-brand-orange block mb-1 text-lg">Grasa y Aceite</strong> 
                  <span className="text-slate-300 text-lg">Al enfriarse se solidifican creando tapones duros como piedra que reducen el diámetro de la tubería.</span>
                </li>
                <li className="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                  <strong className="text-brand-orange block mb-1 text-lg">Cabello y Jabón</strong> 
                  <span className="text-slate-300 text-lg">Común en regaderas, crean nudos fibrosos que atrapan otros desechos rápidamente.</span>
                </li>
                <li className="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                  <strong className="text-brand-orange block mb-1 text-lg">Raíces</strong> 
                  <span className="text-slate-300 text-lg">En registros exteriores, las raíces buscan la humedad y pueden romper tuberías de concreto o barro.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-heading font-bold text-center text-slate-900 mb-12 flex justify-center items-center gap-3">
             <HelpCircle size={32} className="text-brand-orange" />
             Preguntas Frecuentes
           </h2>
           <div className="space-y-4">
             <details className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer group border border-slate-100">
               <summary className="font-heading font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                 ¿Atienden urgencias en Reynosa?
                 <span className="text-brand-orange group-open:rotate-180 transition transform">▼</span>
               </summary>
               <p className="mt-4 text-slate-600 text-lg leading-relaxed">Sí, ofrecemos servicio urgente. Entendemos que un drenaje tapado no puede esperar. Llámanos para verificar disponibilidad inmediata.</p>
             </details>

             <details className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer group border border-slate-100">
               <summary className="font-heading font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                 ¿Cuánto cuesta destapar un drenaje?
                 <span className="text-brand-orange group-open:rotate-180 transition transform">▼</span>
               </summary>
               <p className="mt-4 text-slate-600 text-lg leading-relaxed">El precio depende de la gravedad del tapón y la ubicación (baño, cocina, registro principal). Contáctanos por WhatsApp para darte una estimación precisa.</p>
             </details>

             <details className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer group border border-slate-100">
               <summary className="font-heading font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                 ¿Dan garantía por el servicio?
                 <span className="text-brand-orange group-open:rotate-180 transition transform">▼</span>
               </summary>
               <p className="mt-4 text-slate-600 text-lg leading-relaxed">Absolutamente. Garantizamos que el flujo del agua quedará restablecido. Si el problema persiste inmediatamente, regresamos a revisarlo.</p>
             </details>

             <details className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer group border border-slate-100">
               <summary className="font-heading font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                 ¿En cuánto tiempo llegan?
                 <span className="text-brand-orange group-open:rotate-180 transition transform">▼</span>
               </summary>
               <p className="mt-4 text-slate-600 text-lg leading-relaxed">Nuestros técnicos están ubicados estratégicamente en Reynosa. Normalmente llegamos en menos de 2 horas tras confirmar tu servicio.</p>
             </details>
           </div>
        </div>
      </section>

      {/* Local SEO Reinforcement */}
      <section className="py-12 bg-white text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-slate-400 text-sm">
            Brindamos servicio de destape de drenajes en colonias de Reynosa como: Las Fuentes, Jarachina, Petrolera, Aztlán, Centro, Rodríguez, Longoria, Vista Hermosa y más.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DrainCleaning;