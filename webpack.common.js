const path = require('path');
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const PAGES_DIR = './src/pages/';
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
      index: './src/pages/index.js',
    },
    module: {
        rules: [
            // Loading CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            //Loading Images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            //Loading Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            //Loading Pug files
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ],
    },
    //using pug html-preprocessor
    plugins: [
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`
        })),
        new HtmlWebpackPugPlugin({
            adjustIndent: true
        }),

    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,//clean build directory before run
    },
};
console.log('common')