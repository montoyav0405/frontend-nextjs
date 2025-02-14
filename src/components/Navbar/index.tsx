import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Añadimos esta nueva función para cerrar el menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-4 shadow-md z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} />
          <span className="ml-2 text-purple-700 font-bold">CX360</span>
        </div>
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}>
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900 py-2 lg:py-0" onClick={closeMenu}>
              Inicio
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 py-2 lg:py-0" onClick={closeMenu}>
              Soluciones
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 py-2 lg:py-0" onClick={closeMenu}>
              Sobre nosotros
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 py-2 lg:py-0" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 py-2 lg:py-0" onClick={closeMenu}>
              Contáctanos
            </Link>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-6">
            <button className="bg-gray-800 text-white px-4 py-2 rounded w-full lg:w-auto" onClick={closeMenu}>
              Acceder
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
