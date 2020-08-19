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
        },
        secondary: {
          50: '#FEFEF9',
          100: '#FDFDF3',
          200: '#FBFBE1',
          300: '#F8F8CE',
          400: '#F2F2AA',
          500: '#EDED85',
          600: '#D5D578',
          700: '#8E8E50',
          800: '#6B6B3C',
          900: '#474728'
        }
      },
      minWidth: theme => ({
        ...theme.minWidth,
        ...(theme('spacing'))
      })
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
