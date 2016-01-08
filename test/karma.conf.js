// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-12-03 using
// generator-karma 1.0.1

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',
    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine", "browserify"
    ],
    // list of files / patterns to load in the browser
    files: [
        'spec/**/*.js',
        '../app/scripts/**/*.html'
    ],
    
    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS",
      "Chrome",
      "Firefox",
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-browserify",
      "karma-spec-reporter",
      "karma-firefox-launcher",
      "karma-jasmine",
      "ng-html2js",
      "karma-ng-html2js-preprocessor"
    ],
    ngHtml2JsPreprocessor: {
        cacheIdFromPath : function(filepath) {
            var newPath = filepath.substr(filepath.indexOf("/app/")+5);
            console.log("========================================================> "+newPath);
            return newPath;
        },
        moduleName: 'templates'
    },
    preprocessors: {
        'test/**/*.js' : ['browserify'],
        '../app/bower_components/**/*.js' : ['browserify'],
        '../app/scripts/**/*.html' : ['ng-html2js']          
    },
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,
      
    reporters: ['spec'],
    specReporter: {
        suppressErrorSummary: false,
        suppressFailed: false, 
        suppressPassed: false,
        suppressSkipped: false
    },

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
console.log(__dirname + " " + __filename);