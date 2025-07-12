// src/data/images.js
import juegosPortada from '../assets/juegosPortada.jpg'
import lecturaPortada from '../assets/lecturaPortada.jpg'
import manualidadesPortada from '../assets/manualidadesPortada.jpg'
import culturaPortada from '../assets/culturaPortada.jpg'

// Importa las 10 imágenes del carrusel
import c1 from '../assets/juegosCarusel/carusel1.jpg'
import c2 from '../assets/juegosCarusel/carusel2.jpg'
import c3 from '../assets/juegosCarusel/carusel3.jpg'
import c4 from '../assets/juegosCarusel/carusel4.jpg'
import c5 from '../assets/juegosCarusel/carusel5.jpg'
import c6 from '../assets/juegosCarusel/carusel6.jpg'
import c7 from '../assets/juegosCarusel/carusel7.jpg'
import c8 from '../assets/juegosCarusel/carusel8.jpg'
import c9 from '../assets/juegosCarusel/carusel9.jpg'
import c10 from '../assets/juegosCarusel/carusel10.jpg'

const images = {
  activities: {
    juegos: juegosPortada,
    lectura: lecturaPortada,
    manualidades: manualidadesPortada,
    cultura: culturaPortada
  },
  gallery: {
    juegos: [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10]
  }
}

export default images
