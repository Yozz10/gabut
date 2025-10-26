/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pinky: {
          light: "#fbcfe8",
          DEFAULT: "#f472b6",
          dark: "#ec4899",
        },
      },
    },
  },
  plugins: [],
};
