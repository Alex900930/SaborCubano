import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos';

AOS.init({
  duration: 1000, // Duración de la animación en milisegundos
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
