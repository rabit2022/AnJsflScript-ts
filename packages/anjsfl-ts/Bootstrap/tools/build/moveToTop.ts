/**
 * @file: moveToTop.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import { $ProjectFileDir$, CUR_OUT } from "../ProjectFileDir";

`
1.查找CUR_OUT下的jsfl文件，包含子文件夹
2.移动到$ProjectFileDir$目录下
CUR_OUT -> $ProjectFileDir$
`;

import * as fs from "fs";
import * as path from "path";

// 配置项
const CONFIG = {
    // 源目录：当前输出目录 (可以根据实际情况修改，或者通过命令行参数传入)
    SOURCE_DIR: CUR_OUT,
    // 目标目录：项目根目录 (即 $ProjectFileDir$)
    TARGET_DIR: $ProjectFileDir$,
    // 是否删除移动后为空的源文件夹
    CLEAN_EMPTY_DIRS: true
};

/**
 * 递归获取目录下所有匹配扩展名的文件路径
 */
function getAllFiles(
    dirPath: string,
    ext: string,
    arrayOfFiles: string[] = []
): string[] {
    if (!fs.existsSync(dirPath)) {
        return arrayOfFiles;
    }

    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            // 递归进入子文件夹
            arrayOfFiles = getAllFiles(fullPath, ext, arrayOfFiles);
        } else {
            // 检查扩展名
            if (path.extname(file).toLowerCase() === ext) {
                arrayOfFiles.push(fullPath);
            }
        }
    });

    return arrayOfFiles;
}

/**
 * 生成不冲突的文件名
 * 如果 target/file.jsfl 存在，则变为 target/file_1.jsfl, target/file_2.jsfl ...
 */
function getUniqueFilePath(targetDir: string, fileName: string): string {
    const targetPath = path.join(targetDir, fileName);

    if (!fs.existsSync(targetPath)) {
        return targetPath;
    }

    const ext = path.extname(fileName);
    const name = path.basename(fileName, ext);

    let counter = 1;
    let newPath;
    do {
        newPath = path.join(targetDir, `${name}_${counter}${ext}`);
        counter++;
    } while (fs.existsSync(newPath));

    return newPath;
}

/**
 * 递归删除空文件夹
 */
function removeEmptyDirs(dirPath: string, rootPath: string) {
    if (dirPath === rootPath) return; // 不要删除根目录

    const files = fs.readdirSync(dirPath);
    if (files.length === 0) {
        fs.rmdirSync(dirPath);
        console.log(`🗑️ 删除空目录: ${dirPath}`);

        // 继续检查父目录
        const parentDir = path.dirname(dirPath);
        if (parentDir !== rootPath) {
            removeEmptyDirs(parentDir, rootPath);
        }
    }
}

async function main() {
    console.log("🚀 开始执行 JSFL 文件迁移任务...");
    console.log(`📂 源目录: ${CONFIG.SOURCE_DIR}`);
    console.log(`📂 目标目录: ${CONFIG.TARGET_DIR}`);

    // 1. 检查源目录是否存在
    if (!fs.existsSync(CONFIG.SOURCE_DIR)) {
        console.error(`❌ 错误: 源目录不存在 - ${CONFIG.SOURCE_DIR}`);
        process.exit(1);
    }

    // 2. 查找所有 .jsfl 文件
    const jsflFiles = getAllFiles(CONFIG.SOURCE_DIR, ".jsfl");

    if (jsflFiles.length === 0) {
        console.log("✅ 未找到任何 .jsfl 文件。任务结束。");
        return;
    }

    console.log(`🔍 找到 ${jsflFiles.length} 个 .jsfl 文件:`);

    // 3. 执行移动
    let moveCount = 0;
    for (const filePath of jsflFiles) {
        const fileName = path.basename(filePath);
        // const finalTargetPath = getUniqueFilePath(CONFIG.TARGET_DIR, fileName);
        const finalTargetPath = path.join(CONFIG.TARGET_DIR, fileName);
        // console.log(filePath,finalTargetPath)

        try {
            if (fs.existsSync(finalTargetPath)) {
                fs.unlinkSync(finalTargetPath);
            }

            // 修正：使用 copy + unlink 确保跨卷/跨分区也能工作
            fs.copyFileSync(filePath, finalTargetPath);
            fs.unlinkSync(filePath);

            console.log(
                `   ✅ 移动: ${fileName} -> ${path.relative(CONFIG.TARGET_DIR, finalTargetPath)}`
            );
            moveCount++;
        } catch (error) {
            console.error(`   ❌ 移动失败 ${fileName}:`, error);
        }
    }

    // 4. 清理空目录 (可选)
    if (CONFIG.CLEAN_EMPTY_DIRS && moveCount > 0) {
        console.log("🧹 正在清理空目录...");
        removeEmptyDirs(CONFIG.SOURCE_DIR, CONFIG.SOURCE_DIR);
    }

    console.log(`\n🎉 完成！共移动 ${moveCount} 个文件。`);
}

// 运行
main().catch(console.error);
