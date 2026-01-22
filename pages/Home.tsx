import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { DetailedServiceList } from '../components/home/DetailedServiceList';
import { IntegralSolutions } from '../components/home/IntegralSolutions';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessSteps } from '../components/home/ProcessSteps';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FinalCTA } from '../components/home/FinalCTA';
import { FloatingWhatsApp } from '../components/home/FloatingWhatsApp';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Destape de drenajes en Reynosa | JUMAX Plomería Urgente";
  }, []);

  return (
    <div className="flex flex-col w-full font-sans">
      <Hero />
      <ServicesGrid />
      <DetailedServiceList />
      <IntegralSolutions />
      <WhyChooseUs />
      <ProcessSteps />
      <TestimonialsSection />
      <FinalCTA />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;