const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl: 'https://magento.softwaretestingboard.com/',
    browser: 'chrome',
    //specPattern: 'cypress/e2e/web-magento/create*.cy.js',
    specPattern: 'cypress/e2e/web-magento/**.cy.js',
    screenshotOnRunFailure: false,
    //chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 650,
    viewportWidth: 1000,
    defaultCommandTimeout: 5000,
  },
});
