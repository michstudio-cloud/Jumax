import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Star, MessageCircle, MapPin, ArrowUpRight, Calculator } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS, ROUTES } from '../constants';
import { JumaxLogo } from './Icons'; // Importamos el logo SVG
import { Footer } from './Footer';
import { QuoteModal } from './QuoteModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setIsMenuOpen(false);
  };

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
                {/* Usamos el componente SVG directamente */}
                <JumaxLogo className="h-10 w-auto text-slate-900" />
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

              {/* Phone */}
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 group">
                <span className="text-lg font-light text-slate-600 group-hover:text-slate-900 transition">
                  {CONTACT_INFO.displayPhone}
                </span>
                <ArrowUpRight size={16} className="text-brand-orange" />
              </a>

               {/* Separator */}
               <div className="h-8 w-px bg-slate-200"></div>
              
              {/* Quote Button */}
              <button 
                onClick={openQuoteModal}
                className="bg-brand-orange hover:bg-brand-darkOrange text-white text-sm font-bold py-3 px-6 rounded-full transition shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Calculator size={18} />
                COTIZAR AHORA
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden gap-4">
               {/* Mobile Quote Icon */}
               <button 
                onClick={openQuoteModal}
                className="bg-brand-orange text-white p-2 rounded-full shadow-md active:scale-95 transition"
               >
                 <Calculator size={20} />
               </button>

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
              <button
                onClick={openQuoteModal}
                className="w-full text-left block px-3 py-4 rounded-md text-base font-bold text-white bg-slate-900 mt-4 flex items-center gap-2"
              >
                <Calculator size={18} /> Solicitar Cotización
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Black Promo Bar - Clickable to Open Modal */}
      <div 
        onClick={openQuoteModal}
        className="bg-slate-900 text-white text-xs md:text-sm py-2 px-4 text-center font-medium cursor-pointer hover:bg-black transition-colors"
      >
        Obtén tu diagnóstico sin costo al realizar el trabajo con nosotros. 🚀 <span className="text-slate-400 font-light ml-2 underline decoration-brand-orange underline-offset-2 decoration-2">*Solo diagnóstico $300 (Clic para Cotizar)</span>
      </div>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* New Visual Footer */}
      <Footer />

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

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default Layout;