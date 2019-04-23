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
            filename: 'bundle.js',
            publicPath: '/'
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
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName: "[local]-[hash:base64:5]"
                            }
                        },
                        {
                            loader: "less-loader"
                        }
                    ]
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

        devServer: {
            historyApiFallback: true,
            hot: true,
            open: true,
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