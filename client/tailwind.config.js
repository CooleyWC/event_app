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
        'periwinkle': '#838bc2'
      },
      fontFamily: {mulish: ["Mulish", "sans-serif"]}
    },
  },
  plugins: [],
  darkMode: 'class',
}
