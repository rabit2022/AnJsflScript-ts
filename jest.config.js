const { createDefaultPreset, pathsToModuleNameMapper } = require("ts-jest");
const fs = require('fs');
const stripJsonComments = require('strip-json-comments');

const tsJestTransformCfg = createDefaultPreset().transform;

// 安全读取带注释的 tsconfig.json
const tsConfigRaw = fs.readFileSync('./tsconfig.json', 'utf8');
const tsConfig = JSON.parse(stripJsonComments(tsConfigRaw));


/** @type {import("jest").Config} **/
module.exports = {
  preset: 'ts-jest', // 使用 TypeScript 编译器来处理 .ts 文件。
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  // // 如果你用到了 alert，需要 jsdom 环境
  // testEnvironment: 'jsdom',

  // 👇 关键：将 tsconfig.json 中的 paths 转为 Jest 能理解的 moduleNameMapper
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
};