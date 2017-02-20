var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var helpers = require('./helpers');

console.log('@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@');

module.exports = {
    devtool: 'source-map',
    performance: {
        hints: false
    },
    entry: {
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },
    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.html']
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']
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
        new CleanWebpackPlugin(['dist'], {
            root: helpers.root(''),
            verbose: true,
            dry: false,
            exclude: ['fonts']
        }),

        new ExtractTextPlugin('[name].css'),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new CopyWebpackPlugin([{
            from: 'app/meteo/css/images',
            to: 'images'
        }, {
            from: 'app/meteo/css/fonts',
            to: 'fonts'
        }]),

        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};
