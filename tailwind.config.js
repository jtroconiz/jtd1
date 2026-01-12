/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
      extend: {
        colors: {
          'custom-blue': '#12054c',
          'custom-blue2': '#00C1FF',
          'dark-blue': '#0A192F',
          'dark-blue-2': '#172A45',
          'accent-green': '#64FFDA',
      },
      height: {
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '20vh': '20vh',
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
  }