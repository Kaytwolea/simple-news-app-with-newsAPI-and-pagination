module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("prettier-plugin-tailwindcss")],
};
