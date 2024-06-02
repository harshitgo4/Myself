/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      headingcolor:'rgb(0, 28, 85)',  // Define a custom RGBA color if needed
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

    },
  },
  plugins: [],
}