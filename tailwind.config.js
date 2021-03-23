const {
  colors: defaultColors,
  fontFamily: def,
} = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "custom-ater": {
      500: "#CD09EB",
    },
  },
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      ater: ["Chango"],
      body: ["Open-sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
