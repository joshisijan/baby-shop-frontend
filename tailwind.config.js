module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F2C2C2',
          varient: '#F5E4DC',
          light: '#F4C9D1',          
          dark: '#F3CCC1',
        },
        secondary: {
          DEFAULT: '#9EC4C5',
          varient: '#C1DDD8',
          light: '#AACDC8',
          dark: '#9DBCC6',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [  
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}