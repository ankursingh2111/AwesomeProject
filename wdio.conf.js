const path = require('path');

exports.config = {
  specs: [
    './__tests__/features/*.feature'
  ],
  exclude: [],
  maxInstances: 1,
  services: ['appium'],
  port: 4723,
  capabilities: [{
    maxInstances: 1,
    browserName: '',
    appiumVersion: '1.16.0',
    platformName: 'Android',
    platformVersion: '10.0',
    deviceName: 'Nexus 5X API 29 x86',
    app: path.resolve(__dirname, './android/app/build/outputs/apk/debug/app-debug.apk'),
    automationName: 'UiAutomator2'
  }],
  sync: true,
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './errorShots/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  cucumberOpts: {
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> module used for processing required features
    requireModule: ['@babel/register'],
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    require: [
        './__tests__/steps/*.js',
    ],
    // <string> specify a custom snippet syntax
    snippetSyntax: undefined,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
    tagExpression: 'not @Pending',
    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: false,
    // <number> timeout for step definitions
    timeout: 20000,
},
  
};