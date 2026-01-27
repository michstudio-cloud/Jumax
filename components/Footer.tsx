import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { JumaxLogo } from './Icons';
import { CONTACT_INFO, ROUTES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white flex flex-col font-sans">
      
      {/* 1. Visual Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-auto min-h-[400px]">
        
        {/* Col 1: House Image */}
        <div className="relative h-[300px] lg:h-auto bg-brand-orange overflow-hidden group">
           {/* Fallback color is orange, imitating the background in the design */}
           <img 
             src="https://images.unsplash.com/photo-1600596542815-e32c215f8fbb?auto=format&fit=crop&q=80&w=800" 
             alt="Hogar JUMAX" 
             className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition duration-700 filter grayscale-[20%]"
           />
           <div className="absolute inset-0 bg-brand-orange mix-blend-color opacity-30"></div>
        </div>

        {/* Col 2: Black Box with Promise & Badge */}
        <div className="bg-black flex flex-col justify-center items-start px-12 py-16 lg:px-16 relative">
          <p className="text-white text-2xl md:text-3xl font-light leading-snug tracking-wide mb-20">
            Aliado confiable en el mantenimiento y mejora de su hogar.
          </p>
          
          {/* Custom Guarantee Badge */}
          <div className="bg-[#FFC107] text-black px-4 py-2 flex items-center gap-3 font-bold transform -rotate-1 shadow-lg border-2 border-white/10">
             <span className="text-3xl tracking-tighter">100%</span>
             <div className="h-8 w-px bg-black/20"></div>
             <div className="flex flex-col leading-none text-[10px] uppercase tracking-wider">
               <span>Garantía</span>
               <span>de 30 días</span>
             </div>
          </div>
        </div>

        {/* Col 3: Pipes Image */}
        <div className="relative h-[300px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
             alt="Soluciones Industriales" 
             className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
           />
        </div>
      </div>

      {/* 2. Main Contact Bar */}
      <div className="max-w-[1400px] mx-auto w-full px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
           {/* Logo */}
           <div className="w-48">
             <JumaxLogo className="w-full h-auto text-slate-900" />
           </div>

           {/* Email */}
           <a 
             href="mailto:CONTACTO@JUMAX.COM.MX" 
             className="font-heading font-bold text-lg md:text-xl text-slate-900 hover:text-brand-orange transition tracking-wide uppercase"
           >
             CONTACTO@JUMAX.COM.MX
           </a>

           {/* Phone */}
           <a 
             href={`tel:${CONTACT_INFO.phone}`}
             className="font-heading font-bold text-lg md:text-xl text-slate-900 hover:text-brand-orange transition tracking-wide"
           >
             +52 {CONTACT_INFO.displayPhone}
           </a>
        </div>
      </div>

      {/* 3. Bottom Legal & Social Bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto w-full px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
           
           {/* Copyright */}
           <div>
             © 2026 JUMAX
           </div>

           {/* Legal Links */}
           <div className="flex gap-8">
             <Link to={ROUTES.PRIVACY} className="hover:text-brand-orange transition">Términos y Condiciones</Link>
             <Link to={ROUTES.PRIVACY} className="hover:text-brand-orange transition">Política de Privacidad</Link>
           </div>

           {/* Social Icons */}
           <div className="flex gap-6">
             <a href="#" className="text-brand-orange hover:text-brand-darkOrange transition hover:scale-110">
               <Facebook size={24} fill="currentColor" strokeWidth={0} />
             </a>
             <a href="#" className="text-brand-orange hover:text-brand-darkOrange transition hover:scale-110">
               <Instagram size={24} />
             </a>
           </div>

        </div>
      </div>

    </footer>
  );
};