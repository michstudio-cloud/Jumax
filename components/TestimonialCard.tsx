import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ name, location, text }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col h-full">
    <div className="flex text-brand-orange mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" className="mr-1" />
      ))}
    </div>
    <p className="text-slate-600 italic mb-6 flex-grow">"{text}"</p>
    <div className="mt-auto border-t border-slate-100 pt-4">
      <p className="font-bold text-slate-800">{name}</p>
      <p className="text-xs text-slate-500 uppercase tracking-wide">{location}</p>
    </div>
  </div>
);