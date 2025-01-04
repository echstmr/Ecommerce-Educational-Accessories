/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '1150px': '1150px',
        '750px': '750px'
      }
    },
  },
  plugins: [],
}