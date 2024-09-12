import React from 'react'

function Contactos() {
  return (
    <section id="contacto" className="py-16 col-span-2">
      <h3 className="text-3xl font-bold text-center mb-8">Contato</h3>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Nome</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">E-mail</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefone</label>
          <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensagem</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
        </div>
        
        <button type="submit" className="w-full bg-verdeLima text-white p-2 rounded-lg">Enviar</button>
      </form>
    </section>
  )
}

export default Contactos