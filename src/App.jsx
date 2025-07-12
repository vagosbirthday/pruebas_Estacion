// src/App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ActivityPage from './pages/ActivityPage'
import JuegosDemo from './pages/JuegosDemo'

import Navbar from './components/Navbar'  

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans bg-fondo">
      {/* Nav: hamburguesa en móvil, sidebar en md+ */}
      <Navbar />

      {/* Contenedor principal: padding móvil y desplazamiento en md+ */}
      <div
        className="
          flex-grow
          pt-4 pb-4
          px-4                /* móvil: padding horizontal */
          md:pl-64 md:pr-64   /* md+: deja espacio para el sidebar de 16rem (w-64) + franjas */
          md:px-0
        "
      >
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actividad/:id" element={<ActivityPage />} />
            <Route path="/juegos-demo" element={<JuegosDemo />} />
          </Routes>
        </main>
      </div>

      <footer className="bg-morado text-white text-center py-4">
        © 2025 Sala de Lecturas “La Estación”
      </footer>
    </div>
  )
}
