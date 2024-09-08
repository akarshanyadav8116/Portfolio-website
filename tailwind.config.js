/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveUp: 'moveUp ease-in-out 2s',
        levitate: 'levitate ease-in-out 1.9s infinite',
        appearRight: 'appearRight 1.5s ease-in',
        appearLeft: 'appearLeft 1.5s ease-in',
        appear: 'appear 1.5s ease-in',
        wobble: 'wobble 5s ease-in-out infinite'
      },
      keyframes: {
        moveUp: {
          '0%': {opacity : '0', transform:'translateY(0)'},
          '50%': {opacity : '1', transform:'translateY(25%)'},
          '100%' : {opacity : '0', transform:'translateY(50%)'}
        },
        levitate: {
          '0%' : {transform : 'translateY(0)'},
          '50%' : {transform : 'translateY(1%)'},
          '100%' : {transform : 'translateY(0)'}
        },
        fadeIn : {
          '0%' : {opacity : '0'},
          '100' : {opacity : '1'},
        },
        appear: {
          '0%' : {transform : 'translateY(-100%)'},
          '100%' : {transform : 'translateY(0)'},
        },
        appearRight : {
          '0%' : {opacity : '0', transform : 'translateX(25%)'},
          '100%' : {opacity : '1', transform : 'translateX(0)'},
        },
        appearLeft : {
          '0%' : {opacity : '0', transform : 'translateX(-25%)'},
          '100%' : {opacity : '1', transform : 'translateX(0)'},
        },
        wobble: {
          '0%': { transform: 'rotateZ(0deg)' },
          '25%': { transform: 'rotateZ(5deg)' }, // Top-right corner
          '50%': { transform: 'rotateZ(-5deg)' }, // Bottom-right corner
          '75%': { transform: 'rotateZ(5deg)' }, 
          '100%': {transform: 'rotateZ(0deg)'}
        },
      },
      fontFamily : {
        "qwitcher_grypen":['Qwitcher Grypen' , 'sans-serif'],
        "josefin_sans" : ['Josefin Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

