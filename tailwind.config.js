/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./public/**/*.{html,css,js}', './node_modules/flowbite/**/*.js'],
  theme: {

    extend: {

      textColor: ['responsive', 'hover'],

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'custom-blue': '#0180E2',
        'custom-blue-dark': '#13254E'
      },

      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(15deg)' },
          '20%': { transform: 'rotate(-9deg)' },
          '30%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(11.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        }

      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'float': 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require('@tailwindcss/forms')
  ],
  safelist: [{
    pattern:
      /(bg|text|border)-(transparent|current|custom-blue|custom-blue-dark)/,
  },
  ]
}

