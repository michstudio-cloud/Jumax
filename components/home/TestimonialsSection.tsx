import React from 'react';
import { TestimonialCard } from '../TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-slate-900 mb-16">Lo que dicen nuestros clientes</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <TestimonialCard 
              name="Roberto Garza"
              location="Col. Las Fuentes"
              text="Excelente servicio. Llegaron en menos de 2 horas y destaparon el registro que tenía años dando problemas. Muy recomendados."
           />
           <TestimonialCard 
              name="Ana María López"
              location="Col. Petrolera"
              text="Muy amables y limpios. Me explicaron por qué se tapaba mi fregadero y lo solucionaron rápido. El precio fue justo."
           />
           <TestimonialCard 
              name="Carlos Hernández"
              location="Col. Jarachina"
              text="Los contacté en domingo por una urgencia en el baño y me atendieron. JUMAX me salvó el día."
           />
         </div>
      </div>
    </section>
  );
};