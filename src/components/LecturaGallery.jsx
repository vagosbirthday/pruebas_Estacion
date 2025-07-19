import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import texts from '../data/texts'
import images from '../data/images'

export default function LecturaGallery() {
  const [current, setCurrent] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 1.1,
    spacing: 0,
    breakpoints: {
      '(min-width:640px)':  { slidesPerView: 2, spacing: 15 },
      '(min-width:1024px)': { slidesPerView: 3, spacing: 20 }
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel)
    }
  })

  // Por ahora reutiliza el array de juegos
  const items = texts.gallery.juegos.map((t, i) => ({
    src: images.gallery.juegos[i],
    alt: t.alt,
    caption: t.caption
  }))

  return (
    <div className="relative max-w-4xl mx-auto py-8 px-0 sm:px-4">
      <div ref={sliderRef} className="keen-slider">
        {items.map(({ src, alt }, i) => (
          <div key={i} className="keen-slider__slide">
            <div className="w-full aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9 overflow-hidden rounded-lg shadow-md bg-white">
              <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {slider && (
        <>
          <button
            onClick={() => slider.prev()}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/75 hover:bg-opacity-100 p-2 rounded-full shadow"
            aria-label="Anterior"
          >‹</button>
          <button
            onClick={() => slider.next()}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/75 hover:bg-opacity-100 p-2 rounded-full shadow"
            aria-label="Siguiente"
          >›</button>
        </>
      )}

      <div className="swipe-hint">🤏</div>

      <div className="mt-4 bg-fondo p-4 rounded-lg shadow-inner text-morado text-center text-lg max-w-2xl mx-auto">
        {items[current]?.caption}
      </div>
    </div>
  )
}
