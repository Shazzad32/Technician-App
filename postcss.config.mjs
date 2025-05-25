const config = {
  plugins: ["@tailwindcss/postcss"],
  extend: {
    transitionProperty: {
      scale: "transform",
    },
    scale: {
      102: "1.02",
    },
  },
};

export default config;
