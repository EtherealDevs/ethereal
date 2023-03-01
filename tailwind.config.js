/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2/5': '45%',
      },
      fontSize: {
        '10xl': '20rem',
        
      },
      fontFamily:{
        'dev':'Rockwell'
      }
    },
  },
  plugins: [],
}
