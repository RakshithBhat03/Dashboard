module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      },
    },
  },
  darkMode: "class",
  experimental: {
    applyComplexClasses: true,
  },
};
