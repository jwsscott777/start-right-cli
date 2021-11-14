const welcome = require("cli-welcome");
const pkg = require("./../package.json");
const unhandled = require("cli-handle-unhandled");

module.exports = ({ clear = true }) => {
  unhandled();
  welcome({
    title: "start-right-cli",
    tagLine: "by Semajttocs.dev",
    description: pkg.description,
    version: pkg.version,
    bgColor: "#6cc24a",
    color: "#000000",
    bold: true,
    clear,
  });
};
