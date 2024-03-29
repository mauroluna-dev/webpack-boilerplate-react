const path = require('path');
const CSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./loaders.config');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      loaders.JSXLoader,
      loaders.CSSLoader,
      loaders.HTMLLoader,
      loaders.MEDIALoader,
      loaders.FONTSLoader,
    ],
  },
  mode: 'production',
  plugins: [
    new CSSExtractPlugin({
      filename: '[name].chunk.css',
      chunkFilename: '[name].chunk.css',
      ignoreOrder: false,
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
