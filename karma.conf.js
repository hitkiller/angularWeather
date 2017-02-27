var webpackConfig = require('./config/webpack.test');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
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
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        concurrency: Infinity
    })
}
