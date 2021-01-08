const path = require('path');
const paths = require("../paths");
const packageJson = require("../../../package.json");

module.exports = {
  "react-native": "react-native-web",
  "@app1": path.resolve(paths.appSrc, `./${packageJson.name}-app1`),
  "@app2": path.resolve(paths.appSrc, `./${packageJson.name}-app2`),
  "@common": path.resolve(paths.appSrc, `./${packageJson.name}-common`),
  "@components": path.resolve(paths.appSrc, `./${packageJson.name}-common/components`),
  "@utils": path.resolve(paths.appSrc, `./${packageJson.name}-common/utils`)
};