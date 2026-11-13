import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // served from the root of bioit.ceitec.eu / bioit.ceitec.cz
  base: '/',
  plugins: [react(), tailwindcss()],
})
