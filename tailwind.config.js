/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'wave-animation': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(12deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '40%': { transform: 'rotate(9deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        wave: 'wave-animation 2.5s linear 2'
      }
    },
  },
  plugins: [],
};
