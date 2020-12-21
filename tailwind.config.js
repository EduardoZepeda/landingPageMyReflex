module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FFF',
        'lavanda': '#5c6ac4',
        'bone': '#e0e0e0',
        'teal': '#008080',
      },
      gridTemplateRows: {
        'burguer': 'auto 1fr auto;'
      }
    },
  },
  variants: {},
  plugins: [],
}
