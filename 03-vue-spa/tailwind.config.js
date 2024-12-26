/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        victor: {
          50: '#E1FAFF',
          100: '#C8F6FE',
          200: '#7CEAFE',
          300: '#03D7FC',
          400: '#02B9D9',
          500: '#0296B0',
          600: '#0289A1',
          700: '#02788D',
          800: '#016374',
          900: '#014551',
          950: '#012B32',
        },
      },
    },
  },
  plugins: [],
};
