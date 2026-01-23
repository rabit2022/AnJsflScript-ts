/*
修改模块名字
建立模块名字变量：MODULE_NAME，在当前文件中手动修改
1.确定PROJECT路径，向上查找，有package.json的位置
2.修改PROJECT/package.json的"name"字段为MODULE_NAME
3.PROJECT/webpack.config.js中查找以下内容
// region MODULE_NAME
const MODULE_NAME = "fs";
// endregion MODULE_NAME

region中间的部分，正则匹配到，修改为正确的MODULE_NAME
 */


import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ========== 配置区 ==========
const MODULE_NAME = "tween"; // ←←← 手动修改这里！
// ==========================

// 获取当前脚本所在目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 向上查找 package.json
function findProjectRoot(dir) {
    const pkgPath = path.join(dir, "package.json");
    if (fs.existsSync(pkgPath)) {
        return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
        throw new Error("未找到 package.json，无法确定项目根目录");
    }
    return findProjectRoot(parent);
}

const PROJECT_ROOT = findProjectRoot(__dirname);
console.log(`项目根目录: ${PROJECT_ROOT}`);

// 1. 修改 package.json 的 name 字段
const pkgPath = path.join(PROJECT_ROOT, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
pkg.name = MODULE_NAME;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
console.log(`✅ package.json 的 "name" 已更新为: ${MODULE_NAME}`);

// 2. 修改 webpack.config.js 中的 MODULE_NAME 区域
const webpackPath = path.join(PROJECT_ROOT, "webpack.config.js");
if (!fs.existsSync(webpackPath)) {
    console.warn("⚠️ webpack.config.js 不存在，跳过修改");
} else {
    let content = fs.readFileSync(webpackPath, "utf8");

    // 使用正则匹配 // region MODULE_NAME ... // endregion MODULE_NAME 之间的内容
    const regionRegex = /(\/\/ region MODULE_NAME\s*const MODULE_NAME\s*=\s*["'][^"']*["'];\s*\/\/ endregion MODULE_NAME)/gs;

    if (!regionRegex.test(content)) {
        console.error("❌ 未在 webpack.config.js 中找到指定的 MODULE_NAME region 注释块");
    } else {
        const replacement = `// region MODULE_NAME\nconst MODULE_NAME = "${MODULE_NAME}";\n// endregion MODULE_NAME`;
        content = content.replace(regionRegex, replacement);
        fs.writeFileSync(webpackPath, content, "utf8");
        console.log(`✅ webpack.config.js 中的 MODULE_NAME 已更新为: ${MODULE_NAME}`);
    }
}

console.log("✅ 模块名称更新完成！");