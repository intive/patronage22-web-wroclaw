const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const { getWebpackConfig } = require("@nrwl/cypress/plugins/preprocessor");
const cypressWebpack = require("./webpack.config");

module.exports = config => {
  const webpackConfig = getWebpackConfig(config);
  const webpackOptions = cypressWebpack(webpackConfig);

  return webpackPreprocessor({
    webpackOptions
  });
};
