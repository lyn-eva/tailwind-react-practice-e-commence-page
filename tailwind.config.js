module.exports = {
  content: ["./src/**/**/*.js"],
  theme: {
    extend: {
      colors: {
        'orange': "hsl(26, 100%, 55%)",
        'pale-orange': 'hsl(25, 100%, 94%)',
        'v-d-blue': 'hsl(220, 13%, 13%)',
        'd-g-blue': 'hsl(219, 9%, 45%)',
        'g-blue': 'hsl(220, 14%, 75%)',
        'l-g-blue': 'hsl(223, 64%, 98%)',
        'black-75-op': 'hsl(0, 0%, 0%)'
      },
      screens: {
        'mobile': "740px",
      },
      backgroundImage: {
        'left-arrow': "url('/src/images/icon-previous.svg')",
        'right-arrow': "url('/src/images/icon-next.svg')",
        'icon-plus': "url('/src/images/icon-plus.svg')",
        'icon-minus': "url('/src/images/icon-minus.svg')",
      }
    },
  },
  variants: {
    extend: {
      opacity: ["focus"]
    }
  },
  plugins: [],
};
