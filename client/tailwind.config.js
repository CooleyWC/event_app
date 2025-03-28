/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // 'palette-gray-light-1: 210,17%, 98'

        '--clr-dark-black': 'hsl(278,9%,10%)',
        '--clr-black-ice': 'hsl(278,9%,14%)',
        '--clr-black': 'hsl(278,9%,17%)',
        '--clr-med-black': 'hsl(278,9%,25%)',
        '--clr-dark-berry': 'hsl(334,37%,30%)',
        '--clr-berry': '#9f496e',
        '--clr-cream': '#f1ece7',
        '--clr-blue-gray': '#647393',

        'playDoughPurple': '#4b3d8f',
        'playDoughGreen': '#37a987',
        'playDoughLightPurple': '#b7b1d2',
        'dark-blue': '#333f63',
        'purple': '#715c8c',
        'ivory': '#d7d4dd',
        'periwinkle': '#838bc2',

        'warm-grain': 'hsl(30, 18%, 82%)',
        'warm-blackboard': 'hsl(0, 0%, 30%)',
        'warm-blackboard-med': 'hsl(0, 0%, 28%)',
        'warm-blackboard-light': 'hsl(0, 0%, 50%)',
        'warm-blackboard-very-light': 'hsl(0, 0%, 70%)',
        'warm-blackboard-very-dark': 'hsl(0, 0%, 10%)',
        'warm-blackboard-dark': 'hsl(0, 0%, 18%)',
        'warm-ox-red': 'hsl(345, 40%, 35%)',
        'warm-ox-red-med': 'hsl(345, 40%, 20%)',
        'warm-ox-red-light': 'hsl(345, 40%, 40%)',
        'warm-tan': 'hsl(30, 34%, 64%)',


        'cso-gray-dark': 'hsl(0, 0%, 3%)',
        'cso-gray-med': 'hsl(0, 0%, 16%)',
        'cso-gray-light': 'hsl(0, 0%, 30%)',
        'cso-red': 'hsl(0, 0%, 3%)',
        'cso-beige': 'hsl(42, 33%, 95%)',
        'cso-beige-med': 'hsl(42, 33%, 75%)',

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
