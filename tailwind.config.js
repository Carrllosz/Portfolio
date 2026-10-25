const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { black: "#060606", white: "#FFFFFF" },
      fontFamily: { sans: ["Google Sans Flex", "sans-serif"] },
    },
  },
  plugins: [],
});
