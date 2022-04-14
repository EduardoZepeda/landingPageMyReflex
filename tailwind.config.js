module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: ['./components/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10'
      }
    }
  },
  variants: {},
  plugins: []
}
