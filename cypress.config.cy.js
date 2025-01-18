const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/customer/account/login',
    env: {
      userstg: "user staging"
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    viewportHeight: 650,
    viewportWidth: 1000,
    defaultCommandTimeout: 5000,
  },
});
