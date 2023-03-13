const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    viewportWidth: 1280,
    viewportHeight: 720,
  },

  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
     
    },
  },
});