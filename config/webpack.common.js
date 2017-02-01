let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let helpers = require('./helpers');

module.exports = {
    entry: {
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'file-loader?name=/images/[name].[ext]'
        }, {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=/fonts/[name].[ext]'
        }, {
            test: /\.(jpg|png)$/,
            loader: 'file-loader?name=/fonts/[name].[ext]'
        }, {
            test: /\.css$/,
            exclude: helpers.root('app'),
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader?sourceMap'
            })
        }, {
            test: /\.css$/,
            include: helpers.root('app'),
            loader: 'raw-loader'
        }]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new CopyWebpackPlugin([{
            from: 'app/images',
            to: 'images'
        }, {
            from: 'app/meteo/css/fonts',
            to: 'fonts'
        }]),

        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
