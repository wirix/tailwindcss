/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto afr auto'
      },
      fontFamily: {
        main: ['Montserrat']
      }
    },
  },
  plugins: [],
}

