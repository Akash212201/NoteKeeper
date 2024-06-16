/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#faab2d',
        'text-color': '#0A0A0A',
        'text-light': '#575757',
        'shadow-color': 'rgba(0, 0, 0, 0.2)',
        'background-light': '#f2f2f2',
      },
    },
  },
  plugins: [],
}
