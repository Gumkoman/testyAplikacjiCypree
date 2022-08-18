const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'exp5j3', 
  env: {
    MAILOSAUR_SERVERID: "3e3fvc7i",
    MAILOSAUR_PASSWORD: "6Lu3sg6ghxcjXp3b",
    MAILOSAUR_API_KEY: "tWWpfw6XQIU5Arg2",
    MAILOSAUR_API: "https://mailosaur.com/api",
    MAILOSAUR_SERVERNAME: "MailTesting"
    // experimentalSessionAndOrigin: true

  },
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      chromeWebSecurity: false;
      experimentalSessionAndOrigin: true
    },
  },
});
