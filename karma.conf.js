module.exports = function (config) {
  config.set({
    frameworks: ["mocha"],
    files: ["test/**/*"],
    reporters: ["progress"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
  });
};
