import React from 'react';

export const ProcessSteps: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-800 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-orange rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-4">Proceso Simple</h2>
           <h3 className="text-4xl md:text-5xl font-heading font-bold">Tu solución en 3 pasos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700/50 z-0"></div>

          <div className="relative z-10 text-center group">
            <div className="w-24 h-24 bg-slate-800 border-4 border-slate-700 group-hover:border-brand-orange transition duration-500 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-2xl">1</div>
            <h3 className="text-2xl font-heading font-bold mb-4">Contáctanos</h3>
            <p className="text-slate-400 text-lg leading-relaxed px-4">Envía un WhatsApp o llámanos. Describe tu problema y recibe atención personalizada inmediata.</p>
          </div>

          <div className="relative z-10 text-center group">
            <div className="w-24 h-24 bg-slate-800 border-4 border-slate-700 group-hover:border-brand-orange transition duration-500 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-2xl">2</div>
            <h3 className="text-2xl font-heading font-bold mb-4">Diagnóstico</h3>
            <p className="text-slate-400 text-lg leading-relaxed px-4">Un técnico experto evalúa la situación en sitio y te proporciona un presupuesto claro y sin sorpresas.</p>
          </div>

          <div className="relative z-10 text-center group">
            <div className="w-24 h-24 bg-slate-800 border-4 border-slate-700 group-hover:border-brand-orange transition duration-500 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-2xl">3</div>
            <h3 className="text-2xl font-heading font-bold mb-4">Solución</h3>
            <p className="text-slate-400 text-lg leading-relaxed px-4">Realizamos el trabajo con limpieza y rapidez. Tu hogar vuelve a la normalidad el mismo día.</p>
          </div>
        </div>
      </div>
    </section>
  );
};