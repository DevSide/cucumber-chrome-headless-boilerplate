/**
 * More configuration here: http://webdriver.io/guide/testrunner/configurationfile.html
 */
exports.config = {
  specs: [
    'e2e/features/**/*.feature',
  ],
  port: 9515,
  path: '/',
  capabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      args: [
        'headless',
        'disable-gpu',
        'window-size=1366,768'
      ],
    },
  }],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  screenshotPath: 'e2e/screenshots',
  baseUrl: 'http://www.google.com',
  waitforTimeout: 10000,
  services: ['chromedriver'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: [
      'e2e/features/step_definitions/given.js',
      'e2e/features/step_definitions/then.js',
    ],
    backtrace: false,
    compiler: [
      'es6:@babel/register',
    ],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    strict: true,
    timeout: 5000
  }
};
