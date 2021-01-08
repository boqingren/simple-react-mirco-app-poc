"use strict";

const path = require("path");
const fs = require("fs");
const getPublicUrlOrPath = require("react-dev-utils/getPublicUrlOrPath");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const appPackageJsonPath = resolveApp("package.json")
const packageJson = require(appPackageJsonPath);

const isDev = process.env.NODE_ENV === "development";
const publicUrlOrPath = getPublicUrlOrPath(isDev, packageJson.homepage, process.env.PUBLIC_URL);

const moduleFileExtensions = ["web.mjs", "mjs", "web.js", "js", "web.ts", "ts", "web.tsx", "tsx", "json", "web.jsx", "jsx"];
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension => fs.existsSync(resolveFn(`${filePath}.${extension}`)));
  if (extension) return resolveFn(`${filePath}.${extension}`);
  return resolveFn(`${filePath}.js`);
};

module.exports = {
  appPackageJson: appPackageJsonPath,
  dotenv: resolveApp(".env"),
  appPath: resolveApp("."),
  appBuild: resolveApp("build/default"),
  appPublic: resolveApp(`${packageJson.name}-common/public`),
  appHtml: resolveApp(`${packageJson.name}-common/public/index.html`),
  appIndexJs: resolveModule(resolveApp, `${packageJson.name}-main/index`),
  appSrc: resolveApp("."),
  appTsConfig: resolveApp("tsconfig.json"),
  appJsConfig: resolveApp("jsconfig.json"),
  yarnLockFile: resolveApp("yarn.lock"),
  appNodeModules: resolveApp("node_modules"),
  publicUrlOrPath
};

module.exports.moduleFileExtensions = moduleFileExtensions;
