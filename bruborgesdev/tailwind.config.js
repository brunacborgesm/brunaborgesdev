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
      },

      backgroundImage: {
        'custom-dk': "url('./assets/bg1.png')",
        'custom-mb': "url('./assets/bg2.png')",
      },

      animation: {
        'spin-y': 'spin-y 1s linear',
      },
      keyframes: {
        'spin-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
    
    },
  },
  plugins: [],
}

