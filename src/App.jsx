import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primaria-700 text-white p-4">
        <Link to="/" className="text-2xl font-bold">La Estación</Link>
      </header>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:id" element={<CategoryPage />} />
        </Routes>
      </main>
      <footer className="bg-primaria-700 text-white text-center py-4">
        © 2025 La Estación
      </footer>
    </div>
  )
}
