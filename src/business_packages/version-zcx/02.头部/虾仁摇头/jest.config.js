// jest.config.js
const { pathsToModuleNameMapper } = require("ts-jest");
const fs = require("fs");
const path = require("path");

// 👇 改为读取 tsconfig.test.json（和你当前逻辑一致）
const tsConfigPath = path.resolve(__dirname, "./tsconfig.test.json");
const stripJsonComments = require("strip-json-comments");
const tsConfigRaw = fs.readFileSync(tsConfigPath, "utf8");
const tsConfig = JSON.parse(stripJsonComments(tsConfigRaw));

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  // 👇 关键：告诉 ts-jest 使用 tsconfig.test.json
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: tsConfigPath, // ✅ 指向正确的 tsconfig
      },
    ],
  },

  moduleNameMapper: pathsToModuleNameMapper(
    tsConfig.compilerOptions.paths || {},
    {
      prefix: "<rootDir>/",
    },
  ),
};
