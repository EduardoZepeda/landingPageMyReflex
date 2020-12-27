module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FFF',
      },
      gridTemplateRows: {
        'burguer': 'auto 1fr auto;'
      }
    },
  },
  variants: {},
  plugins: [],
}
