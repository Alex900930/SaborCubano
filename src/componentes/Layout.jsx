import React, { useState } from 'react'
import Header from './Header'
import MainProyecto from './MainProyecto'
import Servicios from './Servicios'
import Testimonios from './Testimonios'
import Contactos from './Contactos'
import Footer from './Footer'
import Menu from './pages/Menu'

function Layout() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <div className='grid sm:grid-cols-2 gap-2 m-6 h-[100vh] grid-cols-1 '>
    <Header setMostrar={setMostrar}/>
    {!mostrar ?  (
        <>
          <MainProyecto setMostrar={setMostrar} />
          <Servicios />
          <Testimonios />
          <Contactos />
        </>
      ): (<Menu />)}
     <Footer />  

  </div>
  )
}

export default Layout