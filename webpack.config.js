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
      },
      {
        test: /\.css$/,
        // First css-laoder resolves the files,
        // then style-loader loads them into the page
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:bash64]',
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};