const merge = require('webpack-merge');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        include: /src/,
        use: [
          {
            loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
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
});
