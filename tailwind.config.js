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
          blue: {
            900: "#001233",
            800: "#001845",
            700: "#002855",
            600: "#023e7d",
            500: "#0353a4",
            400: "#0466c8",
          },
          gray: {
            900: "#33415c",
            800: "#5c677d",
            700: "#7d8597",
            600: "#979dac",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
