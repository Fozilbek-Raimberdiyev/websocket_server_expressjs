const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  mode: "development",
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
