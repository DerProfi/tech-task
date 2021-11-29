module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: [
    "node_modules/(?!(vue-flickity|vue-zoomer|homeday-blocks|homeday-assets|homeday-blocks/src/assets/small-icons)/)",
  ],
  moduleNameMapper: {
    "^homeday-blocks/(.*)$": "<rootDir>/node_modules/homeday-blocks/$1",
  },
};
