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
    extend: {
      colors: {
        highlight: "#00dfa2",
        white: "#f1faee",
        accent: "#edd719",
        gray: "#adb5bd",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        spinner: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        rotater: "spinner 10s linear infinite",
        wiggle: "wiggle 10s linear infinite",
      },
    },
  },
  plugins: [],
};
