import {CUR_INDEXTS_FILE, PACKALLJS_FILE} from "../ProjectFileDir";

`
1.复制文件内容
PACKALLJS_FILE -> CUR_INDEXTS_FILE
2.开头添加内容
// @ts-nocheck
import "_exports";


`;



// tools/packAll/copyWithHeader.ts
import * as fs from 'fs';
import * as path from 'path';

// 配置常量
// const PACKALLJS_FILE = path.join(__dirname, '../../out/packAll.js');
// const CUR_INDEXTS_FILE = path.join(__dirname, '../../out/packAll.ts');

// 要添加的头部内容
const HEADER_CONTENT = `// @ts-nocheck
// import "_exports";

`;

/**
 * 复制文件并在开头添加内容
 * @param sourceFile 源文件路径
 * @param targetFile 目标文件路径
 * @param header 要添加的头部内容
 */
function copyFileWithHeader(
    sourceFile: string,
    targetFile: string,
    header: string
): void {
    try {
        // 1. 读取源文件内容
        const sourceContent = fs.readFileSync(sourceFile, 'utf-8');

        // 2. 拼接头部内容和源文件内容
        const newContent = header + sourceContent;

        // 3. 确保目标目录存在
        const targetDir = path.dirname(targetFile);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        // 4. 写入目标文件
        fs.writeFileSync(targetFile, newContent, 'utf-8');

        console.log(`✅ 文件复制成功: ${sourceFile} -> ${targetFile}`);
        console.log(`📝 已添加头部内容 (${header.split('\n').length} 行)`);

    } catch (error) {
        console.error('❌ 文件操作失败:', error);
        throw error;
    }
}

/**
 * 异步版本
 */
async function copyFileWithHeaderAsync(
    sourceFile: string,
    targetFile: string,
    header: string
): Promise<void> {
    try {
        const sourceContent = await fs.promises.readFile(sourceFile, 'utf-8');
        const newContent = header + sourceContent;

        const targetDir = path.dirname(targetFile);
        if (!fs.existsSync(targetDir)) {
            await fs.promises.mkdir(targetDir, { recursive: true });
        }

        await fs.promises.writeFile(targetFile, newContent, 'utf-8');

        console.log(`✅ 文件复制成功: ${sourceFile} -> ${targetFile}`);

    } catch (error) {
        console.error('❌ 文件操作失败:', error);
        throw error;
    }
}

// 执行
copyFileWithHeader(PACKALLJS_FILE, CUR_INDEXTS_FILE, HEADER_CONTENT);