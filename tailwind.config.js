/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1440px',
    },

    extend: {
      colors: {
        primaria: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          700: "#4338ca",
        },
        secundaria: {
          100: "#fef3c7",
          500: "#f59e0b",
        }
      }
    }
  },
  plugins: [],
}
