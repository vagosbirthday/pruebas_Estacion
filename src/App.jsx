// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans bg-fondo">
      {/* Menú fijo izquierdo */}
      <nav className="fixed top-0 left-0 h-full flex items-start p-4 pl-6">
        <Link
          to="/"
          className="text-rojoSuave hover:text-rojo font-bold text-2xl"
        >
          ☰ La Estación
        </Link>
      </nav>

      {/* Contenedor principal: desplazado para dejar espacio al menú y a las franjas */}
      <div className="flex-grow pl-20 pr-20 pt-4 pb-4">
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
