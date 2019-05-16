module.exports ={
  moduleNameMapper: {
    "\\.less$": "identity-obj-proxy",
  },
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.ts",
  snapshotSerializers: ["jest-serializer-html"],
  testPathDirs: ["./src"],
  collectCoverage:true
};