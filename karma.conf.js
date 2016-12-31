// Karma configuration
// Generated on Wed Dec 28 2016 10:43:53 GMT+0100 (CET)

const webpackConfig = require('./webpack.config.babel')()

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai'],


    // list of files / patterns to load in the browser
    files: [
    'test/**/*.test.js'
    ],
    webpackMiddleware: {noInfo: true},

    // list of files to exclude
    exclude: [
    ],
    // coverageReporter: {
    //   check: {
    //     global: {
    //       statements: 11,
    //       branches: 0,
    //       functions: 0,
    //       lines: 11
    //     },
    //   },
    //   reporters: [
    //     {type: 'lcov', dir: 'coverage/', subdir: '.'},
    //     {type: 'json', dir: 'coverage/', subdir: '.'},
    //     {type: 'text-summary'}
    //   ]
    // },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    	'test/**/*.test.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    webpack: webpackConfig,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome','Safari'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
