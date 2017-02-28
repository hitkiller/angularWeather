var webpackConfig = require('./config/webpack.test');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-webpack'),
            require('karma-sourcemap-loader'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'), // click "Debug" in browser to see it
        ],
        files: [{
            pattern: 'test/main.js',
            watched: false
        }],
        exclude: [],
        preprocessors: {
            'test/main.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig({
            env: 'test'
        }),
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        concurrency: Infinity
    })
}
