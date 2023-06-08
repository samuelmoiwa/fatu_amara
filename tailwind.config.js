/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-color': '#97BF0F',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        noto: ['Noto Serif TC', 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ["@babel/plugin-transform-react-jsx", { "throwIfNamespace": false }]
  ],
}
