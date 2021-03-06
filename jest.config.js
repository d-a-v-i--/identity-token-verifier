module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "/test/.*\\.test\\.ts$",
  testRunner: "jest-circus/runner",
  testTimeout: 1000,
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    "^jose/(.*)$": "<rootDir>/node_modules/jose/dist/node/cjs/$1",
  },
};
