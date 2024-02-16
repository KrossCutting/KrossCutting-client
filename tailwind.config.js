/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

const px50 = { ...Array.from(Array(51)).map((_, i) => `${i}px`) };
const px600 = { ...Array.from(Array(601)).map((_, i) => `${i}px`) };
const px800 = { ...Array.from(Array(801)).map((_, i) => `${i}px`) };

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: px50,
      width: px800,
      height: px800,
      spacing: px600,
      zIndex: {
        "-1": "-1",
      },
      boxShadow: {
        neon: "0px 0px 20px 5px rgba(199, 21, 255, 0.4)",
      },
      colors: {
        pink: "rgb(217, 170, 239)",
        purple: "rgb(211,5,255)",
        mint: "rgb(30, 239, 239)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
