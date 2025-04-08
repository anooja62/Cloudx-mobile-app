const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add this for path alias support
config.resolver.alias = {
  "@context": require("path").resolve(__dirname, "src/context"),
};

module.exports = config;
