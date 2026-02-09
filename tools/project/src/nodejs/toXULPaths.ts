import fs from 'fs/promises';
import path from 'path';
import console from "node:console";
import {$ProjectFileDir$} from "../ProjectFileDir";

/**
 * Reads a modules.json file and returns module path mappings
 * Converts relative paths in JSON to absolute paths based on the JSON file's location
 * @param absoluteFile Absolute path to the modules.json file
 * @returns Promise with Record<string, string> mapping module names to absolute paths
 */
export async function toPackageModuleJsons(
    absoluteFile: string,
): Promise<Record<string, string>> {
    try {

        // 读取 JSON 文件内容
        const jsonContent = await fs.readFile(absoluteFile, 'utf-8');
        const moduleMappings = JSON.parse(jsonContent);

        // 转换相对路径为绝对路径
        const result: Record<string, string> = {};

        for (const [moduleName, relativePath] of Object.entries(moduleMappings)) {
            if (typeof relativePath === 'string') {
                // console.log(absoluteFile,relativePath)


// 1. 获取 absoluteFile 所在目录
                const dirOfAbsoluteFile = path.dirname(absoluteFile);

// 2. 计算该目录相对于 projectDir 的相对路径（注意：path.relative 是 from → to）
                const relDir = path.relative($ProjectFileDir$, dirOfAbsoluteFile);

// 3. 解析 relativePath（去掉 ./ 并标准化）
                const targetFile = path.posix.normalize(relativePath).replace(/^\.\//, '');

// 4. 拼接最终路径（使用反斜杠因为是 Windows 路径，但也可以用 path.join + replace）
                const modules_path = path.join(relDir, targetFile).replace(/\\/g, "/")

                // console.log(modules_path); // 输出: third\time\luxon\luxon.jsfl

                const modulePath = modules_path.replace(/\.jsfl$/, "");
                result[moduleName] = modulePath;
            }
        }

        return result;
    } catch (error) {
        console.error(`Error reading module mappings from ${absoluteFile}:`, error);
        return {};
    }
}

