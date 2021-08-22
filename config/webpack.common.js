const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');


const paths = require('./paths');

module.exports = {
  entry: {
    index: [paths.src + '/index.js'],
    stories: [paths.src + '/pages/page2.js'],
    grid: [paths.src + '/js/grid.js'],
    flex: [paths.src + '/js/flex.js'],
  },

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {from: paths.src + '/assets', to: paths.build},
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'webpack',
      template: paths.src + '/template.pug',
      filename: 'index.html',
      chunks: ['index'],
    }),

    new HtmlWebpackPlugin({
      title: 'webpack',
      template: paths.src + '/pages/template2.pug',
      filename: 'page2.html',
      chunks: ['page2'],
    }),

    new HtmlWebpackPlugin({
      template: paths.src + '/flex.pug',
      filename: 'flex.html',
      chunks: ['flex'],
    }),

    new HtmlWebpackPlugin({
      filename: 'grid.html',
      template: paths.src + '/grid.pug',
      chunks: ['grid'],
    }),


    new PrettierPlugin(),
  ],

  module: {
    rules: [
      {test: /\.js$/, use: ['babel-loader']},

      {test: /\.pug$/, loader: 'pug-loader'},

      {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

      {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
};
