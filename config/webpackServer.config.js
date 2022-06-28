const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const paths = require("./paths");
const webpackConfig = require("./webpack.config");

module.exports = module.exports = function (webpackEnv) {
  const baseConfig = webpackConfig(webpackEnv);

  return {
    ...baseConfig,
    entry: paths.serverIndexJs,
    output: {
      path: paths.serverBuild,
      publicPath: paths.publicUrlOrPath,
      filename: "server.js",
    },
    target: "node",
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false, // if you don't put this is, __dirname
      __filename: false, // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    plugins: [...baseConfig.plugins.slice(1)], //plugins without HtmlWebpackPlugin
  };
};
