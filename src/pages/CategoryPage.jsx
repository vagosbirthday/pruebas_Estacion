// src/pages/CategoryPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import categories from '../data/categoriesData'

export default function CategoryPage() {
  const { id } = useParams()
  const category = categories.find(c => String(c.id) === id)

  if (!category) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Categoría no encontrada</h2>
        <p className="text-gray-600">Verifica la URL o regresa al inicio.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{category.title}</h1>
        <p className="text-gray-600">{category.description}</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Libros disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl shadow p-4 hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Imagen</span>
              </div>
              <h3 className="font-bold mb-1">Título de Ejemplo {idx + 1}</h3>
              <p className="text-sm text-gray-500">Autor Desconocido</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
