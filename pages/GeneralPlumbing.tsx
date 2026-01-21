import React, { useEffect } from 'react';
import { Wrench, Droplet, ArrowRight, PenTool, Settings } from 'lucide-react';
import { CONTACT_INFO, ROUTES } from '../constants';
import { Link } from 'react-router-dom';

const GeneralPlumbing: React.FC = () => {
  useEffect(() => {
    document.title = "Plomería en Reynosa | Servicios profesionales JUMAX";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans">
       <header className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="uppercase tracking-widest text-sm font-bold text-blue-200 mb-2 block">Servicio Integral</span>
          <h1 className="text-4xl md:text-6xl font-black mb-8">Plomería General <br/>en Reynosa</h1>
          <a href={`tel:${CONTACT_INFO.phone}`} className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition shadow-lg">
            Solicitar Plomero
          </a>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expertos en instalaciones y reparaciones</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Desde una llave que gotea hasta la instalación completa de la tubería de una casa nueva. En JUMAX contamos con la herramienta y la experiencia para realizar trabajos duraderos y de calidad.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="bg-blue-50 p-4 h-fit rounded-2xl text-brand-blue">
                    <Droplet className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Reparación de Fugas</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">Detectamos y reparamos fugas de agua visibles y ocultas. Evita el desperdicio de agua y facturas altas. Reparamos fugas en:</p>
                    <ul className="list-disc list-inside mt-2 text-slate-600 ml-2 space-y-2">
                      <li>Tuberías de cobre, CPVC y Tuboplus</li>
                      <li>Llaves de paso y mangueras</li>
                      <li>Tanques de WC</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-blue-50 p-4 h-fit rounded-2xl text-brand-blue">
                    <Settings className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Instalación de Muebles de Baño</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">Renueva tu baño con instalación profesional de:</p>
                    <ul className="list-disc list-inside mt-2 text-slate-600 ml-2 space-y-2">
                      <li>Sanitarios (WC)</li>
                      <li>Lavabos y mezcladoras</li>
                      <li>Regaderas y monomandos</li>
                      <li>Tinacos y bombas de agua</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-blue-50 p-4 h-fit rounded-2xl text-brand-blue">
                    <PenTool className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Mantenimiento General</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Servicio preventivo y correctivo para casas y negocios. Mantenemos tu sistema hidráulico funcionando correctamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="h-fit sticky top-28 space-y-8">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
                alt="Plomería de calidad" 
                className="rounded-2xl shadow-xl w-full object-cover h-64"
              />
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">¿Necesitas un plomero?</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  No arriesgues tu patrimonio con reparaciones temporales. Llama a los expertos de JUMAX.
                </p>
                <div className="space-y-3">
                   <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="w-full block bg-white border-2 border-brand-blue text-brand-blue font-bold py-3 text-center rounded-lg hover:bg-blue-50 transition"
                  >
                    Llamar: {CONTACT_INFO.displayPhone}
                  </a>
                   <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="w-full block bg-green-500 text-white font-bold py-3 text-center rounded-lg hover:bg-green-600 transition"
                  >
                    Enviar WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-2">¿Tu problema es el drenaje?</h3>
              <p className="text-slate-400">Visita nuestra sección especializada en destapes.</p>
            </div>
            <Link to={ROUTES.DRAIN_CLEANING} className="bg-brand-orange text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-darkOrange transition shadow-lg hover:scale-105">
              Ver servicio de Destape <ArrowRight size={20} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default GeneralPlumbing;