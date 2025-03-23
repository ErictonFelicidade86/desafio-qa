const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3010',
    baseUrlName:'https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01',
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
    screenshotOnRunFailure: true,
    video: true
  },
});
