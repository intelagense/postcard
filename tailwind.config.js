/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        smol: '.02rem',
        baby: '.04rem',
        xs: '2px',
      }
    },
  },
  plugins: [],
}

