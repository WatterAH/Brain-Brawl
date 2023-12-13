/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#937DC2",
        pink: "#E8A0BF",
        peach: "#F5CAB3",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        irish: ['"Irish Grover"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
