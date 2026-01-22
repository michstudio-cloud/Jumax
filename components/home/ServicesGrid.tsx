import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '../../constants';

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">Nuestros Servicios</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Soluciones Profesionales</h3>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-light">Calidad y eficiencia en cada trabajo realizado en Reynosa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 - Drain Cleaning */}
          <Link to={ROUTES.DRAIN_CLEANING} className="group bg-white rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
            <div className="h-64 overflow-hidden relative">
               <img 
                  src="https://images.unsplash.com/photo-1632759929848-18544c01d904?auto=format&fit=crop&w=800&q=80" 
                  alt="Destape de drenaje" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  loading="lazy"
               />
               <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition duration-300"></div>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition">Destape de Drenaje</h3>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">Tecnología avanzada para eliminar obstrucciones en tuberías, WC y registros sin romper.</p>
              <div className="mt-auto flex items-center text-brand-orange font-bold text-sm tracking-wide uppercase group/link">
                Ver Detalles <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition" />
              </div>
            </div>
          </Link>

          {/* Service 2 - Pipe Cleaning */}
          <Link to={ROUTES.DRAIN_CLEANING} className="group bg-white rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
            <div className="h-64 overflow-hidden relative">
               <img 
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80" 
                  alt="Limpieza de tuberías" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  loading="lazy"
               />
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition">Mantenimiento</h3>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">Limpieza preventiva y correctiva para evitar malos olores y asegurar el flujo correcto.</p>
              <div className="mt-auto flex items-center text-brand-orange font-bold text-sm tracking-wide uppercase group/link">
                Ver Detalles <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition" />
              </div>
            </div>
          </Link>

          {/* Service 3 - Residential */}
          <Link to={ROUTES.PLUMBING} className="group bg-white rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
             <div className="h-64 overflow-hidden relative">
               <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
                  alt="Plomería Residencial" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  loading="lazy"
               />
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition">Residencial</h3>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">Instalación de baños, reparación de fugas y todo tipo de reparaciones domésticas.</p>
              <div className="mt-auto flex items-center text-brand-orange font-bold text-sm tracking-wide uppercase group/link">
                Ver Detalles <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition" />
              </div>
            </div>
          </Link>

           {/* Service 4 - Commercial */}
           <Link to={ROUTES.PLUMBING} className="group bg-white rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
             <div className="h-64 overflow-hidden relative">
               <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                  alt="Plomería Comercial" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  loading="lazy"
               />
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition">Comercial</h3>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">Servicio especializado para empresas, restaurantes y oficinas con facturación.</p>
              <div className="mt-auto flex items-center text-brand-orange font-bold text-sm tracking-wide uppercase group/link">
                Ver Detalles <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};