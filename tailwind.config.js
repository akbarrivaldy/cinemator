module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
