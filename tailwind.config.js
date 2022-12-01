/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      green: {
        500: "#86A395",
        600: "#84998F",
        700: "#52665CB2",
        800: "#52665c99",
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
        "3xl": ["1.625rem", { lineHeight: "1.25rem" }],
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
