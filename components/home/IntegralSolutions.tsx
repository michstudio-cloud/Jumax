import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HardHat, Cone, Layers } from 'lucide-react';
import { ROUTES } from '../../constants';

export const IntegralSolutions: React.FC = () => {
  return (
    <section className="w-full">
      {/* Massive Blue Banner */}
      <div className="relative w-full bg-[#0088cc] overflow-hidden min-h-[500px] flex items-center">
        
        {/* Background Image with Blend Mode */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Construcción y Soluciones Integrales" 
            className="w-full h-full object-cover mix-blend-multiply opacity-60 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[#0088cc] mix-blend-color opacity-50"></div>
        </div>

        {/* CTA Button - Top Right Absolute */}
        <div className="absolute top-0 right-0 z-20 hidden md:block">
            <Link 
              to={ROUTES.ABOUT} 
              className="bg-slate-900 text-white font-bold tracking-widest text-sm py-6 px-12 flex items-center gap-3 hover:bg-black transition-colors uppercase"
            >
              Conócenos <ArrowRight size={18} />
            </Link>
        </div>

        {/* Big Typography Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="font-heading font-black text-white text-5xl sm:text-7xl md:text-[7rem] leading-[0.9] tracking-tighter uppercase drop-shadow-sm text-center md:text-right">
              <span className="block md:inline">¡Soluciones</span><br className="hidden md:block" />
              <span className="block">Integrales para</span>
              <span className="block">tu hogar y</span>
              <span className="block">negocio!</span>
            </h2>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-6">
              <div className="text-slate-800 shrink-0">
                 <HardHat strokeWidth={1} size={48} />
              </div>
              <p className="text-slate-600 text-lg leading-snug">
                Queremos mantener tu hogar funcionando a la perfección.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-6">
              <div className="text-slate-800 shrink-0">
                 <Cone strokeWidth={1} size={48} />
              </div>
              <p className="text-slate-600 text-lg leading-snug">
                Con más de 20 servicios para ti, somos tu aliado en el Hogar.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-6">
              <div className="text-slate-800 shrink-0">
                 <Layers strokeWidth={1} size={48} />
              </div>
              <p className="text-slate-600 text-lg leading-snug">
                Garantía de 30 días, en Jumax cuidamos de tu tranquilidad.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};