import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pruebas_Estacion/', 
  plugins: [react()],
})
