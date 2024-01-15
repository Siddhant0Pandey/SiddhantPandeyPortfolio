/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      "primary-dark": "#131316",
      "primary-dark2": "#222",
      "primary-white": "#f1faee",
      accent: "#dddf00",

      highlights: "#00DFA2",
    },
    fontFamily: {
      Kanit: ["Kanit"],
      Roboto: ["Roboto"],
      Poppins: ["Poppins"],
    },

    extend: {},
  },
  plugins: [],
};