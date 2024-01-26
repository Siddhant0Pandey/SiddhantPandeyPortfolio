/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Kanit: ["Kanit"],
      Roboto: ["Roboto"],
      Poppins: ["Poppins"],
    },
    colors: {
      highlight: "#00dfa2",
      white: "#f1faee",
      accent: "#edd719",
    },
    extend: {},
  },
  plugins: [],
};
