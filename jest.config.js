module.exports = {
  verbose: true,
  roots: ["<rootDir>/src/"],
  moduleFileExtensions: ["js", "ts", "tsx", "json", "node"],
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!(react-syntax-highlighter)/)",
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
  ],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "^~(.*)$": "<rootDir>/src/$1",
    "src/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(jpg|jpeg|png|gif|svg)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    "!./src/react-app-env.d.ts",
    "!./src/reportWebVitals.ts",
    "!./src/index.tsx",
    "!./src/App.tsx",
    "!./src/state/users/actionCreators.ts",
    "!./src/state/users/usersSlice.ts",
    "!./src/api/apiCommon.ts",
  ],
  coveragePathIgnorePatterns: [".stories.tsx", "src/assets"],
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
  moduleDirectories: ["node_modules", "src"],
  preset: "ts-jest/presets/js-with-ts",
};
