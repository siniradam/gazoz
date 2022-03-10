module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      height: {
        "12w": "12vw",
      },
      height: {
        "20w": "20vw",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
