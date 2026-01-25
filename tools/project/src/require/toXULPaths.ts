import fs from 'fs/promises';
import path from 'path';

/**
 * Reads a modules.json file and returns module path mappings
 * Converts relative paths in JSON to absolute paths based on the JSON file's location
 * @param absoluteFile Absolute path to the modules.json file
 * @returns Promise with Record<string, string> mapping module names to absolute paths
 */
export async function toXULModulePaths(
    absoluteFile: string,
): Promise<Record<string, string>> {
    try {
        // 读取 JSON 文件内容
        const jsonContent = await fs.readFile(absoluteFile, 'utf-8');
        const moduleMappings = JSON.parse(jsonContent);

        // 获取 JSON 文件所在目录的绝对路径
        const jsonDir = path.dirname(absoluteFile);

        // 转换相对路径为绝对路径
        const result: Record<string, string> = {};

        for (const [moduleName, relativePath] of Object.entries(moduleMappings)) {
            if (typeof relativePath === 'string') {
                // // 构建绝对路径
                // const absolutePath = path.resolve(jsonDir, relativePath);
                // result[moduleName] = absolutePath;

                const modulePath = relativePath.replace(/\.jsfl$/, "");
                result[moduleName] = modulePath;
            }
        }

        return result;
    } catch (error) {
        console.error(`Error reading module mappings from ${absoluteFile}:`, error);
        return {};
    }
}

// 使用示例
async function main() {
    const jsonPath = 'H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL\\modules.json';
    const modulePaths = await toPackageModulePaths(jsonPath);

    console.log('Module Paths:', modulePaths);
    // 输出示例:
    // {
    //   "@xjsfl/XUL": "H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL\\src\\XUL.jsfl",
    //   "@xjsfl/XUL/XML": "H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL\\src\\XML.jsfl",
    //   ...
    // }

    return modulePaths;
}

if (require.main === module) {
    (async () => {
        await main()
    })();
}