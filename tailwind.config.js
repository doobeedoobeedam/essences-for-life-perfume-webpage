/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './dist/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#E8A6A9',
        dark: '#29261D'
      },
    },
    fontFamily: {
      'messiri': ['El Messiri', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
