/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        "blue-600": "hsl(231, 69%, 60%)",
        "red-400": "hsl(0, 94%, 66%)",
        "grey-50": "hsl(0, 0%, 97%)",
        "blue-950": "hsl(229, 31%, 21%)",
      },
      backgroundImage: {
        dots: "url('images/bg-dots.svg')",
      },
    },
  },
  plugins: [],
};
