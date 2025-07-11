// src/data/texts.js

const texts = {
  home: {
    banner: {
      title: 'Sala de Lecturas «La Estación»',
      subtitle:
        'Somos una sala de lectura en Patios de la Estación, Cuernavaca. ' +
        'Espacio lúdico para infancias. Inclusión y hospitalidad nos unen.'
    },
    sections: {
      mensajes: {
        title: 'Mensajes',
        content:
          'Próximamente publicaremos noticias importantes, actividades y novedades.'
      },
      calendario: {
        title: 'Calendario de Eventos',
        content:
          'Consulta aquí las próximas actividades, lecturas colectivas y talleres.'
      },
      ubicacion: {
        title: 'Dónde nos ubicamos',
        content:
          'Paseo 5 de Mayo 123, Col. Patios de la Estación, Cuernavaca, Morelos.'
      },
      contacto: {
        title: 'Contacto',
        items: [
          {
            icon: '📞',
            label: 'Teléfono',
            value: '777 123 4567'
          },
          {
            icon: '✉️',
            label: 'Correo',
            value: 'contacto@laestacion.mx'
          }
        ]
      }
    },
    map: {
      embedSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.058689818937!2d-99.2305368230151!3d18.928796182245673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfd71261e553%3A0x5a2f359b4ba6e3ba!2sSala%20de%20lectura%20Estaci%C3%B3n%20de%20los%20libros!5e0!3m2!1ses!2smx!4v1752206725662!5m2!1ses!2smx',
      directionsLink: 'https://maps.app.goo.gl/xxsnhJQDtTasN7KT6'
    }
  },

  activities: {
    juegos: {
      title: 'Juegos',
      description:
        'El juego es imprescindible para generar interacciones asertivas y creativas; ' +
        'desarrolla habilidades adaptativas y comunicación.'
    },
    lectura: {
      title: 'Lectura',
      description: 'Sesiones de lectura acompañada y cuentacuentos.'
    },
    manualidades: {
      title: 'Manualidades',
      description: 'Talleres creativos para que los niños expresen su arte.'
    },
    cultura: {
      title: 'Cultura',
      description: 'Charlas y actividades sobre tradiciones y patrimonio.'
    }
  }
}

export default texts
