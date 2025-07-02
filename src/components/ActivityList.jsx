// src/components/ActivityList.jsx
import React from 'react'
import activities from '../data/activitiesData'
import ActivityCard from './ActivityCard'
import { motion } from 'framer-motion'

export default function ActivityList() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <section className="py-12 bg-fondo">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-morado">
          ¿Qué hacemos en La Estación?
        </h2>
        <motion.div
          variants={container}  
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-6
          "
        >
          {activities.map(act => (
            <ActivityCard key={act.id} {...act} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
