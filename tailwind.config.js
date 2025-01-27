/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Be+Vietnam+Pro", "sans-serif"],
      },
      colors: {
        primary: {
          bright_red: "hsl(12, 88%, 59%)",
          dark_blue: "hsl(228, 39%, 23%)",
        },
        neutral: {
          dark_grayish_blue: "hsl(227, 12%, 61%)",
          very_dark_blue: "hsl(233, 12%, 13%)",
          very_pale_red: "hsl(13, 100%, 96%)",
          very_light_gray: "hsl(0, 0%, 98%)",
        },
      },
    },
  },
  plugins: [],
};
