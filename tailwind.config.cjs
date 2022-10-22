const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      neutral: {
        50: "#13171b",
        100: "#171c20",
        200: "#1b2026",
        300: "#1e252b",
        400: "#222a31",
        500: "#262e36",
        600: "#2a333c",
        700: "#2d3841",
        800: "#313c47",
        900: "#35414c",
      },
      text: {
        500: "#ffffff",
        400: "#d4d6d9",
        300: "#a9aeb3",
        200: "#7d858d",
        100: "#525c67",
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
