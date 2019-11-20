/**
 * More configuration here: http://webdriver.io/guide/testrunner/configurationfile.html
 */
exports.config = {
  specs: [
    'test/features/**/*.feature',
  ],
  port: 9515,
  path: '/',
  capabilities: [{
    browserName: 'chrome',
    "goog:chromeOptions": {
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
  screenshotPath: 'test/screenshots',
  baseUrl: 'https://github.com/DevSide/cucumber-chrome-headless-boilerplate',
  waitforTimeout: 10000,
  services: ['chromedriver'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: [
      'test/features/step_definitions/**/*.js',
    ],
    requireModule: [
      () => require(`@babel/register`)({
        presets: [
          [
            `@babel/preset-env`,
            {
              targets: {
                node: `current`,
              },
            },
          ],
        ],
      })
    ],
    backtrace: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    strict: true,
    timeout: 5000
  }
};
