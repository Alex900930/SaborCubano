import './App.css'
import Contactos from './componentes/Contactos'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import MainProyecto from './componentes/MainProyecto'
import Servicios from './componentes/Servicios'
import Testimonios from './componentes/Testimonios'

function App() {
  

  return (
    <>
     <div className='grid sm:grid-cols-2 gap-2 m-6 h-[100vh] grid-cols-1 '>
       <Header />
       <MainProyecto />
       <Servicios />
       <Testimonios />
       <Contactos />
       <Footer />


     </div>
       
    </>
  )
}

export default App
