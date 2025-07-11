// src/pages/Home.jsx
import React from 'react'
import ActivityList from '../components/ActivityList'
import Section from '../components/Section'
import texts from '../data/texts'

export default function Home() {
  const { banner, sections, map } = texts.home

  return (
    <div className="space-y-16">
      {/* Banner simplificado */}
      <section
        className="
          h-48       /* móvil: 12rem */
          md:h-64    /* md+: 16rem */
          bg-verde text-white flex items-center justify-center
          rounded-2xl shadow-playful
        "
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {banner.title}
          </h1>
          <p className="mt-2 text-lg">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* Actividades */}
      <ActivityList />

      {/* Mensajes */}
      <Section id="mensajes" title={sections.mensajes.title} accent="naranja">
        <p className="text-morado">
          {sections.mensajes.content}
        </p>
      </Section>

      {/* Calendario de Eventos */}
      <Section id="calendario" title={sections.calendario.title} accent="verde">
        <p className="text-morado">
          {sections.calendario.content}
        </p>
      </Section>

      {/* Dónde nos ubicamos */}
      <Section id="ubicacion" title={sections.ubicacion.title} accent="rojo">
        <div
          className="w-full rounded-xl overflow-hidden shadow-playful mb-4"
          style={{ aspectRatio: '16/9' }}
        >
          <iframe
            src={map.embedSrc}
            title="Mapa La Estación"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="text-center">
          <a
            href={map.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rojo text-white px-6 py-2 rounded-xl font-semibold hover:bg-verde transition"
          >
            Cómo llegar en Google Maps
          </a>
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" title={sections.contacto.title} accent="morado">
        <ul className="text-morado space-y-2">
          {sections.contacto.items.map(({ icon, label, value }) => (
            <li key={label}>
              {icon} {label}: {value}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
