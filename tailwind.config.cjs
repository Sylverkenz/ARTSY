/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,}"],
  theme: {
    screens: {
      sm: "480px",
      md: "769px",
      mdl: "885px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: "hsl(230, 35%, 7%)",
        secondary: "hsl(231, 77%, 90%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        CDisplay: ["Clash Display", "sans-serif"],
        STIX: ["STIX Two Text", "serif"],
        Satoshi: ["Satoshi", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
        Cardo: ["Cardo", "serif"],
      },
    },
  },
  plugins: [],
};
