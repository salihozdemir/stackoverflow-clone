const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
