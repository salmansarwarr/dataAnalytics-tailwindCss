/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#ff4800',
      blue: {
        450: '#5f99f7'
      },
    }
  },
  plugins: [],
}
