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
        main: '#9FA1B6',
        second: '#D5D78E',
        seconddark: '#95A194',
        third: '#C7D1D3',
        bright: '#F2F0EB',
        maindark: '#969694',
        maindarker: '#3F3F3D',
      },
    }
  },
  plugins: []
}

