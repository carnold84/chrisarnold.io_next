const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      neutral: {
        50: "#ffffff",
        100: "#eeeeee",
        200: "#dddddd",
        300: "#cccccc",
        400: "#bbbbbb",
        500: "#aaaaaa",
        600: "#999999",
        700: "#888888",
        800: "#777777",
        900: "#666666",
      },
      text: {
        500: "rgba(0, 0, 0, 0.8)",
        400: "rgba(0, 0, 0, 0.65)",
        300: "rgba(0, 0, 0, 0.5)",
        200: "rgba(0, 0, 0, 0.35)",
        100: "rgba(0, 0, 0, 0.2)",
      },
      transparent: colors.transparent,
    },
    fontFamily: {
      body: ["Source Sans Pro", "sans-serif"],
      display: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: ["0.707rem", "1.75"],
      sm: ["0.8827rem", "1.75"],
      body: ["1rem", "1.75"], // 14px
      h5: ["1.414rem", "1.3"],
      h4: ["1.999rem", "1.3"],
      h3: ["2.827rem", "1.3"],
      h2: ["3.998rem", "1.3"],
      h1: ["5.653rem", "1.3"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
    },
    extend: {
      screens: {
        xs: "580px",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
