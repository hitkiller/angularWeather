var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: false,
            sourceMap: false,
            compress: {
                warnings: false,
            },
            comments: false
        }),
        new ExtractTextPlugin('[name].[hash].bundle.css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
