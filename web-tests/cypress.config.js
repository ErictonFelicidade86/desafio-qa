const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fakerapi.it/api/v2/persons?_quantity=1&_gender=female&_birthday_start=2005-01-01',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshots: false,
    video: false
  },
});
