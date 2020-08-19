const path = require('path');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    tailwindcss(),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [
          require('cssnano'),
          purgecss({
            content: ['src/**/*.tsx', 'src/**/*.ts', 'src/**/*.html'].map(p => path.resolve(__dirname, p)),
            defaultExtractor: content => {
              // Capture as liberally as possible, including things like `h-(screen-1.5)`
              const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

              // Capture classes within other delimiters like .block(class="w-1/2") in Pug
              const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

              return broadMatches.concat(innerMatches);
            }
          })
        ]
      : []
  ]
};
