import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Star, MessageCircle, MapPin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS, ROUTES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-slate-50">
      
      {/* Main Navigation Header */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to={ROUTES.HOME} className="flex items-center gap-2" onClick={closeMenu}>
                <img 
                  src="https://jumax.com.mx/wp-content/uploads/2023/07/jumax-imagotipo.svg" 
                  alt="JUMAX" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Center/Right Info (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center space-x-12">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600">4.8 RATING</span>
              </div>

              {/* Separator */}
              <div className="h-8 w-px bg-slate-200"></div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">DISPONIBLE</span>
              </div>

               {/* Separator */}
               <div className="h-8 w-px bg-slate-200"></div>

              {/* Phone */}
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 group">
                <span className="text-lg font-light text-slate-600 group-hover:text-slate-900 transition">
                  {CONTACT_INFO.displayPhone}
                </span>
                <ArrowUpRight size={16} className="text-brand-orange" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
               <a href={`tel:${CONTACT_INFO.phone}`} className="mr-4 text-slate-900 font-bold">
                  {CONTACT_INFO.displayPhone}
               </a>
              <button
                onClick={toggleMenu}
                className="text-slate-900 hover:text-brand-orange focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links (Secondary Row or Integrated? Using integrated for simplicity but hidden if narrow) */}
        <div className="hidden lg:flex border-t border-slate-100 justify-center bg-white py-2 space-x-8">
            {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-brand-orange ${
                    isActive(link.path) ? 'text-brand-orange' : 'text-slate-500'
                  }`}
                >
                  {link.label}
                </Link>
            ))}
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-4 rounded-md text-base font-bold ${
                    isActive(link.path) ? 'bg-slate-50 text-brand-orange' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Black Promo Bar */}
      <div className="bg-slate-900 text-white text-xs md:text-sm py-2 px-4 text-center font-medium">
        Obtén tu diagnóstico sin costo al realizar el trabajo con nosotros. 🚀 <span className="text-slate-400 font-light ml-2">*Solo diagnóstico $300</span>
      </div>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6 bg-white w-fit p-2 rounded-lg">
               <img 
                  src="https://jumax.com.mx/wp-content/uploads/2023/07/jumax-imagotipo.svg" 
                  alt="JUMAX" 
                  className="h-8 w-auto"
                />
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Soluciones rápidas y garantizadas para problemas de plomería y drenaje en todo Reynosa.
            </p>
            <div className="flex space-x-4">
              <Facebook className="hover:text-brand-orange cursor-pointer transition" />
              <Instagram className="hover:text-brand-orange cursor-pointer transition" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to={ROUTES.DRAIN_CLEANING} className="hover:text-brand-orange transition">Destape de Drenaje</Link></li>
              <li><Link to={ROUTES.PLUMBING} className="hover:text-brand-orange transition">Plomería General</Link></li>
              <li><Link to={ROUTES.PLUMBING} className="hover:text-brand-orange transition">Fugas de Agua</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition">{CONTACT_INFO.displayPhone}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} JUMAX Reynosa.</p>
          <Link to={ROUTES.PRIVACY} className="hover:text-brand-orange ml-4">Privacidad</Link>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-slate-200 p-2 flex gap-2 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 bg-brand-blue text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2 active:bg-brand-darkBlue"
        >
          <Phone size={20} /> Llamar
        </a>
        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          className="flex-1 bg-green-500 text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2 active:bg-green-600"
        >
          <MessageCircle size={20} /> WhatsApp
        </a>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Layout;