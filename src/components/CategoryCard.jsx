import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CategoryCard({ id, title, description, imageUrl }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="
        w-full
        bg-white rounded-2xl shadow-playful border border-gris
        overflow-hidden hover:border-rojo transition
        flex flex-col
        min-h-[22rem]      /* menor altura mínima */
      "
    >
      <Link to={`/categoria/${id}`} className="flex-grow flex flex-col">
        {/* Imagen más compacta */}
        <div
          className="h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={title}
        />
        {/* Contenido con padding reducido */}
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-morado mb-2">{title}</h3>
          <p className="text-sm text-morado flex-grow">{description}</p>
        </div>
      </Link>
      {/* Botón con padding menos generoso */}
      <div className="p-4 pt-0">
        <Link
          to={`/categoria/${id}`}
          className="
            block text-center bg-naranja text-white
            py-2 rounded-lg font-medium hover:bg-verde transition
          "
        >
          Ver libros
        </Link>
      </div>
    </motion.div>
  )
}
