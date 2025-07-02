// src/pages/ActivityPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import activities from '../data/activitiesData'
import Section from '../components/Section'

export default function ActivityPage() {
  const { id } = useParams()
  const activity = activities.find(a => a.id === id)

  if (!activity) {
    return (
      <Section title="Actividad no encontrada" accent="rojo">
        <p className="text-morado">
          Lo sentimos, la actividad solicitada no existe.
        </p>
      </Section>
    )
  }

  return (
    <>
      <Section title={activity.title} accent="verde">
        <div className="max-w-3xl mx-auto text-morado space-y-4">
          <img src={activity.imageUrl} alt={activity.title} className="w-full rounded-xl shadow-playful"/>
          <p>
            {/* Aquí tu texto descriptivo ampliado */}
            {`Bienvenido a la actividad de ${activity.title}. Aquí podrás encontrar todos los detalles, imágenes y recursos para participar.`}
          </p>
          {/* Agrega más contenido: listas, fotos, horarios, etc. */}
        </div>
      </Section>
    </>
  )
}
