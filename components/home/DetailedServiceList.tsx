import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { ROUTES, CONTACT_INFO } from '../../constants';

export const DetailedServiceList: React.FC = () => {
  const benefits = [
    "Garantía de 30 días en todos los servicios.",
    "Opciones de Pago Flexibles a tu medida.",
    "Satisfacción Garantizada.",
    "Comunicación Transparente."
  ];

  const servicesColumn1 = [
    { name: "LIMPIEZA DE DRENAJES", link: ROUTES.DRAIN_CLEANING },
    { name: "FOSA SÉPTICA", link: ROUTES.DRAIN_CLEANING },
    { name: "TUBERIAS TAPADAS", link: ROUTES.DRAIN_CLEANING },
    { name: "FUGAS OCULTAS", link: ROUTES.PLUMBING },
    { name: "PRUEBAS HERMÉTICAS", link: ROUTES.PLUMBING },
    { name: "BOMBAS", link: ROUTES.PLUMBING },
    { name: "CISTERNAS", link: ROUTES.PLUMBING },
  ];

  const servicesColumn2 = [
    { name: "ELECTRICIDAD", link: ROUTES.CONTACT },
    { name: "BOILERS", link: ROUTES.PLUMBING },
    { name: "TÉCNICOS EN GAS", link: ROUTES.PLUMBING },
    { name: "MINISPLITS", link: ROUTES.CONTACT },
    { name: "INSTALACIÓN DE SECADORAS", link: ROUTES.PLUMBING },
    { name: "INSTALACIÓN DE LAVADORAS", link: ROUTES.PLUMBING },
    { name: "INSTALACIÓN DE ESTUFAS", link: ROUTES.PLUMBING },
  ];

  const servicesColumn3 = [
    { name: "OBRA CIVIL", link: ROUTES.CONTACT },
    { name: "CONSTRUCCIÓN", link: ROUTES.CONTACT },
    { name: "ALBAÑILERÍA", link: ROUTES.CONTACT },
    { name: "PINTURA", link: ROUTES.CONTACT },
    { name: "CONSTRUCCIÓN DE ALBERCAS", link: ROUTES.CONTACT },
    { name: "DETECCION DE FUGAS EN SUBSUELO", link: ROUTES.PLUMBING },
    { name: "SISTEMAS HIDRONEUMÁTICOS", link: ROUTES.PLUMBING },
  ];

  return (
    <section className="bg-white">
      {/* Benefits Bar */}
      <div className="bg-[#FAF9F6] py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h3 className="font-bold text-sm tracking-widest uppercase mb-8 text-slate-900">
             TÚ MERECES UN HOGAR SIN PREOCUPACIONES
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-brand-orange mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-slate-700 font-medium leading-snug">{benefit}</p>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Image Banner with CTA */}
      <div className="relative h-[400px] md:h-[500px] w-full group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
          alt="Equipo JUMAX Profesionales" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
        />
        {/* Overlay CTA Button - Positioning based on design */}
        <div className="absolute top-0 right-0 md:right-0 bg-slate-900 text-white py-6 px-10 md:py-8 md:px-16 flex items-center gap-4 hover:bg-brand-orange transition duration-300 cursor-pointer">
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="font-heading font-bold tracking-widest uppercase text-sm md:text-base">
              CONTÁCTANOS
            </a>
            <ArrowRight size={20} />
        </div>
      </div>

      {/* Services List Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          
          {/* Column 1 */}
          <div className="space-y-6">
             <div className="text-brand-orange text-sm font-bold mb-4">/ Servicios Sanitarios</div>
             <ul className="space-y-6">
                {servicesColumn1.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link} className="flex items-center justify-between group cursor-pointer">
                       <span className="font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors text-sm md:text-base">
                         {item.name}
                       </span>
                       <ArrowRight className="text-slate-400 group-hover:text-brand-orange group-hover:translate-x-2 transition-all duration-300" size={20} />
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Column 2 */}
           <div className="space-y-6">
             <div className="text-brand-orange text-sm font-bold mb-4">/ Instalaciones y Gas</div>
             <ul className="space-y-6">
                {servicesColumn2.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link} className="flex items-center justify-between group cursor-pointer">
                       <span className="font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors text-sm md:text-base">
                         {item.name}
                       </span>
                       <ArrowRight className="text-slate-400 group-hover:text-brand-orange group-hover:translate-x-2 transition-all duration-300" size={20} />
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          {/* Column 3 */}
           <div className="space-y-6">
             <div className="text-brand-orange text-sm font-bold mb-4">/ Construcción y Civil</div>
             <ul className="space-y-6">
                {servicesColumn3.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link} className="flex items-center justify-between group cursor-pointer">
                       <span className="font-heading font-bold text-slate-900 group-hover:text-brand-orange transition-colors text-sm md:text-base">
                         {item.name}
                       </span>
                       <ArrowRight className="text-slate-400 group-hover:text-brand-orange group-hover:translate-x-2 transition-all duration-300" size={20} />
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};