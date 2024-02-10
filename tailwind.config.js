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
      colors: {
        pink: "#d9aaef",
        purple: "#D305FF",
        mint: "80f0fc",
      },
    },
  },
  plugins: [],
};
