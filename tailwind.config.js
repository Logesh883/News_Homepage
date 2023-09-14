/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        Softorange: "hsl(35, 77%, 62%)",
        Softred: "hsl(5, 85%, 63%)",
        Offwhite: "hsl(36, 100%, 99%)",
        Grayishblue: "hsl(233, 8%, 79%)",
        Darkgrayishblue: "hsl(236, 13%, 42%)",
        VeryDarkblue: "hsl(240, 100%, 5%)",
      },
      textColor: {
        Softorange: "hsl(35, 77%, 62%)",
        Softred: "hsl(5, 85%, 63%)",
        Offwhite: "hsl(36, 100%, 99%)",
        Grayishblue: "hsl(233, 8%, 79%)",
        Darkgrayishblue: "hsl(236, 13%, 42%)",
        VeryDarkblue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
