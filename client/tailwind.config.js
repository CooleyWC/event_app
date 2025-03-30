/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'ivory': '#d7d4dd',

        'la-blue': 'hsl(202, 74%, 48%)',
        'la-blue-dark': 'hsl(202, 74%, 36%)',
        'la-gray-dark': 'hsl(355, 2%, 5%)',
        'la-gray': 'hsl(355, 2%, 14%)',
        'la-gray-med': 'hsl(355, 2%, 20%)',
        'la-gray-med-light': 'hsl(355, 2%, 24%)',
        'la-gray-light': 'hsl(355, 2%, 30%)',

        'la-light-gray': 'hsl(355, 2%, 88%)',
        'la-light-gray-med': 'hsl(355, 2%, 82%)',
        'la-light-gray-extra-light': 'hsl(355, 2%, 90%)',
        'la-light-gray-extra-lightest': 'hsl(355, 2%, 99%)',
        
        
      },
      fontFamily: {mulish: ["Mulish", "sans-serif"]}
    },
  },
  plugins: [],
  darkMode: 'class',
}
