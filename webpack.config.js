// Import all dependancies
const HtmlWebPackPlugin = require('html-webpack-plugin');

// instantiate the plugin
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',             // Input
  filename: './index.html'                  // Output
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // Use babel to transpile ES6 into Es5
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};