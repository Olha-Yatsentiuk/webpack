const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');


const paths = require('./paths');

module.exports = {
  entry: {
    index: [paths.src + '/ts/index.ts'],
    grid: [paths.src + '/ts/grid.ts'],
    flex: [paths.src + '/ts/flex.ts'],
    description: [paths.src + '/ts/description.ts'],
    articles: [paths.src + '/ts/articles.ts'],
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
      template: paths.src + '/pages/index.pug',
      filename: 'index.html',
      chunks: ['index'],
    }),

    new HtmlWebpackPlugin({
      template: paths.src + '/pages/flex.pug',
      filename: 'flex.html',
      chunks: ['flex'],
    }),

    new HtmlWebpackPlugin({
      filename: 'grid.html',
      template: paths.src + '/pages/grid.pug',
      chunks: ['grid'],
    }),

    new HtmlWebpackPlugin({
      filename: 'description.html',
      template: paths.src + '/pages/description.pug',
      chunks: ['description'],
    }),

    new HtmlWebpackPlugin({
      filename: 'articles.html',
      template: paths.src + '/pages/articles.pug',
      chunks: ['articles'],
    }),


    new PrettierPlugin(),
  ],

  module: {
    rules: [
      {test: /\.js$/, use: ['babel-loader']},

      {test: /\.pug$/, loader: 'pug-loader'},

      {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

      {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},

      {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
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
