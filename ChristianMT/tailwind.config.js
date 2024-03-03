/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:  {
      'black' : '#0D0D0D',
      'white' : '#FFFFFF',
      'orange' : '#D95F11',
      'grey' : '#F1F1F1',
    },
    extend: {
      fontFamily: {
        oxygen: ['Oxygen', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

