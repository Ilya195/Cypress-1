const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
  viewportWidth: 1024,
  viewportHeight: 768,
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
    },
  },
});