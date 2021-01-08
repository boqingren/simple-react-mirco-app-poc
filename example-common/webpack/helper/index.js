const minimist = require('minimist');
const { project } = require("../../configs");

const getCLIArgvs = exports.getCLIArgvs = () => {
  try {
    const argv = minimist(process.argv.slice(2));
    return {
      micro: argv.m
    }
  } catch (error) {
    console.error("exception in initCLIArgvs, error:", error);
    return {};
  }
};

const getEntryPath = exports.getEntryPath = () => {
  try {
    const argv = getCLIArgvs();
    if (!argv.micro) return null;
    const result = project.microInfos[argv.micro].appEntryPath;
    return result;
  } catch (error) {
    console.error("exception in getEntryPath, error:", error);
    return null;
  }
};

const getOutputPath = exports.getOutputPath = () => {
  try {
    const argv = getCLIArgvs();
    if (!argv.micro) return null;
    const result = project.microInfos[argv.micro].appOutputPath;
    return result;
  } catch (error) {
    console.error("exception in getOutputPath, error:", error);
    return null;
  }
};