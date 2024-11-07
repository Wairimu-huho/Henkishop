const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',        // Entry point for JavaScript
  output: {
    filename: 'bundle.js',        // Output bundled JS file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/i,          // Match CSS files
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use HTML template in src/
    }),
  ],
  mode: 'development',            // Set mode to 'development' or 'production'
};
