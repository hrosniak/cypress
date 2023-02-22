const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://automationintesting.online/'
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  defaultCommandTimeout: 4000,
});
