/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'pop':["Poppins", "sans-serif"],
      'mont': ["Montserrat", "sans-serif"],
    },
    screens: {
      'tablet': '700px',
      'laptop': '1024px',
      'desktop': '1279px',
    },
    extend: {},
  },
  plugins: [],
}