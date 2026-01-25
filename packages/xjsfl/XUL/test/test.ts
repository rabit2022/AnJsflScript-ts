import * as path from 'path-browserify';

// 如果你知道绝对路径
const basePath = 'H:/project/js/AnJsflScript-ts/packages/xjsfl/XUL/test';
const cwd=basePath;
// var cwd = process.cwd();
console.log(cwd);
var parentDir =  path.dirname(cwd);
console.log("full_template",parentDir);
// var full_template = path.join(parentDir, pathOrName);
// console.log("full_template",full_template);
// console.log(full_template);