/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-medium": ["Roboto-Medium", "sans-serif"],
        "roboto-bold": ["Roboto-Bold", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        "nunito-bold": ["Nunito-Bold", "sans-serif"],
        "nunito-semibold": ["Nunito-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
