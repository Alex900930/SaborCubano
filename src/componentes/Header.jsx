import React, {useState} from 'react';
import logo from '../assets/LogoSaborCuabno.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between h-20 border-b border-gray-200 col-span-2">
      {/* Sección izquierda del header (navegación) */}
      <nav className="flex-1 hidden md:flex justify-start">
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#inicio" className="relative group font-semibold transition-colors duration-300 hover:text-verdeLima">Início</a></li>
          <li><a href="#servicios" className="relative group font-semibold transition-colors duration-300 hover:text-verdeLima">Serviços</a></li>
        </ul>
      </nav>

      {/* Logo en el centro */}
      <div className="flex-1 flex justify-center">
        <img 
          src={logo} 
          alt="Logo"  
          className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-slate-200 transition-transform transform hover:scale-105" 
        />
      </div>

      {/* Sección derecha del header (navegación) */}
      <nav className="flex-1 hidden md:flex justify-end">
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#testimonios" className="relative group font-semibold transition-colors duration-300 hover:text-verdeLima">Depoimentos</a></li>
          <li><a href="#contacto" className="relative group font-semibold transition-colors duration-300 hover:text-verdeLima">Contato</a></li>
        </ul>
      </nav>

        {/* Menú móvil */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-verdeLima transition-colors duration-300">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
     
       {/* Menú lateral */}
       <aside className={`fixed inset-0 bg-gray-800 text-white p-6 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300 z-50`}>
        <button onClick={toggleMenu} className="absolute top-4 text-2xl">
          <FaTimes />
        </button>
        <ul className="mt-10 space-y-4 text-center">
          <li><a href="#inicio" onClick={toggleMenu} className="block text-2xl font-semibold hover:text-verdeLima">Inicio</a></li>
          <li><a href="#servicios" onClick={toggleMenu} className="block text-2xl font-semibold hover:text-verdeLima">Servicios</a></li>
          <li><a href="#testimonios" onClick={toggleMenu} className="block text-2xl font-semibold hover:text-verdeLima">Testimonios</a></li>
          <li><a href="#contacto" onClick={toggleMenu} className="block text-2xl font-semibold hover:text-verdeLima">Contacto</a></li>
        </ul>
      </aside>
    </header>
  );
}

export default Header;
