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
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "mystique-green": "#0F4B30",
        "amazon-green": "#3b7a57",
        "light-green": "#8fbc8f",
        "chique-green": "#3a6456",
        "french-bistre": "#856d4d",
        "faded-green": "#b6beb1",
        "royal-gold": "#B19767",
        "light-purple": "#ECEEFD",
        "dark-purple": "#8187B6",
        "gainsboro": "#f0efed",
        "slate-gray": "#E5E5E5",
        "dark-grey": "#a9a9a9",
        "pale-blue": "#F5F6FF",
        "rhythm-gray": "#777696",
        "white-400": "rgba(255, 255, 255, 0.80)"
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

