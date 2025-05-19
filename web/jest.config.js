export default {
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/testes/**/*.js"
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg|gif|ico)$": "<rootDir>/testes/__mocks__/fileMock.js"
  },
  testPathIgnorePatterns: ["/__mocks__/"],
  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.js$"
  ]
};
