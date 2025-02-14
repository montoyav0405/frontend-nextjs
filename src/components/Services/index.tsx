import React from 'react';

const ServiceCard = ({ title, description, isLast }: { title: string; description: string; isLast: boolean }) => (
  <div className={`pt-5 ${!isLast ? 'md:border-r md:border-gray-250 md:pr-8' : ''}`}>
    <h3 className="text-3xl mb-4">{title}</h3>
    <p className="text-gray-500 mb-5">{description}</p>
    <a href="#" className="text-purple-600 inline-block hover:underline">Saber más →</a>
  </div>
);

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">
          Aumentamos la retención, maximizamos tu rentabilidad y <br />
          convertimos a tus clientes en los mejores promotores.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="+ RETENCIÓN:"
            description="Diseñamos experiencias que generan confianza y satisfacción, logrando que tus clientes regresen y se mantengan fieles a tu marca "
            isLast={false}
          />
          <ServiceCard
            title="+ RENTABILIDAD"
            description="Optimizamos cada interacción con tu marca para aumentar el ticket promedio por cliente, y reducir tus costos de adquisición."
            isLast={false}
          />
          <ServiceCard
            title="+ RECOMENDACIÓN"
            description="Identificamos lo que realmente enamora a tus clientes, convirtiéndolos en promotores orgánicos de tu marca."
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
