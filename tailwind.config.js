/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      "primary-dark": "#131316",
      "primary-white": "#f1faee",

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
