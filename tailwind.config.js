// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // This is the most critical part: it tells Tailwind which files to scan for class names.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, etc. here.
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}