/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
    },
       fontFamily: {
      'space': [ 'Space Grotesk','ui-sans-serif'],
      
    },
     gridTemplateColumns: {
        // Simple 16 column grid
        'cus': 'repeat(2, minmax(auto, auto))',

   
      },
    screens: {
     '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '939px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
    },
  },
  plugins: [],
}
