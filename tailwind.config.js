/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        md: "768px",
      },
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#c89f94",
          400: "#A25F4B",
          600: "#744838",
        },
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fateIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: {
        slideDown: "slideDown .5s ease-in-out",
        fateIn: "fateIn .5s ease-in-out",
      },
      backgroundImage: {
        "slider-img":
          'url("https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg")',
      },
    },
  },
  plugins: [],
};
