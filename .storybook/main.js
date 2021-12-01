const path = require("path");
const modulesToTranspile = ["homeday-blocks"];

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/vue",
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(js|ts)$/,
      include: modulesToTranspile.map((moduleName) =>
        path.resolve(__dirname, `../node_modules/${moduleName}`)
      ),
      loader: "babel-loader",
    });
    config.module.rules.push({
      test: /\.vue$/,
      include: modulesToTranspile.map((moduleName) =>
        path.resolve(__dirname, `../node_modules/${moduleName}`)
      ),
    });
    return config;
  },
};
