/** @type {import('tailwindcss').Config} */

const px50 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px400 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px800 = { ...Array.from(Array(701)).map((_, i) => `${i}px`) };

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      fontSize: px50,
      width: px800,
      height: px800,
      spacing: px400,
    },
  },
  plugins: [],
};
