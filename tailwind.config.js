
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    fontSize:{
      xsm:'0.75rem',
      sm:'0.875rem',
      base:'1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        kumbh_sans: ['Kumbh Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-grey':'#141414',
        'primary-yellow': '#FFD11A',
        'primary-orange':'#FF5500',
        yellow:{
          50: '#FBFBFE',
          100: '#FFFCF0',
          200: '#FFFAE5',
          300: '#FFF5CC',
          400: '#FFEB99',
          500: '#FFE066',
          600: '#FFD633',
        },
        grey:{
          50: '#FCFCFD',
          100: '#F7F7F8',
          200: '#F1F1F3',
          300: '#E4E4E7',
          400: '#CCCCCC',
          500: '#B3B3B3',
          600: '#98989A',
          700: '#7E7E81',
        },
        'dark-grey':{
          50: '#666666',
          100: '#595959',
          200: '#4D4D4D',
          300: '#404040',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
        }
        
      }
    },
  },
  plugins: [],
};
