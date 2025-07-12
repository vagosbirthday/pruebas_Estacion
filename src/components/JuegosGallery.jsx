import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import images from '../data/images'

export default function JuegosGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Inicializamos el slider y capturamos la instancia en instanceRef
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    spacing: 10,
    breakpoints: {
      '(min-width: 640px)': { slidesPerView: 2, spacing: 15 },
      '(min-width: 1024px)': { slidesPerView: 3, spacing: 20 }
    },
    slideChanged(s) {
      // s.track.details.rel es el índice dentro del rango [0..n-1]
      setCurrentSlide(s.track.details.rel)
    }
  })

  // Tus 10 imágenes importadas
  const galleryImages = images.gallery.juegos

  // Textos de ejemplo (reemplaza con tus descripciones reales)
  const captions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
  ]

  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {galleryImages.map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            <img
              src={src}
              alt={`Juegos ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Flechas */}
      {instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current.prev()}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full shadow"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current.next()}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full shadow"
            aria-label="Siguiente"
          >
            ›
          </button>
        </>
      )}

      {/* Texto sincronizado */}
      <div className="mt-4 bg-fondo p-4 rounded-lg shadow-inner text-morado text-center max-w-2xl mx-auto">
        {captions[currentSlide]}
      </div>
    </div>
  )
}
