const webTargets = {
    edge: "17",
    firefox: "60",
    chrome: "67",
    safari: "11.1"
};
const electronTargets = {
    electron: "2",
}


const presets = [
    ["@babel/env", {
      targets: process.env.APP_TARGET === 'WEB' ? webTargets : electronTargets,
      useBuiltIns: "usage"
    }]
  ];
  
  module.exports = { presets };