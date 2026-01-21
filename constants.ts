import { Phone, MessageCircle, Wrench, Droplets, Home, Info, MapPin } from 'lucide-react';

export const CONTACT_INFO = {
  phone: '8991680848', 
  displayPhone: '899 168 0848',
  whatsapp: '528991680848', // Format for WA link
  city: 'Reynosa, Tamaulipas',
  hours: 'Lunes a Domingo: 7:00 AM - 10:00 PM',
};

export const ROUTES = {
  HOME: '/',
  DRAIN_CLEANING: '/destape-drenaje-reynosa',
  PLUMBING: '/plomeria-reynosa',
  ABOUT: '/sobre-jumax',
  CONTACT: '/contacto',
  PRIVACY: '/aviso-de-privacidad',
};

export const NAV_LINKS = [
  { label: 'Inicio', path: ROUTES.HOME, icon: Home },
  { label: 'Destape de Drenaje', path: ROUTES.DRAIN_CLEANING, icon: Droplets },
  { label: 'Plomería', path: ROUTES.PLUMBING, icon: Wrench },
  { label: 'Nosotros', path: ROUTES.ABOUT, icon: Info },
  { label: 'Contacto', path: ROUTES.CONTACT, icon: MapPin },
];