// 这个文件由脚本 01.虾仁摇头\jest.config.ts 自动生成，任何手动修改都将会被覆盖.

"use strict";
var pathsToModuleNameMapper = require('ts-jest').pathsToModuleNameMapper;
var fs = require('fs');
var path = require('path');
var tsConfigPath = path.resolve(__dirname, './tsconfig.test.json');
var stripJsonComments = require('strip-json-comments');
var tsConfigRaw = fs.readFileSync(tsConfigPath, 'utf8');
var tsConfig = JSON.parse(stripJsonComments(tsConfigRaw));
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: tsConfigPath,
            },
        ],
    },
    moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths || {}, {
        prefix: '<rootDir>/',
    }),
};
