// src/components/CategoryCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CategoryCard({ id, title, description, imageUrl }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <Link to={`/categoria/${id}`}>
        <div
          className="h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={title}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
    