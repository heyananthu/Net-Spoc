/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   audiowide: ["Audiowide", "cursive"], // Custom Font
      // },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    // require("daisyui"),
  ],
};
