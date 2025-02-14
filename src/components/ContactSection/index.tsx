import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="relative bg-cover bg-center py-16 md:py-24 text-white">
            <div 
                className="absolute inset-0 z-0"
                style={{ 
                    backgroundImage: 'url(/images/contactSection.jpg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="container mx-auto px-100 relative z-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Hablemos, juntos hacemos que la cosas pasen, ¡y en grande!
                </h1>
                <p className="text-lg md:text-x1 mb-4">
                    El éxito de tu marca comienza conociendo, entendiendo  y sorprendiendo a tus clientes.
                </p>
            </div>
        </section>
    );
};

export default ContactSection;