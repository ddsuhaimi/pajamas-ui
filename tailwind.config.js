/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#e9f3fc",
          100: "#cbe2f9",
          200: "#9dc7f1",
          300: "#63a6e9",
          400: "#428fdc",
          500: "#1f75cb",
          600: "#1068bf",
          700: "#0b5cad",
          800: "#064787",
          900: "#033464",
          950: "#002850"
        }
      }
    }
  },
  plugins: []
};
