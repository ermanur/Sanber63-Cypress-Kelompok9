const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 650,
    viewportWidth: 1000,
    defaultCommandTimeout: 6000,
  },
);
