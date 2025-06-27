/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
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
