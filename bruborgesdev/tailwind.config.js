/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Raleway', 'sans-serif'],
        body: ['Exo 2', 'sans-serif'],
      },

      colors: {
        'cl-purple': '#4C1D95',
        'cl-purple-2': '#29065f',
        'cl-green': '#BEF264',
        'cl-lavander': '#A5B4FC',
        'cl-white': '#F7FFF7',
        'cl-black': '#111827',
        'cl-full-black': '#020617',
      }
    },
  },
  plugins: [],
}

