// src/pages/JuegosDemo.jsx
import React from 'react'
import Section from '../components/Section'
import JuegosGallery from '../components/JuegosGallery'

export default function JuegosDemo() {
  return (
    <Section title="Galería de Juegos (Demo)" accent="naranja">
      <p className="mb-6 text-morado">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
        nibh elementum imperdiet.
      </p>
      <JuegosGallery />
    </Section>
  )
}
