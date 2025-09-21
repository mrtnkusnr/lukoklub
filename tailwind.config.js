/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mrdafoe: ["'Mr Dafoe'", "normal"], // názov fontu presne ako je v Google Fonts
      },
    },
  },
  plugins: [],
};
