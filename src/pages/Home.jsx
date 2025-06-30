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

       {/* Dónde nos ubicamos */}
    <Section title="Dónde nos ubicamos" accent="rojo">
      <div className="w-full h-64 mb-4 rounded-xl overflow-hidden shadow-playful">
        <iframe
          title="Sala de Lectura Estación de los Libros"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1188.7549339179282!2d-99.22903587244285!3d18.92866906389412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfd71261e553%3A0x5a2f359b4ba6e3ba!2sSala%20de%20lectura%20Estaci%C3%B3n%20de%20los%20libros!5e0!3m2!1ses!2smx!4v1751317576134!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="text-center">
        <a
          href="https://maps.app.goo.gl/xxsnhJQDtTasN7KT6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rojo text-white px-6 py-2 rounded-xl font-semibold hover:bg-verde transition"
        >
          Cómo llegar en Google Maps
        </a>
      </div>
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
