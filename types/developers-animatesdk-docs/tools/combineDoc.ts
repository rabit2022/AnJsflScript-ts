// tools\combineDoc.ts

// ..\developers-animatesdk-docs-master\Document_object文件夹下的所有md文件
// 合并为一个，输出到当前文件夹


// tools/combineDoc.ts

import * as fs from 'fs';
import * as path from 'path';

// 配置路径
// const sourceDir = path.resolve(__dirname, '..', 'developers-animatesdk-docs-master', 'Document_object');
// const outputFile = path.resolve(__dirname, 'combined_document.md');
const sourceDir = path.resolve(__dirname, '..', 'developers-animatesdk-docs-master', 'flash_object_(fl)');
const outputFile = path.resolve(__dirname, 'combined_flash.md');



// 读取目录中的所有 .md 文件
function getMarkdownFiles(dir: string): string[] {
    return fs.readdirSync(dir)
        .filter(file => path.extname(file).toLowerCase() === '.md')
        .map(file => path.join(dir, file))
        .sort(); // 可选：按文件名排序以保证顺序一致
}

// 读取并合并内容
function combineMarkdownFiles(files: string[]): string {
    let combinedContent = '';
    files.forEach((filePath, index) => {
        const fileName = path.basename(filePath);
        const content = fs.readFileSync(filePath, 'utf-8');

        // 可选：在每个文件前加标题分隔符，便于区分来源
        if (index > 0) {
            combinedContent += '\n\n---\n\n'; // 分页线
        }
        combinedContent += `<!-- Source: ${fileName} -->\n\n`;
        combinedContent += content;
    });
    return combinedContent;
}

// 主函数
function main() {
    try {
        if (!fs.existsSync(sourceDir)) {
            console.error(`源目录不存在: ${sourceDir}`);
            process.exit(1);
        }

        const markdownFiles = getMarkdownFiles(sourceDir);
        if (markdownFiles.length === 0) {
            console.warn('未找到任何 .md 文件');
            return;
        }

        const combined = combineMarkdownFiles(markdownFiles);
        fs.writeFileSync(outputFile, combined, 'utf-8');
        console.log(`✅ 已成功合并 ${markdownFiles.length} 个文件到 ${outputFile}`);
    } catch (err) {
        console.error('❌ 合并过程中出错:', err);
        process.exit(1);
    }
}

// 执行
main();