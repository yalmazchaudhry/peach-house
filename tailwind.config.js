/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marqueeDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        marqueeUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        marqueeDown: 'marqueeDown 20s infinite linear',
        marqueeUp: 'marqueeUp 20s infinite linear',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 0.6s ease-in-out',
      },
    },
    fontFamily: {
      sans: ['Gideon Roman', 'Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      poppins: ['Poppins', 'Arial', 'Helvetica', 'sans-serif']
    },
  },
  plugins: [],
};
