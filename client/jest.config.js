module.exports ={
  moduleNameMapper: {
    "\\.less$": "identity-obj-proxy",
  },
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.ts",
  testPathDirs: ["./src"],
  collectCoverage:true
};