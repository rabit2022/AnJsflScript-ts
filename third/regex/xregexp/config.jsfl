/**
 * @file: date-fns-config.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/7/7 21:54
 * @project: AnJsflScript
 * @description:
 */
/*
不能直接用xregexp.all.js文件，他是直接打包后，babel翻译
问题：导入了@babel/corejs3库，corejs对于jsfl支持不好


打包方式：
1. 生成es6以上语法的文件
module.exports = require("xregexp/src/index.js");
2. 复制到ts编译到es5，,减少helpers生成
这样不再导入@babel/corejs3库
3.修改/.../u的问题
查看xregexp.all.js，获取翻译的/.../u代码即可
4. 添加polyfill
Array.prototype.includes
*/
define(["es7-shim", "@third/xregexp"], function (_, XRegExp) {
    // Array.prototype.includes
    return XRegExp;
});