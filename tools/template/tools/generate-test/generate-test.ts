import { CURRENT_PROJECT } from "../ProjectFileDir";

`
生成文件，在以下目录
test/flash/jsfl/*.jsfl

// iife  file test1.jsfl
(function () {

})();


test/flash/require/*.jsfl

// requirejs modules file test1.jsfl
require([], function () {

});


test/flash/ts/*.ts

// flash TypeScript file test1.ts


test/nodejs/*.ts

// nodejs TypeScript file test1.ts


文件名字，test1,test2,检测当前已有的，生成按照顺序的文件名字
test1,test2    -->    test3
`;

import * as fs from "fs";
import * as path from "path";

/**
 * 1. 确保所有目标目录存在
 */
function ensureDirectories() {
    const directories = {
        flashJsfl: path.join(CURRENT_PROJECT, "test", "flash", "jsfl"),
        flashRequire: path.join(CURRENT_PROJECT, "test", "flash", "require"),
        flashTs: path.join(CURRENT_PROJECT, "test", "flash", "ts"),
        nodejs: path.join(CURRENT_PROJECT, "test", "nodejs")
    };

    Object.values(directories).forEach((dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    return directories;
}

/**
 * 2. 扫描目录，确定下一个文件的序号
 * @param directories 目录对象
 * @returns 下一个序号
 */
function determineNextIndex(directories: { [key: string]: string }): number {
    let maxIndex = 0;

    Object.values(directories).forEach((dir) => {
        try {
            if (fs.existsSync(dir)) {
                const files = fs.readdirSync(dir);
                files.forEach((file) => {
                    const match = file.match(/^test(\d+)\.(?:jsfl|js|ts)$/);
                    if (match) {
                        const num = parseInt(match[1], 10);
                        if (num > maxIndex) {
                            maxIndex = num;
                        }
                    }
                });
            }
        } catch (err) {
            console.warn(`无法读取目录:`, err);
        }
    });

    return maxIndex + 1;
}

/**
 * 3. 创建文件
 * @param filesToCreate 文件路径和内容的数组
 */
function createFiles(filesToCreate: Array<{ path: string; content: string }>) {
    filesToCreate.forEach(({ path: filePath, content }) => {
        try {
            fs.writeFileSync(filePath, content, "utf-8");
            console.log(`✅ 创建成功: ${filePath}`);
        } catch (err) {
            console.error(`❌ 创建失败 ${filePath}:`, err);
        }
    });
}

/**
 * 主函数
 */
function main() {
    console.log("开始生成文件...");

    // 步骤 1: 创建目录并获取路径
    const directories = ensureDirectories();

    // 步骤 2: 确定下一个序号
    const nextIndex = determineNextIndex(directories);
    const baseFilename = `test${nextIndex}`;

    console.log(`检测到最大序号: ${nextIndex - 1}, 即将生成: ${baseFilename}`);

    // 步骤 3: 定义文件内容
    const filesToCreate = [
        {
            path: path.join(directories.flashJsfl, `${baseFilename}.jsfl`),
            content: `// iife file ${baseFilename}.jsfl\n(function () {\n\n})();`
        },
        {
            path: path.join(directories.flashRequire, `${baseFilename}.jsfl`),
            content: `// requirejs modules file ${baseFilename}.js\nrequire([], function () {\n\n});`
        },
        {
            path: path.join(directories.flashTs, `${baseFilename}.ts`),
            content: `// flash TypeScript file ${baseFilename}.ts`
        },
        {
            path: path.join(directories.nodejs, `${baseFilename}.ts`),
            content: `// nodejs TypeScript file ${baseFilename}.ts`
        }
    ];

    // 步骤 4: 执行创建
    createFiles(filesToCreate);

    console.log(`\n🎉 所有文件生成完毕！`);
}

// 执行程序
main();
