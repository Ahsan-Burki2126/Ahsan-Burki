/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0e0b1c",
        blue: "#100e24",
        purple: "#af2676",
        white: "#fffffe",
      },
    },
  },
  plugins: [],
};
