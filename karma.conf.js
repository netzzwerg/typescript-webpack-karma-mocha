// Karma configuration
// Generated on Tue May 30 2017 21:10:09 GMT+0200 (CEST)
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'karma-typescript'],

    // list of files / patterns to load in the browser
    files: ['src/**/*.ts'],

    // list of files to exclude
    exclude: [
    ],

    // webpack configuration
    webpack: {
        module: webpackConfig.module,
        resolve: webpackConfig.resolve
    },

    webpackMiddleware: {
        quiet: false,
        stats: {
            colors: true
        }
    },

    // karma typescript configuration 
    karmaTypescriptConfig: {
        tsconfig: "./tsconfig.json",
        bundlerOptions: {
            // set *.spec.ts files as entrypoints 
            // for correct code coverage
            entrypoints: /\.spec\.ts$/
        },
        coverageOptions: {
            // exclude the index.ts and *.spec.ts files
            // for correct code coverage
            exclude: [/index\.ts$/, /\.spec\.ts$/]
        },
        reports: {
            html: "coverage",
            text: ""
        },
        compilerOptions: {
            baseUrl: ".",
            paths: {
                "*": [ "src/helper/*" ]
            }
        }
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/**/*.ts': ['webpack', 'karma-typescript']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'karma-typescript'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // possible values: PhantomJS, Chrome
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
