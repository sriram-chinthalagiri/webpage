import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
<<<<<<< Updated upstream
  plugins: [react()],
  base: './', // <-- Add this line
});

=======
  plugins: [
    react(),
    tailwindcss(),
  ],
  // This is required for GitHub Pages to find your files in the subfolder
  base: '/webpage/', 
  build: {
    outDir: 'docs',
  }
})
>>>>>>> Stashed changes
