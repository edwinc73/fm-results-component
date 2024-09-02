/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0,100%,67%)",
        "orange-yellow": "hsl(39,100%,56%)",
        "green-teal": "hsl(166,100%,37%)",
        "cobalt-blue": "hsl(234,85%,45%)",
        "slate-bg": "hsl(252, 100%, 67%)",
        "blue-bg": "hsl(241, 81%, 54%)",
        "violet-circle": "hsla(256, 72%, 46%, 1)",
        "blue-circle": "hsla(241, 72%, 46%,0)",
        "light-blue": "hsl(221, 100%, 96%)",
        lavender: "hsl(241, 100%, 89%)",
        "dark-blue": "hsl(224, 30%, 27%)",
      },
      fontSize: {
        base: "18px",
      },
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
