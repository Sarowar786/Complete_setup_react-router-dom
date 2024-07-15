/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        bodyFont: ['Sora', 'sans-serif'],
      },
      colors:{
        primanyColor: '#0f0715',
        perpleDark: '#8750f7'
      }
    },
  },
  plugins: [],
}