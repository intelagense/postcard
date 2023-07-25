/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'super': ['super'],
      'super-outline': ['"super outline"'],
      'handwrite': ['handwrite'],
      'handwrite-bold': ['"handwrite bold"'],
    },
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

