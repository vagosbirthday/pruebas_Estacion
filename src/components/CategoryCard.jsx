import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CategoryCard({ id, title, description, imageUrl }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        bg-white rounded-2xl shadow-playful border-2 border-gris
        overflow-hidden hover:border-rojo transition
      "
    >
      <Link to={`/categoria/${id}`}>
        <div
          className="h-48 bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={title}
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-morado mb-1">{title}</h3>
          <p className="text-sm text-morado mb-3">{description}</p>
          <button className="w-full bg-naranja text-white py-2 rounded-xl hover:bg-verde transition">
            Ver libros
          </button>
        </div>
      </Link>
    </motion.div>
  )
}
