const { defineConfig } = require("cypress")
const { allureCypress } = require("allure-cypress/reporter")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3010',
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
    screenshotOnRunFailure: true,
    video: true
  },
});
