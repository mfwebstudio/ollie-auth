const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss(),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')
        ]
      : []
  ]
};
