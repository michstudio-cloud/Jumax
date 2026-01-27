import React, { useState } from 'react';
import { X, MessageCircle, MapPin, Wrench, User, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Destape de Drenaje',
    location: '',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola JUMAX, me gustaría solicitar una cotización:
    
👤 *Nombre:* ${formData.name}
🛠 *Servicio:* ${formData.service}
📍 *Ubicación:* ${formData.location}
📝 *Detalles:* ${formData.details}`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-down">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
          <h3 className="text-white font-heading font-bold text-xl flex items-center gap-2">
            <MessageCircle className="text-brand-orange" size={24} />
            Solicitar Cotización
          </h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition p-1 rounded-full hover:bg-white/10"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <p className="text-slate-600 mb-6 text-sm">
            Completa los datos para enviarte una estimación rápida directamente por WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1">
                <User size={14} /> Nombre
              </label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition text-slate-800"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Service Type */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1">
                <Wrench size={14} /> Servicio
              </label>
              <select 
                name="service"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition text-slate-800 appearance-none"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Destape de Drenaje</option>
                <option>Plomería General</option>
                <option>Fugas de Agua</option>
                <option>Instalación de Equipos</option>
                <option>Mantenimiento Preventivo</option>
                <option>Otro</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1">
                <MapPin size={14} /> Colonia / Ubicación
              </label>
              <input 
                type="text" 
                name="location"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition text-slate-800"
                placeholder="Ej. Col. Las Fuentes, Reynosa"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* Details */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1">
                <FileText size={14} /> Detalles del problema
              </label>
              <textarea 
                name="details"
                rows={3}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition text-slate-800 resize-none"
                placeholder="Describe brevemente qué necesitas..."
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4 group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition" />
              Enviar a WhatsApp
            </button>
            
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Serás redirigido a WhatsApp para enviar la información.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};