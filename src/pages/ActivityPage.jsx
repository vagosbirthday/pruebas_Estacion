import React from 'react'
import { useParams } from 'react-router-dom'
import texts from '../data/texts'
import images from '../data/images'
import Section from '../components/Section'
import JuegosGallery from '../components/JuegosGallery'

export default function ActivityPage() {
  const { id } = useParams()
  const data = texts.activities[id]
  const img  = images.activities[id]

  if (!data || !img) {
    return (
      <Section title="Actividad no encontrada" accent="rojo">
        <p className="text-morado">Lo sentimos, la actividad solicitada no existe.</p>
      </Section>
    )
  }

  return (
    <Section title={data.title} accent="verde">
      <div className="max-w-3xl mx-auto space-y-6">
        <img
          src={img}
          alt={data.title}
          className="w-full rounded-xl shadow-playful object-cover aspect-video"
        />
        <p className="whitespace-pre-line text-morado">{data.description}</p>

        {id === 'juegos' && (
          <div className="pt-8">
            <h2 className="text-2xl font-semibold text-morado mb-4 text-center">
              Galería de Juegos
            </h2>
            <JuegosGallery />
          </div>
        )}
      </div>
    </Section>
  )
}
