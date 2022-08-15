/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'large': '350px',
      'medium': '200px'
    },
    fontFamily: {
      'cursive2': 'Lobster Two',
      'cursive': 'Allura',
      'default': 'Montserrat Alternates'
    }
  },
  plugins: [],
}
