/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1366px" },
      // => @media (max-width: 1366px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      green: {
        500: "#86A395",
        600: "#84998F",
        650: "#52665C",
        700: "#44544c",
        800: "#3f4e47",
        900: "#232B27",
      },
      text: {
        1: "#fff",
        2: "#86A395",
        3: "#84998F",
      },
    }),
    fontFamily: {
      body: ["Crimson Text", "serif"],
      caption: ["Inter", " sans-serif"],
    },
    extend: {
      fontSize: {
        "3xl": ["1.625rem", { lineHeight: "2rem" }],
        "4xl": ["1.75rem", { lineHeight: "2.25rem" }],
        "7xl": ["5rem", { lineHeight: 1 }],
        "9xl": ["7.5rem", { lineHeight: 1 }],
      },
      boxShadow: {
        box: "0px 24px 80px rgba(21, 26, 24, 0.8)",
      },
    },
  },
  plugins: [],
};
