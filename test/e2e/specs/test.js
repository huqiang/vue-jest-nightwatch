// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    // const devServer = browser.globals.devServerURL;
    // console.log(browser.launch_url);
    browser
      .url(browser.launch_url)
      .waitForElementVisible('#app', 5000)
      // .assert.elementPresent('.jpm-gym')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      // .assert.elementCount('.vuecal__event-title', 41)
      .end();
  }
};
