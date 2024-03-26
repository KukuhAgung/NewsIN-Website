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
      },
    },
  },
  plugins: [],
};
