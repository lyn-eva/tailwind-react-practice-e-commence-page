module.exports = {
  content: ["./src/**/**/*.js"],
  theme: {
    extend: {
      colors: {
        'orange': "hsl(26, 100%, 55%)",
      },
      screens: {
        'mobile': "715px",
      },
      backgroundImage: {
        'left-arrow': "url('/src/images/icon-previous.svg')",
        'right-arrow': "url('/src/images/icon-next.svg')"
      }
    },
  },
  plugins: [],
};
