/** @type {import('tailwindcss').Config} */
export default {
  content: ["./indedx.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-slow2": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
