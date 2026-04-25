/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1B3A5C',
          accent: '#F4A623',
          light: '#EAF0F7',
          dark: '#0D1F33',
        },
      },
    },
  },
  plugins: [],
}
