/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#87CEFA",
          secondary: "#8FBC8F",
          accent: "#1E90FF",
          neutral: "#FFFFFF",
          "base-100": "#87CEFA",
        },
      },
      "aqua",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

