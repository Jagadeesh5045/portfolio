import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: served from https://jagadeesh5045.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
