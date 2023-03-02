/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#9C9FDE'
      },
      spacing: {
        '2/5': '45%',
      },
      fontSize: {
        '10xl': '20rem',
        
      },
      fontFamily:{
        'dev':'Rockwell'
      },
      animation: {
        'bounce-slow': 'bounce 1.5s infinite',
      }
    },
  },
  plugins: [],
}
