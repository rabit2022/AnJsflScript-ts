import { readFile, writeFile } from "fs/promises";
import { basename } from "path";
import { pathToFileURL } from "url";
import { ScanSpec, walk } from "../nodejs/walk";
import { BUSINESS, BUSINESS_PACKAGES, LIB_CORE, PACKAGES } from "../ProjectFileDir";

// ✅ 统一管理要扫描的目录
const SCAN_DIRS = [LIB_CORE, BUSINESS, PACKAGES, BUSINESS_PACKAGES];

// 配置信息
const AUTHOR = "穹的兔兔";
const EMAIL = "3101829204@qq.com";
const PROJECT = "AnJsflScript-ts";

/**
 * 获取格式化日期：2025/1/30 14:24
 */
function getFormattedDate(): string {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    const h = now.getHours();
    const min = now.getMinutes().toString().padStart(2, "0");
    return `${y}/${m}/${d} ${h}:${min}`;
}

/**
 * 生成标准文件头
 */
function generateHeader(filename: string): string {
    const date = getFormattedDate();
    return `/**
 * @file: ${filename}
 * @author: ${AUTHOR}
 * @email: ${EMAIL}
 * @date: ${date}
 * @project: ${PROJECT}
 * @description:
 */

`;
}

/**
 * 检查文件是否已有 @file 注释
 */
async function hasFileHeader(filePath: string): Promise<boolean> {
    try {
        const content = await readFile(filePath, "utf8");
        return content.includes("@file:");
    } catch {
        return false;
    }
}

/**
 * 处理单个 .jsfl 文件
 */
export async function add_headers_to_file(filePath: string): Promise<boolean> {
    if (await hasFileHeader(filePath)) {
        console.log(`⏭️ 跳过（已存在文件头）: ${basename(filePath)}`);
        return false;
    }

    const filename = basename(filePath);
    const header = generateHeader(filename);
    const content = await readFile(filePath, "utf8");
    const newContent = header + content;

    await writeFile(filePath, newContent, "utf8");
    console.log(`✅ 已添加文件头: ${filename}`);
    return true;
}

/**
 * 递归获取目录下所有 .ts 文件
 */
async function getAllTsFiles(path: string): Promise<AsyncIterable<string>> {
    const spec: ScanSpec = {
        roots: [path],
        dirBlack: { part: ["node_modules"] },
        fileWhite: { part: [".ts"] }
    };
    return walk(spec);
}

/**
 * 合并多个 AsyncIterable
 */
async function* mergeAsyncIterables<T>(
    ...iterables: AsyncIterable<T>[]
): AsyncIterable<T> {
    for (const iterable of iterables) {
        for await (const item of iterable) {
            yield item;
        }
    }
}

// 主函数
async function main() {
    try {
        // ✅ 用 map 批量获取所有目录的文件流
        const fileStreams = await Promise.all(SCAN_DIRS.map((dir) => getAllTsFiles(dir)));

        // 合并所有流
        const allFiles = mergeAsyncIterables(...fileStreams);

        let total = 0;
        let processed = 0;

        for await (const filePath of allFiles) {
            total++;
            if (await add_headers_to_file(filePath)) {
                processed++;
            }
        }

        console.log(
            `\n🎉 完成！共找到 ${total} 个 .ts 文件，新增文件头 ${processed} 个。`
        );
    } catch (err) {
        console.error("❌ 扫描或处理过程中出错:", err);
        process.exit(1);
    }
}

// 直接运行
// @ts-ignore
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    main().catch(console.error);
}
