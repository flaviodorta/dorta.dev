/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'layout-1': '#121212',
        'layout-2': '#0f0f0f',
        primary: '#ED0C32',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'share-tech': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        wave: 'wave 1.5s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ['fast-pulse']: 'full-pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        sound: 'sound 0.60s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(-1px)' },
          '100%': { transform: 'translateX(-55px)' },
        },
        pulse: {
          '0%': { opacity: 0.1 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.1 },
        },
        ['full-pulse']: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        sound: {
          '0%': {
            height: '1px',
          },
          '50%': {
            height: '30px',
          },
          '100%': {
            height: '1px',
          },
        },
      },
    },
  },
  plugins: [],
};
