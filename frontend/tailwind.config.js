/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];


module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"
],
safelist: [
  ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
  ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
  ...labelsClasses.map((lbl) => `text-${lbl}-400`)
],
  theme: {
    extend: {
      screens: {
        'md-custom': '758px', // Add  custom breakpoint
      },
      fontFamily: {
        poppins: "Poppins",
        kaushan: "Kaushan Script",
      },
      backgroundImage: {
        hero1: "url(src/assets/images/hero1.jpg)",
        hero2: "url(src/assets/images/hero2.jpg)",
        hero3: "url(src/assets/images/hero3.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

