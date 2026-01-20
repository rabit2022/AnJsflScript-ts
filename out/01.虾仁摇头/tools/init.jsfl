// 这个文件由脚本 01.虾仁摇头\tools\init.ts 自动生成，任何手动修改都将会被覆盖.

require(["require", "_exports", "fs", "path", "url"], function (require, exports, fs_1, path_1, url_1) {
    "use strict";
    var MODULE_NAME = "01.虾仁摇头";
    var __filename = (0, url_1.fileURLToPath)(import.meta.url);
    var __dirname = path_1.default.dirname(__filename);
    function findProjectRoot(dir) {
        var pkgPath = path_1.default.join(dir, "package.json");
        if (fs_1.default.existsSync(pkgPath)) {
            return dir;
        }
        var parent = path_1.default.dirname(dir);
        if (parent === dir) {
            throw new Error("未找到 package.json，无法确定项目根目录");
        }
        return findProjectRoot(parent);
    }
    var PROJECT_ROOT = findProjectRoot(__dirname);
    console.log("\u9879\u76EE\u6839\u76EE\u5F55: ".concat(PROJECT_ROOT));
    var pkgPath = path_1.default.join(PROJECT_ROOT, "package.json");
    var pkg = JSON.parse(fs_1.default.readFileSync(pkgPath, "utf8"));
    pkg.name = MODULE_NAME;
    fs_1.default.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
    console.log("\u2705 package.json \u7684 \"name\" \u5DF2\u66F4\u65B0\u4E3A: ".concat(MODULE_NAME));
    var webpackPath = path_1.default.join(PROJECT_ROOT, "webpack.config.js");
    if (!fs_1.default.existsSync(webpackPath)) {
        console.warn("⚠️ webpack.config.js 不存在，跳过修改");
    }
    else {
        var content = fs_1.default.readFileSync(webpackPath, "utf8");
        var regionRegex = /(\/\/ region MODULE_NAME\s*const MODULE_NAME\s*=\s*["'][^"']*["'];\s*\/\/ endregion MODULE_NAME)/gs;
        if (!regionRegex.test(content)) {
            console.error("❌ 未在 webpack.config.js 中找到指定的 MODULE_NAME region 注释块");
        }
        else {
            var replacement = "// region MODULE_NAME\nconst MODULE_NAME = \"".concat(MODULE_NAME, "\";\n// endregion MODULE_NAME");
            content = content.replace(regionRegex, replacement);
            fs_1.default.writeFileSync(webpackPath, content, "utf8");
            console.log("\u2705 webpack.config.js \u4E2D\u7684 MODULE_NAME \u5DF2\u66F4\u65B0\u4E3A: ".concat(MODULE_NAME));
        }
    }
    console.log("✅ 模块名称更新完成！");
});
