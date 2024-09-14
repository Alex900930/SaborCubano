import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import cafe from '../assets/cafe.jpg';
import suco from '../assets/jugos.jpg';
import bolo from '../assets/pastel.jpg';

function MainProyecto({setMostrar}) {

 // Definimos las imágenes y los textos que van a cambiar
 const slides = [
    {
      image: cafe,
      title: 'Bem-vindo ao Sabor Cubano, onde você sempre será bem atendido',
      description: 'Onde o café e a qualidade se encontram',
    },
    {
      image: suco,
      title: 'Sucos Naturais e Frescos feitos de Fruta Naturais',
      description: 'Sinta a frescura dos nossos sucos tropicais',
    },
    {
      image: bolo,
      title: 'Pastel e Churrascos',
      description: 'Sabores únicos para qualquer momento do dia',
    },
  ];

  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
 


   // Cambiamos la imagen cada 5 segundos
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar
  }, [slides.length]);

  const handleClick = () => {
    setMostrar(true)
    //navigate('menu')
  }

  return (
<section
      className=" shadow-2xl rounded-xl col-span-2 bg-cover bg-center h-96 text-center flex items-center justify-center transition-all duration-500"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-4xl text-white font-bold">{slides[currentSlide].title}</h2>
        <p className="text-white mt-4">{slides[currentSlide].description}</p>
        <button className="mt-6 bg-verdeLima text-white py-2 px-4 rounded-lg" onClick={handleClick}>
        Ver Menu
        </button>
      </div>
    </section>
  )
}

export default MainProyecto