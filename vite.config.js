import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // served from https://bioit-ceitec.github.io/lab-website/ — change to "/" once a custom domain is set
  base: '/lab-website/',
  plugins: [react(), tailwindcss()],
})
