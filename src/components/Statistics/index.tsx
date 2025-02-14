import React from 'react';

const Statistics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-7">
        Servicios complementarios.
        </h2>
        <p className="text-3x1 text-center mb-8">
        Prepara a tu equipo para crear y brindar experiencias excepcionales.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4">Dashboard Interactivo</h3>
            <p className="text-gray-600 mb-4">
              Te proporcionamos un dashboard interactivo y fácil de usar, donde podrás visualizar todos los datos relevantes de tu negocio en tiempo real.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Métricas clave de rendimiento</li>
              <li>Análisis de tendencias</li>
              <li>Segmentación de clientes</li>
              <li>Informes personalizados</li>
            </ul>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 transition duration-300">
              Ver demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;