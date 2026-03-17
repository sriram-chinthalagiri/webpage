import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // CRITICAL: Replace 'your-repo-name' with the actual name of your GitHub repository
  // For example, if your URL is github.com/sriram-chinthalagiri/math-portfolio, 
  // then base should be '/math-portfolio/'
  base: '/webpage/', 
})