// src/pages/Home.jsx
import React from 'react'
import CategoryList from '../components/CategoryList'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Banner principal */}
      <section className="relative h-64 bg-primaria-700 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            La Sala de Lectura «La Estación»
          </h1>
          <p className="mt-2 text-lg">
            Un espacio para compartir historias, ciencia y cultura
          </p>
        </div>
      </section>

      {/* ——> Aquí volvemos a insertar la lista de categorías */}
      <CategoryList />

      {/* Mensajes */}
      <Section title="Mensajes">
        <p className="text-gray-600">
          Próximamente publicaremos noticias importantes, actividades y novedades.
        </p>
      </Section>

      {/* Calendario */}
      <Section title="Calendario de Eventos">
        <p className="text-gray-600">
          Consulta aquí las próximas actividades, lecturas colectivas y talleres.
        </p>
      </Section>

      {/* Ubicación */}
      <Section title="Dónde nos ubicamos">
        <p className="text-gray-600">
          Nos encontramos en Cuernavaca, Morelos. Muy pronto añadiremos un mapa interactivo.
        </p>
      </Section>

      {/* Contacto */}
      <Section title="Contacto">
        <ul className="text-gray-600">
          <li>📞 Teléfono: 777 123 4567</li>
          <li>✉️ Correo: contacto@laestacion.mx</li>
        </ul>
      </Section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="bg-white p-6 rounded-xl shadow">
          {children}
        </div>
      </div>
    </motion.section>
  )
}
