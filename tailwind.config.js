/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montSerrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'smog': 'rgba(0, 0, 0, 0.5)',
        'smerald': '#5BBA6F',
        'greenPigment': '#3FA34D',
        'forestGreenWeb': '#2A9134',
        'darkSpringGreen': '#137547',
        'forestGreenTraditional': '#054A29',
      },
    },
  },
  plugins: [],
}
