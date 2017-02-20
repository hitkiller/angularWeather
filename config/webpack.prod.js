var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');

module.exports = {
    entry: {
        'vendor': './app/vendor.ts',
        'app': './app/main-aot.ts'
    },
    output: {
        path: './aot/',
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].[hash].chunk.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.html']
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader?aot=true&genDir=aot/']
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

        new CleanWebpackPlugin(['aot'], {
            root: helpers.root(''),
            verbose: true,
            dry: false,
            exclude: ['app', 'fonts', 'node_modules', 'bs-config.json']
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new CopyWebpackPlugin([{
            from: 'app/meteo/css/images',
            to: 'images/',
            flatten: true
        }, {
            from: 'app/meteo/css/fonts',
            to: 'fonts/'
        }]),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html'
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: false,
            sourceMap: false,
            compress: {
                warnings: false,
            },
            comments: false
        }),
        new ExtractTextPlugin('[name].[hash].bundle.css')
    ]
};
