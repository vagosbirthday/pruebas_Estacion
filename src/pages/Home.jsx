import React from 'react'
import CategoryList from '../components/CategoryList'
import Section from '../components/Section'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Banner */}
      <section className="relative h-64 bg-verde text-white flex items-center justify-center rounded-2xl shadow-playful">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-40 rounded-2xl" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Sala de Lecturas «La Estación»
          </h1>
          <p className="mt-2 text-lg">
            Un espacio para compartir historias, ciencia y cultura
          </p>
        </div>
      </section>

      {/* Categorías */}
      <CategoryList />

      {/* Otras secciones */}
      <Section title="Mensajes" accent="naranja">
        <p className="text-morado">
          Próximamente publicaremos noticias importantes, actividades y novedades.
        </p>
      </Section>

      <Section title="Calendario de Eventos" accent="verde">
        <p className="text-morado">
          Consulta aquí las próximas actividades, lecturas colectivas y talleres.
        </p>
      </Section>

      <Section title="Dónde nos ubicamos" accent="rojo">
        <p className="text-morado">
          Nos encontramos en Cuernavaca, Morelos. Muy pronto añadiremos un mapa interactivo.
        </p>
      </Section>

      <Section title="Contacto" accent="morado">
        <ul className="text-morado">
          <li>📞 Teléfono: 777 123 4567</li>
          <li>✉️ Correo: contacto@laestacion.mx</li>
        </ul>
      </Section>
    </div>
  )
}
