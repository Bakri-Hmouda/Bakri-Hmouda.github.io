/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './layout.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true
    },

    extend: {
      colors: {
        background: '#03120E',
        darkGrey: '#1A1D1A',
        darkGreen: '26413C',
        lightGrey: '#3E505B',
        primary: '#8AB0AB'
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
