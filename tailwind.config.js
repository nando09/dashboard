const colors = require('tailwindcss/colors');

module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
