/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}",
  './index.html',],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '5': '5 5 0%',
        '6': '6 6 0%'
      }
    },
  },
  plugins: [],
}
