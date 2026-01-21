import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = "Aviso de Privacidad | JUMAX Reynosa";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Aviso de Privacidad</h1>
      <div className="prose prose-slate">
        <p className="mb-4">
          En JUMAX Reynosa, nos comprometemos a proteger su privacidad. Este Aviso de Privacidad explica cómo recopilamos, usamos y protegemos su información personal.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-2">Recopilación de Información</h2>
        <p className="mb-4">
          Recopilamos información que usted nos proporciona directamente, como su nombre, número de teléfono y dirección cuando solicita nuestros servicios de plomería o destape de drenajes.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-2">Uso de la Información</h2>
        <p className="mb-4">
          Utilizamos la información recopilada únicamente para:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Proveer los servicios solicitados.</li>
          <li>Contactarlo para confirmar citas o dar seguimiento.</li>
          <li>Mejorar nuestros servicios.</li>
        </ul>
        <h2 className="text-xl font-bold mt-6 mb-2">Protección de Datos</h2>
        <p className="mb-4">
          No compartimos su información personal con terceros ajenos a nuestra operación, salvo cuando sea necesario para cumplir con la ley.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-2">Contacto</h2>
        <p>
          Si tiene dudas sobre este aviso, contáctenos directamente a través de los medios publicados en este sitio web.
        </p>
      </div>
    </div>
  );
};

export default Privacy;