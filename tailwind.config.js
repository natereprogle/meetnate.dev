/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Noto Serif Display', 'serif']
      },
      gridTemplateColumns: {
        'xl-header': '1.5fr 1fr',
        'lg-header': '2fr 0.5fr',
        'md-header': '1.9fr 1fr',
        'sm-header': '1fr 0.5fr'
      }
    },
  },
  plugins: [],
}

