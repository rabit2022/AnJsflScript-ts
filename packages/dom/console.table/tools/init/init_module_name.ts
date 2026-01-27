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
import {findNearestPackageJson} from "../lib/findPackage";



// // 获取当前脚本所在目录
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


export async function set_module_name(moduleName: string) {
// 1. 确定 PROJECT 路径 (基于 package.json)
    const projectResult = await findNearestPackageJson(process.cwd());
    if (!projectResult) {
        throw new Error("未找到 package.json，无法确定项目根目录");
    }
    const PROJECT_ROOT = projectResult.dir;
    console.log(`✅ 项目根目录 (PROJECT): ${PROJECT_ROOT}`);


// 1. 修改 package.json 的 name 字段
    const pkgPath = path.join(PROJECT_ROOT, "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    pkg.name = moduleName;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
    console.log(`✅ package.json 的 "name" 已更新为: ${moduleName}`);

// 2. 修改 webpack.config.js 中的 MODULE_NAME 区域
    const webpackPath = path.join(PROJECT_ROOT, "webpack.config.js");
    if (!fs.existsSync(webpackPath)) {
        console.warn("⚠️ webpack.config.js 不存在，跳过修改");
    } else {
        let content = fs.readFileSync(webpackPath, "utf8");

        // 使用正则匹配 // region MODULE_NAME ... // endregion MODULE_NAME 之间的内容
        const regionRegex =
            /(\/\/ region MODULE_NAME\s*const MODULE_NAME\s*=\s*["'][^"']*["'];\s*\/\/ endregion MODULE_NAME)/gs;

        if (!regionRegex.test(content)) {
            console.error("❌ 未在 webpack.config.js 中找到指定的 MODULE_NAME region 注释块");
        } else {
            const replacement = `// region MODULE_NAME\nconst MODULE_NAME = "${moduleName}";\n// endregion MODULE_NAME`;
            content = content.replace(regionRegex, replacement);
            fs.writeFileSync(webpackPath, content, "utf8");
            console.log(`✅ webpack.config.js 中的 MODULE_NAME 已更新为: ${moduleName}`);
        }
    }

    console.log("✅ 模块名称更新完成！");
}


if (require.main === module) {
    (async () => {
        // ========== 配置区 ==========
const MODULE_NAME = "your-new-module-name"; // ←←← 手动修改这里！
// ==========================
        await set_module_name(MODULE_NAME)

    })();
}