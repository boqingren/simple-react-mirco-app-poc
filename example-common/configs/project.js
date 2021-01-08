const path = require("path");
const packageJson = require("../../package.json");
const rootLevel = "../..";

module.exports = {
  name: packageJson.name,
  microInfos: {
    app1: {
      microName: "app1",
      appEntryPath: path.resolve(__dirname, `${rootLevel}/${packageJson.name}-app1/index.js`),
      appOutputPath: path.resolve(__dirname, `${rootLevel}/build/app1`)
    },
    app2: {
      microName: "app2",
      appEntryPath: path.resolve(__dirname, `${rootLevel}/${packageJson.name}-app2/index.js`),
      appOutputPath: path.resolve(__dirname, `${rootLevel}/build/app2`)
    }
  }
};