/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "rotate-up": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        "rotate-down": {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(65px)" },
          "750%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-65px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "rotate-up": "rotate-up 0.3s ease-in-out forwards",
        "rotate-down": "rotate-down 0.3s ease-in-out forwards",
        "fade-in-bottom":
          "fade-in-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "fade-in-right":
          "fade-in-right 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "fade-in-left":
          "fade-in-left 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
    },
  },
  variants: {},
  plugins: [],
};
