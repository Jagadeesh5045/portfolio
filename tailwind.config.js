/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        coal: '#141414',
        smoke: '#1f1f1f',
        signal: '#f6121d',
        signalDark: '#b30d16',
        bone: '#f5f5f5',
        ash: '#a3a3a3',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
