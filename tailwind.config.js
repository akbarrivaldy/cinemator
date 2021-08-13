module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
