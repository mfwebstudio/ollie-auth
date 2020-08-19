const path = require('path');
const ui = require('@tailwindcss/ui');
const customFormsPlugin = require('@tailwindcss/custom-forms');

const { typography, customForms, ...theme } = ui().config.theme;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  experimental: {
    uniformColorPalette: true
  },
  purge: {
    mode: 'all',
    content: ['src/**/*.tsx', 'src/**/*.ts', 'public/**/*.html'].map(p => path.resolve(__dirname, p))
  },
  theme: {
    ...theme,
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      borderRadius: {
        xl: '1.111rem',
        xxl: '1.667rem'
      },
      colors: {
        brand: {
          50: '#F5F7F7',
          100: '#EAF0EE',
          200: '#CBD8D5',
          300: '#ABC1BB',
          400: '#6C9388',
          500: '#2D6455',
          600: '#295A4D',
          700: '#1B3C33',
          800: '#142D26',
          900: '#0E1E1A'
        }
      }
    },
    customForms: theme => ({
      default: {
        select: {
          iconColor: theme('colors.gray.600'),
          backgroundPosition: 'right 0.8rem center',
          backgroundSize: '2rem 2rem'
        }
      }
    })
  },
  plugins: [customFormsPlugin]
};
