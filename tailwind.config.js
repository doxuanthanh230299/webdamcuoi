/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'tw-',
  theme: {
    screens: {
      xs: '300px',
      sm: '600px',
      md: '700px',
      lg: '992px',
    },
    container: {
      center: true,
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    colors: {
      transparent: 'transparent',
      pink: '#c89d9c',
      gray: '#444',
      black: '#202a41',
      backgroundColor: '#b58887',
      white: '#ffff',
    },
    fontFamily: {
      dancingScript: ['Dancing Script'],
      comfortaa: ['Comfortaa'],
    },
    // variants: {
    //   backgroundColor: ['hover'],
    // },
    extend: {},
  },
  plugins: [],
};
