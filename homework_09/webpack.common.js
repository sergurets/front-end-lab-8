const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: './src/app.js'
  },

  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: "babel-loader"
        }],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['bin']),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: 'src/app.html'
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'bin')
  }
};
