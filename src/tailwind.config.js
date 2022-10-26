/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')

module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': 'var(--brand-color)'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [],
  content: [
    path.resolve(__dirname, '**/*.js'),
    path.resolve(__dirname, '../shopify/**/*.liquid')
  ]
}