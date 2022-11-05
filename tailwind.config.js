const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      standard: "#fff2d9",
      first: "#707070",
      second: "#4b4b4b",
    },
    extend: {
      fontFamily: {
        "playfair": ["Playfair Display", ...defaultTheme.fontFamily.sans],
        "roboto": ["Roboto", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
