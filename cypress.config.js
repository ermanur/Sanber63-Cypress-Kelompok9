const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    urlProd: 'www.prod.com',
    env:{
      userstg: "user stg",
      userprod: "user prod"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 650,
    viewportWidth: 950,
    defaultCommandTimeout: 4500,
    screenshotOnRunFailure: false
  },
});
