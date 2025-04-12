/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        fadedColor: "var(--fadedColor)",
        fgColor: "var(--fgColor)",
      },
      screens: {
        smm: "1069px",
        slm: "291px",
      },
    },
  },

  plugins: [],
};
