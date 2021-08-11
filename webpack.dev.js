const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },

  plugins: [
        new PrettierPlugin({
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
            semi: true,
            encoding: 'utf-8',
            extensions: [ ".js", ".ts" ]
        })
    ]
});
console.log('dev')

  
 
