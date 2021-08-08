const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const PrettierPlugin = require("prettier-webpack-plugin");


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },

  plugins: [
    new PrettierPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
        },
      },
    ],
  },

 

})





  
 
