import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // This is required for GitHub Pages to find your files in the subfolder
  base: '/math_webpage/', 
  build: {
    outDir: 'dist',
  }
})