import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center mt-16 sm:mt-20 md:mt-24 lg:mt-20 pt-8 sm:pt-10 md:pt-12 lg:pt-16" style={{backgroundImage: "url('/images/heroSection.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-0">
        <div className="max-w-3xl text-left ml-0 sm:ml-8 lg:ml-8">
          <h1 className="text-7xl font-bold mb-4 text-white">
          NUESTRA MISIÓN: <br />
            <span className="text-4xl">Poner a tu cliente en el centro de todo.</span>
          </h1>
          <p className="text-xl mb-8 text-white">
          Alineamos tu propuesta de valor con las expectativas reales de tus clientes, 
          transformando la experiencia en una herramienta poderosa para tu negocio.
          Nada de suposiciones; con datos sólidos obtenidos directamente de tus clientes.
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-85 transition duration-300">
            ¡Quiero saber más!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;