import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Asegúrate de instalar react-icons

function Footer() {
  return (
    <footer className="bg-white shadow-md border-t border-gray-200 p-6 text-center text-black col-span-2">
      <div className="max-w-screen-lg mx-auto">
        {/* Información principal */}
        <p className="mb-4">&copy; {new Date().getFullYear()} Sabor Cubano - Todos os direitos reservados.</p>

        {/* Enlace a Instagram */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com/saborcubano10/" target="_blank" rel="noopener noreferrer" className="text-gray-700 flex hover:text-verdeLima transition-colors duration-300" aria-label="Instagram">
            <FaInstagram size={24} />
            <span className="ml-2 font-semibold">Siga-nos no Instagram para mais delícias</span>
          </a>
        </div>

        {/* Información adicional */}
        <p className="text-sm">
          <a href="#contacto" className="text-gray-700 hover:text-verdeLima transition-colors duration-300">Contate-nos</a>
          {" | "}
          <a href="#politica-privacidad" className="text-gray-700 hover:text-verdeLima transition-colors duration-300">Política de Privacidade</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
