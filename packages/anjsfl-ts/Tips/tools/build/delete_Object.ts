/**
 * @file: delete_Object.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import { CUR_OUT } from "../ProjectFileDir";

`
在第一个加载，并且没有导入es5shim的权宜之计

1.获取CUR_OUT文件夹下的所有jsfl文件
2.注释掉以下代码
Object.defineProperty(exports, "__esModule", ({ value: true }));

`;

import * as fs from "fs";
import * as path from "path";

// 配置项
// const TARGET_DIR = path.join(__dirname, 'CUR_OUT');
const TARGET_DIR = CUR_OUT;
const TARGET_EXTENSION = ".jsfl";
const CODE_TO_COMMENT =
    'Object.defineProperty(exports, "__esModule", ({ value: true }));';

/**
 * 递归获取目录下所有指定扩展名的文件路径
 * @param dir 当前目录路径
 * @param ext 目标扩展名 (例如 .jsfl)
 * @returns 包含所有匹配文件绝对路径的数组
 */
function getAllJsflFiles(dir: string, ext: string): string[] {
    let results: string[] = [];

    // 读取目录内容，withFileTypes: true 可以区分文件和文件夹而不需要额外 stat
    const list = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of list) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // 如果是文件夹，递归调用
            results = results.concat(getAllJsflFiles(fullPath, ext));
        } else if (entry.isFile() && entry.name.endsWith(ext)) {
            // 如果是文件且扩展名匹配
            results.push(fullPath);
        }
    }

    return results;
}

/**
 * 转义正则表达式特殊字符
 */
function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * 主处理函数
 */
function processFiles(): void {
    // 1. 检查根目录是否存在
    if (!fs.existsSync(TARGET_DIR)) {
        console.error(`错误: 找不到文件夹 "${TARGET_DIR}"`);
        return;
    }

    console.log(`开始扫描目录: ${TARGET_DIR} (包含子文件夹)...`);

    // 2. 获取所有 .jsfl 文件 (递归)
    const jsflFiles = getAllJsflFiles(TARGET_DIR, TARGET_EXTENSION);

    if (jsflFiles.length === 0) {
        console.log(
            `未在 "${TARGET_DIR}" 及其子文件夹中找到任何 .${TARGET_EXTENSION} 文件。`
        );
        return;
    }

    console.log(`找到 ${jsflFiles.length} 个 .jsfl 文件，开始处理...\n`);

    let modifiedCount = 0;
    let skipCount = 0;

    for (const filePath of jsflFiles) {
        // 获取相对路径用于日志显示，看起来更整洁
        const relativePath = path.relative(TARGET_DIR, filePath);

        try {
            // 读取文件内容
            let content = fs.readFileSync(filePath, "utf-8");

            // 检查是否包含目标代码
            if (content.includes(CODE_TO_COMMENT)) {
                // 构建正则：匹配行首空白符 + 目标代码
                // ^ 匹配行开始，(\s*) 捕获缩进，随后是转义后的目标代码
                const regex = new RegExp(`^(\\s*)${escapeRegExp(CODE_TO_COMMENT)}`, "gm");

                const newContent = content.replace(regex, (match, whitespace) => {
                    return `${whitespace}// ${CODE_TO_COMMENT}`;
                });

                // 只有当内容确实发生变化时才写入
                if (newContent !== content) {
                    fs.writeFileSync(filePath, newContent, "utf-8");
                    console.log(`[已修改] ${relativePath}`);
                    modifiedCount++;
                } else {
                    // 包含了字符串但没匹配到行结构（可能已经被注释了，或者格式不对）
                    console.log(
                        `[跳过] ${relativePath} (包含文本但未匹配到独立行，或已被注释)`
                    );
                    skipCount++;
                }
            } else {
                // 完全不包含该字符串
                // console.log(`[忽略] ${relativePath} (无目标代码)`);
            }
        } catch (err) {
            console.error(`[错误] 处理文件 ${relativePath} 时失败:`, err);
        }
    }

    console.log(`\n----------------------------------------`);
    console.log(`处理完成！`);
    console.log(`总共扫描: ${jsflFiles.length} 个文件`);
    console.log(`成功修改: ${modifiedCount} 个文件`);
    console.log(`跳过/无需修改: ${skipCount} 个文件`);
}

// 执行脚本
processFiles();
