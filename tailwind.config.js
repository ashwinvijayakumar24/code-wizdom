/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/src/assets/images/home/checked.png")',
      },
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'cw_theme': '#6000BF',
    // },
  },
  plugins: [],
}