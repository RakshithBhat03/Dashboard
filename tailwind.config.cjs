module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  plugins: [require("flowbite/plugin")],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bgNavbar: "#2f354a",
        turquoiseBlue: "#5be7d9",
        teal: {
          DEFAULT: "#008077",
          50: "#eefffb",
          100: "#c5fff5",
          200: "#8bffed",
          300: "#4afee3",
          400: "#15ecd3",
          500: "#00d0bb",
          600: "#00a899",
          700: "#008077",
          800: "#066964",
          900: "#0a5752",
        },
        fountainBlue: "#53bfb5",
        geebung: {
          DEFAULT: "#d79c1b",
          50: "#fcf9ea",
          100: "#f9f2c8",
          200: "#f4e294",
          300: "#eecb56",
          400: "#e7b328",
          500: "#d79c1b",
          600: "#b97815",
          700: "#945714",
          800: "#7b4518",
          900: "#69391a",
        },
        jaggedIce: "#c6e7e5",
      },
      boxShadow: {
        card: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
      container: {
        center: true,
      },
    },
  },
  darkMode: "class",
  experimental: {
    applyComplexClasses: true,
  },
};
