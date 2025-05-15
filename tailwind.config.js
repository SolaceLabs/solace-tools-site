/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'Tahoma', 'Verdana', 'sans-serif'],
        heading: ['"Times LT W01 Bold"', '"Times New Roman"', 'serif'],
      },
      colors: {
        solace: {
          'classic-green': '#00C895',
          'bright-green': '#A8FF88',
          'deep-blue': '#0938BF',
          'dark-blue': '#032138',
          'spring-green': '#C7FFC8',
          'sky-blue': '#C2F7FF',
          'sunrise-yellow': '#FFF7C2',
          'dark-green': '#009193',
          orange: '#FCA829',
          white: '#FFFFFF',
          'resource-gray': '#343a40',
          'cool-gray': {
            12: '#4F4F4F',
            13: '#AEAEAE',
            14: '#D6D6D6'
          }
        }
      }
    },
  },
  plugins: [],
};