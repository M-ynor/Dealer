
/* eslint-env node */
const { nextui } = require("@nextui-org/react");
const { Scroll } = require("tailwind-scrollbar");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    darkMode: "class",
    colors: {
      "WhiteMynor": "#FFFFFE",
      "BlueMynor": "#100E34",
      "RedMynor": "#a2001d",
      "GrayMynor1": "#F8F8F8",
      "GrayMynor2": "#EAEBF0",
      "GrayMynor3": "#ABF1BA",
      "GrayMynor4": "#666872",
    }
  },
  plugins: [
    nextui(),
    Scroll()
  ],
}

