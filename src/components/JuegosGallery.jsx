// src/components/JuegosGallery.jsx
import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import images from '../data/images'
import texts from '../data/texts'        // si traías captions de texts

export default function JuegosGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    spacing: 10,
    breakpoints: {
      '(min-width: 640px)':  { slidesPerView: 2, spacing: 15 },
      '(min-width: 1024px)': { slidesPerView: 3, spacing: 20 }
    },
    slideChanged(s) { setCurrentSlide(s.track.details.rel) }
  })

  const galleryImages = images.gallery.juegos
  const captions      = texts.gallery.juegos

  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {galleryImages.map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            {/* Forzamos un ratio 16:9 igual que la principal */}
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-md bg-white">
              <img
                src={src}
                alt={`Juegos ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
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
