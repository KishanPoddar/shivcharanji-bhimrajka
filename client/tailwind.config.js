/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '540px',
        'medium': '1400px'
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'varela': ['Varela', 'sans-serif'],
        'varela-round': ['Varela Round', 'sans-serif']
      },
      colors: {
        'tundora': '#444',
        'dove-gray': '#666',
        'drak-gray': '#a7a4a4',
        'be9656': '#be9656',
        'lightcoral': '#f06969 ',
        'lightblack': '#000000bd',
      },
    },
  },
  plugins: [],
}