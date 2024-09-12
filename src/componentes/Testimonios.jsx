import React from 'react';
import persona1 from '../assets/testimonio1.jpg';
import persona2 from '../assets/testimonio2.jpg';
import persona3 from '../assets/testimonio3.jpg';

function Testimonios() {
  return (
    <section id="testimonios" className="bg-gray-100 py-16 col-span-2">
      <h3 className="text-3xl font-bold text-center mb-8">Depoimentos</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Testimonio 1 */}
        <div
          className="w-80 bg-white shadow-md rounded-lg p-6"
          data-aos="fade-up"
        >
          <div className="flex items-center mb-4">
            <img src={persona1} alt="Cliente 1" className="w-16 h-16 rounded-full object-cover mr-4" />
            <div>
              <p className="font-bold">Carla Perez</p>
              <p className="text-sm text-gray-500">Cliente Fiel</p>
            </div>
          </div>
          <p className="italic">"O melhor café da cidade, sempre volto para mais!"</p>
        </div>

        {/* Testimonio 2 */}
        <div
          className="w-80 bg-white shadow-md rounded-lg p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center mb-4">
            <img src={persona2} alt="Cliente 2" className="w-16 h-16 rounded-full object-cover mr-4" />
            <div>
              <p className="font-bold">María López</p>
              <p className="text-sm text-gray-500">Amante do Suco</p>
            </div>
          </div>
          <p className="italic">"Os sucos são frescos e deliciosos, recomendo o de Laranja!"</p>
        </div>

        {/* Testimonio 3 */}
        <div
          className="w-80 bg-white shadow-md rounded-lg p-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center mb-4">
            <img src={persona3} alt="Cliente 3" className="w-16 h-16 rounded-full object-cover mr-4" />
            <div>
              <p className="font-bold">Maria Sánchez</p>
              <p className="text-sm text-gray-500">Apreciador de Comida</p>
            </div>
          </div>
          <p className="italic">"As pizzas são incríveis, definitivamente o meu lugar favorito!"</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
