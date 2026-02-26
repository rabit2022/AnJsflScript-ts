/**
 * @file: init_tsconfig_types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import { CURRENT_PROJECT, TS_CONFIG, TS_CONFIG_TEST } from "../ProjectFileDir";

`

修改模块名字
1.确定PROJECT路径，向上查找，有package.json的位置
    确定PROJECT/tsconfig.json,PROJECT/tsconfig.test.json位置
2.确定$ProjectFileDir$路径，向上查找，有.git目录的位置
    确定$ProjectFileDir$/types位置

3.两个tsconfig.json中查找以下内容
// region TYPES
    // jsfl
    "../../../types/jsfl/types/**/*.d.ts",
    // 全局的 类型定义文件
    "../../../types/myShim/*.d.ts"
// endregion TYPES

region中间的部分，正则匹配到，修改为正确的路径

"../../../types/jsfl/types/**/*.d.ts",是PROJECT相对于$ProjectFileDir$/types的相对位置

`;


import path from "path";
import fs from "fs/promises";
import {findNearestPackageJson, findRepoRoot} from "../nodejs/findPackage"; // 假设上述代码已导出函数

/**
 * 任务：自动修改 tsconfig 中的类型声明路径
 */
export async function fixTsConfigPaths() {
    try {
        // 1. 确定 PROJECT 路径 (基于 package.json)
        // const projectResult = findNearestPackageJson(process.cwd());
        // if (!projectResult) {
        //     throw new Error("未找到 package.json，无法确定项目根目录");
        // }
        const PROJECT_DIR = CURRENT_PROJECT;
        console.log(`✅ 项目根目录 (PROJECT): ${PROJECT_DIR}`);

        // 2. 确定 $ProjectFileDir$ 路径 (基于 .git 目录)
        const REPO_ROOT = findRepoRoot(process.cwd());
        const TYPES_DIR = path.join(REPO_ROOT, "types");
        console.log(`✅ 类型定义目录: ${TYPES_DIR}`);

        // 3. 计算相对路径
        // 注释要求： "../../../types/jsfl/types/**/*.d.ts"
        // 含义是 PROJECT 相对于 $ProjectFileDir$/types 的相对位置
        const relativeToTypes = path.relative(PROJECT_DIR, REPO_ROOT);
        // 标准化路径分隔符并构建 glob 模式
        const normalizedRelative = relativeToTypes.replace(/\\/g, "/");
        const jsflPath = `${normalizedRelative}/types/jsfl/types/**/*.d.ts`;
        const shimPath = `${normalizedRelative}/types/myShim/*.d.ts`;

        console.log(`🔗 计算出的 JSFL 路径: ${jsflPath}`);
        console.log(`🔗 计算出的 Shim 路径: ${shimPath}`);

        // 4. 定义要修改的文件列表
        const configFiles = [TS_CONFIG,TS_CONFIG_TEST];
        // console.log(`🔗 configFiles: ${JSON.stringify(configFiles)}`);

        // 正则表达式：匹配 // region TYPES 和 // endregion TYPES 之间的内容
        // const regionRegex = /(\/\/\s*region\s*TYPES\s*[\r\n])([\s\S]*?)(\/\/\s*endregion\s*TYPES)/;
        const regionRegex = /(\/\/\s*region\s*TYPES)(?:\s*[\r\n]+)([\s\S]*?)(\/\/\s*endregion\s*TYPES)/;

        for (const filePath of configFiles) {
            try {
                console.log(`process filePath: ${filePath}`);


                await fs.access(filePath); // 检查文件是否存在
                let content = await fs.readFile(filePath, "utf-8");

                const newContent = content.replace(
                    regionRegex,
                    `$1
    // jsfl
    "${jsflPath}",
    // 全局的 类型定义文件
    "${shimPath}"
$3`
                );

                if (content !== newContent) {
                    await fs.writeFile(filePath, newContent, "utf-8");
                    console.log(`📝 已更新文件: ${filePath}`);
                } else {
                    console.log(`⏭️ 无需更新 (内容一致): ${filePath}`);
                }
            } catch (err: any) {
                if (err.code === "ENOENT") {
                    console.warn(`⚠️ 跳过不存在的文件: ${filePath}`);
                } else {
                    console.error(`❌ 修改文件失败 ${filePath}:`, err.message);
                }
            }
        }
    } catch (error) {
        console.error("执行任务时发生错误:", error);
    }
}

if (require.main === module) {
    (async () => {
        await fixTsConfigPaths();

    })();
}