// src/pages/ActivityPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import texts from '../data/texts'
import images from '../data/images'
import Section from '../components/Section'

export default function ActivityPage() {
  const { id } = useParams()
  const desc = texts.activities[id]
  const img = images.activities[id]
  const title = texts.activities[id]?.title || id

  if (!desc || !img) {
    return (
      <Section title="Actividad no encontrada" accent="rojo">
        <p className="text-morado">
          Lo sentimos, la actividad solicitada no existe.
        </p>
      </Section>
    )
  }

  return (
    <Section title={title} accent="verde">
      <div className="max-w-3xl mx-auto text-morado space-y-6">
        <img
          src={img}
          alt={title}
          className="w-full rounded-xl shadow-playful object-cover"
        />
        <p className="whitespace-pre-line">{desc}</p>
      </div>
    </Section>
  )
}
