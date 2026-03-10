/**
 * @file: 打开插件位置.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/9 23:17
 * @project: AnJsflScript-ts
 * @description:
 */

// 这个文件由脚本 @anjsfl\tools\打开插件位置.ts 自动生成，任何手动修改都将会被覆盖.

(function(){
require(["require", "_exports", "tslib", "child_process", "url", "process"], function (require, exports, tslib_1, child_process_1, url_1, process) {
    "use strict";
    process = tslib_1.__importStar(process);
    var PluginPath = AnJsflScript.folders.swf;
    PluginPath = (0, url_1.fileURLToPath)(PluginPath);
    try {
        if (process.platform === "win32") {
            (0, child_process_1.execSync)("explorer \"".concat(PluginPath, "\""));
        }
        else {
            throw new Error("Unsupported platform: ".concat(process.platform));
        }
        console.log("已打开插件文件夹");
    }
    catch (e) {
        console.error("无法自动打开插件文件夹", e);
    }
});

})();