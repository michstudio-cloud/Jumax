import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ShieldCheck, MapPin, ArrowRight, MessageCircle, Heart, ThumbsUp } from 'lucide-react';
import { CONTACT_INFO, ROUTES } from '../constants';
import { TestimonialCard } from '../components/TestimonialCard';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Destape de drenajes en Reynosa | JUMAX Plomería Urgente";
  }, []);

  return (
    <div className="flex flex-col w-full font-sans">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        {/* Background Image - High Quality Plumber */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://jumax.com.mx/wp-content/uploads/2024/07/441178261_1404844966899644_3683294244773623264_n.jpg" 
            alt="Plomero profesional trabajando" 
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl pt-20">
            {/* Warranty Badge Image */}
            <div className="mb-6 animate-fade-in-down">
                <img 
                    src="https://jumax.com.mx/wp-content/uploads/2024/07/badge_1.svg" 
                    alt="100% Garantía de Satisfacción" 
                    className="h-14 md:h-16 drop-shadow-lg"
                />
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-xl">
              ¿Problemas de drenaje <br/><span className="text-brand-orange">en tu hogar?</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl font-light leading-relaxed border-l-4 border-brand-orange pl-6">
              Jumax ofrece soluciones rápidas, limpias y garantizadas. Desde destapes urgentes hasta instalaciones complejas, recupera la tranquilidad de tu hogar hoy mismo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-lg text-lg transition shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="text-green-600"/>
                Cotizar por WhatsApp
              </a>
               <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-4 px-8 rounded-lg text-lg transition shadow-xl text-center"
              >
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Social Proof (Bottom Left) */}
          <div className="absolute bottom-12 left-4 md:left-8 max-w-xs md:max-w-sm bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 hidden sm:block">
            <div className="flex gap-4">
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" alt="Cliente" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"/>
                 <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
                    <ThumbsUp size={10} className="text-white" />
                 </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-sm">Magdalena Mejia</h4>
                <p className="text-slate-200 text-xs mt-0.5 leading-snug">
                  "Los recomiendo altamente. Servicio rápido y calidad en lo que ofrecen."
                </p>
                <div className="flex items-center gap-1 mt-2">
                   {[...Array(5)].map((_,i)=><span key={i} className="text-yellow-400 text-xs">★</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* Floating WhatsApp Badge (Bottom Right) */}
          <div className="absolute bottom-8 right-4 md:right-8 flex flex-col items-end gap-3 z-50">
             <div className="bg-white text-slate-800 px-4 py-2 rounded-xl font-bold shadow-lg text-sm mb-2 animate-bounce flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                ¿Necesitas ayuda urgente?
             </div>
             <a 
               href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
               className="transform transition hover:scale-110 drop-shadow-2xl"
             >
               <img 
                src="https://s3.amazonaws.com/artibot-account-files-prod/4c/4c693b9b-9dbc-4243-b50d-fa6b54818ff6/24b7bf29-4b3e-4e8f-8ab2-7a6b6869fb37/botImage?v=638580641209315326" 
                alt="Chat WhatsApp" 
                className="w-16 h-16 md:w-20 md:h-20"
               />
             </a>
          </div>

        </div>
      </section>

      {/* Services Grid - Premium Images */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">Nuestros Servicios</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Soluciones Profesionales</h3>
            <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-light">Calidad y eficiencia en cada trabajo realizado en Reynosa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 - Drain Cleaning */}
            <Link to={ROUTES.DRAIN_CLEANING} className="group bg-white rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1632759929848-18544c01d904?auto=format&fit=crop&w=800&q=80" 
                    alt="Destape de drenaje" 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                 />
                 <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition duration-300"></div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition">Destape de Drenaje</h3>
                <p className="text-slate-500 text-lg mb-6 leading-relaxed">Tecnología avanzada para eliminar obstrucciones en tuberías, WC y registros sin romper.</p>
                <div className="mt-auto flex items-center text-brand-orange font-bold text-sm tracking-wide uppercase group/link">
                  Ver Detalles <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition" />
                </div>
              </div>
            </Link>

            {/* Service 2 - Pipe Cleaning */}
            <Link to={ROUTES.DRAIN_CLEANING} className="group bg-white rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80" 
                    alt="Limpieza de tuberías" 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                 />
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition">Mantenimiento</h3>
                <p className="text-slate-500 text-lg mb-6 leading-relaxed">Limpieza preventiva y correctiva para evitar malos olores y asegurar el flujo correcto.</p>
                <div className="mt-auto flex items-center text-brand-orange font-bold text-sm tracking-wide uppercase group/link">
                  Ver Detalles <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition" />
                </div>
              </div>
            </Link>

            {/* Service 3 - Residential */}
            <Link to={ROUTES.PLUMBING} className="group bg-white rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
               <div className="h-64 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
                    alt="Plomería Residencial" 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                 />
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition">Residencial</h3>
                <p className="text-slate-500 text-lg mb-6 leading-relaxed">Instalación de baños, reparación de fugas y todo tipo de reparaciones domésticas.</p>
                <div className="mt-auto flex items-center text-brand-orange font-bold text-sm tracking-wide uppercase group/link">
                  Ver Detalles <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition" />
                </div>
              </div>
            </Link>

             {/* Service 4 - Commercial */}
             <Link to={ROUTES.PLUMBING} className="group bg-white rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
               <div className="h-64 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                    alt="Plomería Comercial" 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                 />
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition">Comercial</h3>
                <p className="text-slate-500 text-lg mb-6 leading-relaxed">Servicio especializado para empresas, restaurantes y oficinas con facturación.</p>
                <div className="mt-auto flex items-center text-brand-orange font-bold text-sm tracking-wide uppercase group/link">
                  Ver Detalles <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Layout */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <div className="relative">
                 {/* Main Image */}
                 <img 
                    src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&w=800&q=80" 
                    alt="Herramientas profesionales" 
                    className="rounded-2xl shadow-2xl relative z-10 w-full"
                 />
                 {/* Decorative Box */}
                 <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-slate-100 rounded-2xl z-0"></div>
                 {/* Stats Card */}
                 <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-6 rounded-xl shadow-xl z-20 max-w-[200px]">
                    <div className="text-4xl font-black text-brand-orange mb-1">10+</div>
                    <div className="text-sm font-medium leading-tight">Años de experiencia en Reynosa</div>
                 </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">¿Por qué elegirnos?</h2>
              <h3 className="text-4xl font-heading font-bold text-slate-900 mb-8">Compromiso con la Excelencia</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-blue-50 p-4 rounded-xl text-brand-blue shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">Cobertura Total en Reynosa</h4>
                    <p className="text-slate-500 text-lg leading-relaxed">Nuestras unidades móviles están distribuidas estratégicamente para llegar a cualquier colonia en tiempo récord.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-orange-50 p-4 rounded-xl text-brand-orange shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">Respuesta Inmediata</h4>
                    <p className="text-slate-500 text-lg leading-relaxed">Sabemos que una fuga o un drenaje tapado no puede esperar. Priorizamos las emergencias.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-green-50 p-4 rounded-xl text-green-600 shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">Garantía por Escrito</h4>
                    <p className="text-slate-500 text-lg leading-relaxed">Respaldamos cada trabajo. Si el problema persiste, regresamos sin costo adicional dentro del periodo de garantía.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Steps - Dark Premium */}
      <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[100px]"></div>
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

      {/* Testimonials - Clean Cards */}
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

      {/* Final CTA - Premium Gradient */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-brand-blue text-white text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 relative z-10">
           <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">¿Drenaje tapado? <br/> <span className="text-brand-orange">Te atendemos hoy</span></h2>
           <p className="text-xl mb-10 text-slate-300 font-light max-w-2xl mx-auto">No dejes que un problema pequeño se convierta en una reparación costosa. Agenda tu visita ahora.</p>
           <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-5 px-12 rounded-full text-lg transition shadow-2xl hover:scale-105"
            >
              <MessageCircle size={24} />
              Solicitar Servicio
            </a>
         </div>
      </section>
    </div>
  );
};

export default Home;