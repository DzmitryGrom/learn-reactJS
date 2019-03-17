const path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, option){
  const isProduction = option.mode === 'production';
  
  const config = {
    context: path.resolve(__dirname, 'src'),
  
    entry: './index.js',
  
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
  
    devtool: isProduction ? 'none' : 'source-map',
  
    mode: isProduction ? "prodiction" : "development",
  
    resolve: {
      extensions: ['.js', '.jsx']
    },
  
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'less-loader']})
        }
      ]
    },
    
    optimization: {
      splitChunks: {
        cacheGroups: {
          vender: {
            test: /node_modules/,
            name: "vender",
            chunks: "all",
            priority: 2,
            minSize: 0,
            minChunks: 2
          },
          commons: {
            name: "commons",
            chunks: "all",
            priority: 1,
            minSize: 0,
            minChunks: 2
          }
        }
      }
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Learn react',
        hash: true,
        template: './index.html'
      }),
      new ExtractTextPlugin({ filename: 'style.css' })
    ],
  
    watch: true
  };
  
  return config;
  
};