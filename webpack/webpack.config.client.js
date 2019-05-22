const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/index.js',
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          isDevMod ? 'style-loader' : ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    !isDevMod && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    new ExtractCssChunks(
      {
        filename: '[name].css',
      },
    ),

  ].filter(Boolean),
});
