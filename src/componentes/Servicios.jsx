import React from 'react';
import pastelImg from '../assets/pastelQueijo.jpg';
import jugoImg from '../assets/jugos.jpg';
import vitaminaImg from '../assets/vtamina.jpg';
import pizzaImg from '../assets/pizza.jpg';
import refrescoImg from '../assets/cocacola.jpg';
import 'aos/dist/aos.css';

function Servicios() {
  return (
    <section id="servicios" className="py-16 col-span-2">
      <h3 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Nossos Serviços</h3>
      <div className="space-y-8">
        {/* Servicio 1 */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          <img src={pastelImg} alt="Pasteles Salgados" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Pastel</h4>
            <p>Pastel e salgados deliciosos para acompanhar sua bebida.</p>
          </div>
        </div>

        {/* Servicio 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-left">
          <img src={jugoImg} alt="Jugos de Frutas Naturales" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:mr-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Sucos de Frutas Naturais</h4>
            <p>Sucos frescos de frutas tropicais, 100% naturais.</p>
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          <img src={vitaminaImg} alt="Vitaminas" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Vitaminas</h4>
            <p>Vitaminas saborosas, uma mistura de suco natural com leite.</p>
          </div>
        </div>

        {/* Servicio 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-left">
          <img src={pizzaImg} alt="Pizzas Salgadas" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:mr-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Pizzas</h4>
            <p>Variedade de pizzas para desfrutar a qualquer momento.</p>
          </div>
        </div>

        {/* Servicio 5 */}
        <div className="flex flex-col md:flex-row items-center" data-aos="fade-right">
          <img src={refrescoImg} alt="Refrescos" className="w-full md:w-1/2 h-40 object-cover" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-2">Refrigerantes</h4>
            <p>Oferecemos Coca-Cola, Fanta Laranja, Guaraná e mais.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
