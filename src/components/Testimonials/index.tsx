import React from 'react';

const testimonialsData = [
  {
    quote: "¡Soluciones excepcionales, superaron las expectativas!",
    name: "Mary Johnson",
    position: "CEO de TechCraft Solutions",
  },
  {
    quote: "Transformaron nuestro negocio con tecnología innovadora.",
    name: "Mark Williams",
    position: "COO de InnovateNow Inc",
  },
  {
    quote: "Experiencias de usuario esculpidas más allá de la imaginación.",
    name: "Emily Clark",
    position: "CMO de Visionary Apps",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Empresas que apostaron por la experiencia y descubrieron lo que realmente valoran sus clientes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
