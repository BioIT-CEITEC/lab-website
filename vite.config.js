import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // "/" for the custom domains (bioit.ceitec.eu / bioit.ceitec.cz).
  // The GitHub Actions preview build sets BASE_PATH=/lab-website/ for bioit-ceitec.github.io/lab-website/.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})
