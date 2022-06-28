const runAll = require("npm-run-all");

runAll(["clean", "build.server", "build.client"], {
  parallel: false,
  printLabel: true,
  stdout: process.stdout,
}).then(() => {
  console.log("Done!");
});
