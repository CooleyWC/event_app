/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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


// new color palette
// ["#4b3d8f", "#37a987", "#b7b1d2"]