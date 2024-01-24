/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        line: 'hsl(180, 10%, 74%)',
        cyan: 'hsl(180, 29%, 50%)',
        'light-cyan': 'hsl(180, 52%, 96%)',
        'dark-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-cyan': 'hsl(180, 14%, 20%)'
      },
      transitionProperty: {
        fadeIn: 'visibility, opacity'
      }
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif']
    },
    backgroundImage: {
      'header-mobile': 'url("/bg-header-mobile.svg")',
      'header-desktop': 'url("/bg-header-desktop.svg")'
    },
    boxShadow: {
      card: '0px 15px 20px -5px rgba(13, 113, 130, 0.15)'
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
