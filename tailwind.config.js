/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coop-primary': '#0F766E',
        'coop-secondary': '#0F172A',
        'coop-accent': '#F59E0B',
      }
    },
  },
  plugins: [],
}