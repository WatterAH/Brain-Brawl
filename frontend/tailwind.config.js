/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#937DC2",
        pink: "#E8A0BF",
        peach: "#F5CAB3",
      },
    },
  },
  plugins: [],
};
