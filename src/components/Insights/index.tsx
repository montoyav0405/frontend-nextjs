import React from 'react';
import Image from 'next/image';

const InsightCard = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => (
  <div className="bg-white rounded-lg overflow-hidden">
    <Image src={imageSrc} alt={title} width={600} height={400} className="w-full object-cover h-64" />
    <div className="p-6">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 mb-3">{description}</p>
      <a href="#" className="text-purple-600 inline-block hover:underline">Saber más →</a>
    </div>
  </div>
);

const Insights = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-3">
        <h2 className="text-6xl font-bold text-center mb-12">
        Todo lo que necesitas para conocer, entender y <br />
        sorprender a tus clientes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InsightCard
            title="Mystery Shopper - Cliente incógnito"
            description="Conozca lo que vive, siente y valora tu cliente en cada interacción que tiene con tu marca, para brindar una experiencia memorable que incremente tu conversión, lealtad y recomendación."
            imageSrc="/images/market-research-2.jpg"
          />
          
          <InsightCard
            title="Investigación de Mercados"
            description="Descubre los deseos y necesidades reales de tus clientes para crear o mejorar productos, servicios, o  experiencias memorables que impulsen tu rentabilidad y la fidelización."
            imageSrc="/images/market-research-1.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Insights;
