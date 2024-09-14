import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './componentes/Layout'
import Menu from './componentes/pages/Menu'

function App() {
  

  return (
    <>

    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Layout />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="*" element={<Layout />} />
</Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
