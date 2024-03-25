/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",
          secondary: "#111827",
          accent: "#006e00",
          neutral: "#0a2026",
          "base-100": "#0E0D0D",
          info: "#00fdff",
          success: "#00995e",
          warning: "#d97706",
          error: "#f30036",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
