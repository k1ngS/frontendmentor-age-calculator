/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        'primary': {
          purple: '#854dff',
          lightRed: '#ff5757',
        },
        'neutral': {
          white: '#fff',
          offWhite: '#f0f0f0',
          lightGrey: '#dbdbdb',
          smokeyGrey: '#716f6f',
          offBlack: '#141414',
        },
      },
    },
  },
  plugins: [],
}

