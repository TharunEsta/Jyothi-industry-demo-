/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        premium:
          "0 24px 70px -24px rgba(15, 23, 42, 0.24), 0 6px 18px -8px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
