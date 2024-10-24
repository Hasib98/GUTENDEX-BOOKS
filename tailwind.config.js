/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vastshadow: ["Vast Shadow", "serif"],
        nunito: ["Nunito", "sans-serif"],
        dynapuff: ["DynaPuff", "system-ui"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
