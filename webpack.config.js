// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"), // Directory for serving static files
    hot: true, // Enable Hot Module Replacement
    open: true, // Open the browser automatically when the server starts
    port: 3000, // You can specify a custom port
    watchContentBase: true, // Watch for changes in the static files (like HTML)
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
