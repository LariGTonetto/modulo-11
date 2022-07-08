const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ci7qqi",
  e2e: {
   baseUrl: "http://lojaebac.ebaconline.art.br/"
  },
});