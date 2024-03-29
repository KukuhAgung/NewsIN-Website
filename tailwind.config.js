/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B00000",
        text: "#e5e5e5",
        title: "#151515",
        sub: "#8F8F8F",
        footer: "#4C4C4C",
      },
      fontFamily: {
        footer: ["League Spartan", "sans-serif"],
      },
      boxShadow: {
        smm: "rgba(176, 0, 0, 0.19) 0px 10px 20px, rgba(176, 0, 0, 0.23) 0px 6px 6px",
      },
    },
  },
  plugins: [],
};
