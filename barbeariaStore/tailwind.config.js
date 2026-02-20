/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'mafia-red': '#E31C25',
        'mafia-dark': '#0a0a0a',
        'mafia-gray': '#1a1a1a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Roboto"', 'sans-serif'],
      }
    }
  },
  plugins: []
};