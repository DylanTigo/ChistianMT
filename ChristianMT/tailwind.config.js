/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:  {
        'black' : '#0D0D0D',
        'white' : '#FFFFFF',
        'orange' : '#D95F11',
        'grey' : '#F1F1F1',
      },
      fontFamily: {
        oxygen: ['Oxygen', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius : {
        'xl' : '30px',
        'lg' : '20px'
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}

