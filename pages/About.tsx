import React, { useEffect } from 'react';
import { Star, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Sobre JUMAX | Plomeros en Reynosa";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-brand-darkBlue py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Sobre JUMAX</h1>
        <p className="text-xl text-blue-200">Tu aliado de confianza en plomería</p>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Quiénes Somos</h2>
           <p className="text-lg text-slate-600 mb-6 leading-relaxed">
             JUMAX Reynosa nació con la misión de profesionalizar el servicio de plomería y destape de drenajes en la ciudad. Entendemos la frustración de no encontrar un técnico confiable, puntual y honesto cuando ocurre una emergencia en el hogar.
           </p>
           <p className="text-lg text-slate-600 mb-12 leading-relaxed">
             Nos especializamos en brindar soluciones rápidas y definitivas. Contamos con equipo moderno que nos permite diagnosticar y reparar problemas sin causar daños innecesarios a su propiedad.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center p-6 bg-slate-50 rounded-xl">
               <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                 <Users size={32} />
               </div>
               <h3 className="font-heading font-bold text-xl mb-2">Experiencia</h3>
               <p className="text-slate-500 text-lg">Años sirviendo a familias y negocios en Reynosa.</p>
             </div>
             <div className="text-center p-6 bg-slate-50 rounded-xl">
               <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                 <Award size={32} />
               </div>
               <h3 className="font-heading font-bold text-xl mb-2">Calidad</h3>
               <p className="text-slate-500 text-lg">Utilizamos materiales de primera y herramientas especializadas.</p>
             </div>
             <div className="text-center p-6 bg-slate-50 rounded-xl">
               <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                 <Star size={32} />
               </div>
               <h3 className="font-heading font-bold text-xl mb-2">Honestidad</h3>
               <p className="text-slate-500 text-lg">Cobros justos y transparentes desde el principio.</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;