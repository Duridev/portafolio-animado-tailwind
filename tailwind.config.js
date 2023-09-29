/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": "'DM Sans', sans-serif"
      },
      colors:{
        "green-color": "#27AE60",
        "gray-color": "#828282",
        "card-color": "#212121",
        "background-color": "#171717",
        "menu-color": "#172554"
      },
      backgroundImage:{
        "open-menu": "url('../assets/img/menu-alt-3.svg')",
        "close-menu": "url('../assets/img/close.svg')"
      }
    },
  },
  plugins: [],
}

