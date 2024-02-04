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
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
