const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#268bd2",
        end: "#134669",
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"]
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
        ".text-fill-current": {
          "-webkit-text-fill-color": "currentColor",
        }
      }, {
        variants: ["dark"]
      })
    })
  ],
}
