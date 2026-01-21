import React, { useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contacto | JUMAX Plomería Reynosa";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-slate-50">
      <div className="bg-brand-darkBlue py-16 text-center text-white">
        <h1 className="text-4xl font-black mb-4">Contáctanos</h1>
        <p className="text-lg text-blue-200">Estamos listos para atender tu emergencia</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Información de Contacto</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-brand-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Teléfono</h3>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-600 hover:text-brand-blue text-lg block mt-1">
                    {CONTACT_INFO.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 p-3 rounded-full text-green-600">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">WhatsApp</h3>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="text-slate-600 hover:text-green-600 text-lg block mt-1">
                    Enviar mensaje directo
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-full text-brand-orange">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Horario de Atención</h3>
                  <p className="text-slate-600 mt-1">{CONTACT_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-slate-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Área de Servicio</h3>
                  <p className="text-slate-600 mt-1">{CONTACT_INFO.city} y alrededores.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Form (Visual Only) */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h2>
            <form className="bg-white p-8 rounded-xl shadow-lg border border-slate-100" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Nombre Completo</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Teléfono</label>
                  <input type="tel" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="Tu número de celular" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Servicio de interés</label>
                  <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition">
                    <option>Destape de Drenaje</option>
                    <option>Plomería General</option>
                    <option>Fugas de Agua</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Mensaje</label>
                  <textarea className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition h-32" placeholder="Describe brevemente tu problema..."></textarea>
                </div>
                <button className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white font-bold py-4 rounded-lg transition text-lg">
                  Enviar Mensaje
                </button>
                <p className="text-xs text-slate-400 text-center mt-4">
                  Al enviar este formulario, aceptas ser contactado por JUMAX para atender tu solicitud.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;