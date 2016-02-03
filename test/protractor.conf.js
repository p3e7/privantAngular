/**
 * Created by Hon on 04.01.2016.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    specs: ['e2e/**/*.js'],
    baseUrl: 'http://localhost:4444',
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
    }
};

console.log("===========> Protractor Conf was loaded!");
