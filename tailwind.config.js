module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0EB56F",
          purple: "#6333ff",
          gray: {
            lighter: "#778CAC",
            darker: "#3E4859",
          },
          dark: {
            900: "#15151B",
            800: "#1A1A22",
            700: "#22222C",
            600: "#212330",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
