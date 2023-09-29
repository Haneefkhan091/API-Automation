const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
module.exports = defineConfig({
  projectId: "atv83f",
  watchForFileChanges: false,
  experimentalStudio: true,
  screenshotOnRunFailure: true,
  includeShadowDom: true,
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 100000,

  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
    },
  },
});
