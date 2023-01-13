/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-mode-background": "#7B2869",
        "dark-mode-text": "#FFFFFF",
        "light-mode-background": "#D8D8D8",
        "light-mode-text": "#000000",
      },
      fontFamily: {
        "dancing-script": ["Dancing Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
