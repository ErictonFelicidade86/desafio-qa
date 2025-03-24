const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3010',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config);
      return config;
    },
    screenshotOnRunFailure: true,
    video: true
  },
});
