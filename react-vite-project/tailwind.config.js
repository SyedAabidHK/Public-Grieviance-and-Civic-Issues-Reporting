/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        govNavy: '#0f2444',
        govNavyDark: '#0a1931',
        govNavyLight: '#183b6b',
        govGold: '#d4af37',
      }
    },
  },
  plugins: [],
}
