module.exports = {
  'should work site': function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('#app', 5000)
      .pause(4000)
      .end()
  }
}
