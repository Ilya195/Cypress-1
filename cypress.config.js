const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: require("./webpack.config"),
    },
    
  },

  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      
    },
  },
  
  "retries":{
    "runMode": 2,
    "openMode": 0,
  }
  
});