module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        misery: {
          primary: "#f3f4f6",
          secondary: "#111827",
          accent: "#0000ff",
          neutral: "#323232",
          "base-100": "#1b1b1b",
          info: "#0089ad",
          success: "#a6d200",
          warning: "#f79700",
          error: "#df2f3b",
        },
      },
      {
        serenity: {
          primary: "#292524",
          secondary: "#f3f4f6",
          accent: "#0000ff",
          neutral: "#323232",
          "base-100": "#e0e0e0",
          info: "#0089ad",
          success: "#a6d200",
          warning: "#f79700",
          error: "#df2f3b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
