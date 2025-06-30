// src/components/CategoryList.jsx
import React from 'react'
import categories from '../data/categoriesData'
import CategoryCard from './CategoryCard'
import { motion } from 'framer-motion'

export default function CategoryList() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explora por Categorías</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map(cat => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
