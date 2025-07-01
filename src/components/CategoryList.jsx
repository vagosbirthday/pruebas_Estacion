import React from 'react'
import categories from '../data/categoriesData'
import CategoryCard from './CategoryCard'
import { motion } from 'framer-motion'

export default function CategoryList() {
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

  return (
    <section className="py-12 bg-fondo">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-morado">
          Explora por Categorías
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1        /* móvil */
            sm:grid-cols-2     /* tablet */
            md:grid-cols-3     /* desktop pequeño */
            lg:grid-cols-4     /* desktop grande */
            gap-6              /* espacio moderado */
          "
        >
          {categories.map(cat => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
