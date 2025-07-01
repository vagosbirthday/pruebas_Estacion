// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans bg-fondo">
      {/* Menú fijo izquierdo: oculto en móvil, aparece en md+ */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full items-start p-4 pl-6">
        <Link
          to="/"
          className="text-rojoSuave hover:text-rojo font-bold text-2xl"
        >
          ☰ La Estación
        </Link>
      </nav>

      {/* Contenedor principal: padding móvil y desplazamiento en md+ */}
      <div
        className="
          flex-grow
          pt-4 pb-4
          px-4                /* móvil: padding horizontal */
          md:pl-20 md:pr-20   /* md+: desplazamiento para menú y franjas */
          md:px-0
        "
      >
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:id" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>

      <footer className="bg-morado text-white text-center py-4">
        © 2025 Sala de Lecturas “La Estación”
      </footer>
    </div>
  )
}
