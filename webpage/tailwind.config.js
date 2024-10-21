/** @type {import('tailwindcss').Config} */

require('@mariohamann/tailwindcss-var')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      main: ['Roboto', 'sans-serif'],
      second: ['EB Garamond Variable', 'serif'],
      third: ['Popins', 'sans-serif'],
    },
    extend: {
      colors: {
        main: '#EDEDEB',
        second: '#ADA661',
        seconddark: '#6E6622',
        third: '#5A4998',
        maindark: '#969694',
        maindarker: '#3F3F3D',
      },
    }
  },
  plugins: []
}

