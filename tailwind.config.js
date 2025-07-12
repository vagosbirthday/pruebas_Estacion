/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'swipe-hint': {
          '0%':   { transform: 'translateX(0) scale(0.8)', opacity: '0' },
          '20%':  { opacity: '1' },
          '100%': { transform: 'translateX(50px) scale(1)', opacity: '0' }
        }
      },
      animation: {
        'swipe-hint': 'swipe-hint 2s ease-in-out infinite'
      },
      colors: {
        rojo:       '#BE1D2D',
        rojoClaro:  '#F2D8DA',
        rojoSuave:  '#F8B0B4',
        verde:      '#3CB14B',
        morado:     '#2A2064',
        naranja:    '#F8901A',
        gris:       '#BDB29C',
        fondo:      '#FEFBF8'
      },
      fontFamily: {
        sans: ['"Comic Neue"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        playful: '0 4px 12px rgba(190,29,45,0.15)',
      }
    }
  },
  plugins: [],
}
