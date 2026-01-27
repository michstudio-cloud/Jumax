import React, { useEffect } from 'react';
import { Wrench, Droplet, ArrowRight, Settings, Shield, PenTool, CheckCircle2, Phone } from 'lucide-react';
import { CONTACT_INFO, ROUTES } from '../constants';
import { Link } from 'react-router-dom';

const GeneralPlumbing: React.FC = () => {
  useEffect(() => {
    document.title = "Plomeros en Reynosa | Instalaciones y Reparaciones JUMAX";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans text-slate-800">
      
      {/* 1. HERO - TRUST & AUTHORITY */}
      <header className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand-blue px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Shield size={16} /> SERVICIO CERTIFICADO EN REYNOSA
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-6 leading-tight">
                Plomeros Honestos y <br/> <span className="text-brand-orange">Trabajos Bien Hechos.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed">
                ¿Cansado de reparaciones que duran una semana? En JUMAX hacemos el trabajo bien a la primera. Instalaciones, fugas y mantenimiento para tu hogar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                   href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola JUMAX, busco un plomero para...`}
                   className="bg-brand-blue hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition flex items-center justify-center gap-2"
                >
                  Solicitar Plomero <ArrowRight size={20} />
                </a>
                <a 
                   href={`tel:${CONTACT_INFO.phone}`}
                   className="bg-white border-2 border-slate-200 text-slate-700 hover:border-brand-orange hover:text-brand-orange font-bold py-4 px-8 rounded-xl text-lg transition flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Llamar: {CONTACT_INFO.displayPhone}
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue to-brand-orange rounded-full opacity-10 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
                alt="Plomero JUMAX Reynosa" 
                className="relative rounded-3xl shadow-2xl w-full object-cover transform md:rotate-2 hover:rotate-0 transition duration-500"
              />
              {/* Badge */}
              <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-xl border-l-4 border-brand-orange max-w-[200px]">
                 <p className="font-bold text-slate-900 text-lg">Sin Anticipos</p>
                 <p className="text-sm text-slate-500">Pagas al ver el trabajo terminado y funcionando.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SPECIFIC SERVICES FOR REYNOSA MARKET */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Soluciones para los problemas de Reynosa</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Entendemos los retos del agua en la ciudad. Ofrecemos soluciones específicas para presión, sarro y mantenimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Presión / Bombas */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">Bombas y Tinacos</h3>
              <p className="text-slate-500 mb-6">
                ¿Poca presión en la regadera? Instalamos y reparamos hidroneumáticos, bombas presurizadoras y sistemas de tinacos para que nunca te falte agua.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Instalación de Tinacos</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Mantenimiento de Hidros</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Válvulas Check</li>
              </ul>
            </div>

            {/* Card 2: Fugas */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition">
                <Droplet size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">Fugas de Agua y Gas</h3>
              <p className="text-slate-500 mb-6">
                El medidor no deja de girar o huele a gas. Detectamos y reparamos fugas visibles y ocultas en tuberías de cobre, CPVC, PPR (Tuboplus) y galvanizado.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Fugas en muros y pisos</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Cambio de llaves de paso</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Líneas de gas seguras</li>
              </ul>
            </div>

            {/* Card 3: Instalaciones */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-slate-800 group-hover:text-white transition">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">Muebles de Baño</h3>
              <p className="text-slate-500 mb-6">
                Renueva tu baño o cocina. Instalamos WC, lavabos, mezcladoras, tarjas y boilers con acabados estéticos y sin fugas futuras.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Instalación de WC</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Boilers de paso/eléctricos</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Grifería y Regaderas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF & OBJECTION HANDLING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="md:w-1/2 space-y-6">
               <h2 className="text-3xl font-heading font-bold">¿Por qué confiar en JUMAX?</h2>
               <p className="text-blue-100 text-lg">
                 Sabemos que es difícil encontrar un buen plomero en Reynosa. Muchos no llegan, cobran de más o dejan el trabajo sucio.
               </p>
               <div className="space-y-4 pt-4">
                 <div className="flex items-center gap-4">
                   <div className="bg-white/10 p-2 rounded-lg"><Shield className="text-brand-orange"/></div>
                   <span className="font-bold text-lg">Garantía por escrito de 30 días</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="bg-white/10 p-2 rounded-lg"><CheckCircle2 className="text-brand-orange"/></div>
                   <span className="font-bold text-lg">Limpieza al terminar el trabajo</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="bg-white/10 p-2 rounded-lg"><Settings className="text-brand-orange"/></div>
                   <span className="font-bold text-lg">Herramienta profesional (No improvisamos)</span>
                 </div>
               </div>
            </div>
            <div className="md:w-1/2 bg-white text-slate-900 p-8 rounded-2xl shadow-lg w-full">
               <h3 className="font-bold text-xl mb-4 text-center">Solicita tu servicio hoy</h3>
               <p className="text-center text-slate-500 mb-6 text-sm">Respuesta rápida por WhatsApp</p>
               <div className="space-y-3">
                 <a 
                   href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola, necesito instalar una bomba/tinaco.`}
                   className="block w-full py-4 px-6 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700 transition flex justify-between items-center group"
                 >
                   Instalación de Bombas/Tinacos
                   <ArrowRight size={20} className="text-slate-400 group-hover:text-brand-orange"/>
                 </a>
                 <a 
                   href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola, tengo una fuga de agua.`}
                   className="block w-full py-4 px-6 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700 transition flex justify-between items-center group"
                 >
                   Reparación de Fugas
                   <ArrowRight size={20} className="text-slate-400 group-hover:text-brand-orange"/>
                 </a>
                 <a 
                   href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola, necesito instalar un mueble de baño/boiler.`}
                   className="block w-full py-4 px-6 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700 transition flex justify-between items-center group"
                 >
                   Instalación de Baños/Boilers
                   <ArrowRight size={20} className="text-slate-400 group-hover:text-brand-orange"/>
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CROSS SELL (Drain Cleaning) */}
      <section className="py-16 bg-slate-100 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">¿Tu problema es que el agua no se va?</h3>
            <p className="text-slate-600 mb-8">
              Probablemente necesitas un desazolve profesional, no un plomero general.
            </p>
            <Link to={ROUTES.DRAIN_CLEANING} className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition">
              Ir a Destape de Drenajes
            </Link>
         </div>
      </section>
    </div>
  );
};

export default GeneralPlumbing;