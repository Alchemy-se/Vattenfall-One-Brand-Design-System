var path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require("webpack");

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'js/app.js'),
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'horizon.min.js'
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),

  ]

};
