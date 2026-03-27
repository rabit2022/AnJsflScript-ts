import {ScanSpec, walk} from "../nodejs/walk";
import {CUR_ASSETS} from "../ProjectFileDir";


const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');


// 处理函数
function convertJson5ToJson(filePath) {
    try {
        // 1. 读取文件内容 (UTF-8 编码)
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // 2. 使用 JSON5 解析内容
        const jsonObj = JSON5.parse(fileContent);

        // 3. 生成输出路径 (将 .json5 后缀改为 .json)
        const outputFilePath = filePath.replace(/\.json5$/i, '.json');

        // 4. 将对象转换为标准 JSON 字符串 (2个空格缩进，美观易读)
        const jsonString = JSON.stringify(jsonObj, null, 2);

        // 5. 写入文件
        fs.writeFileSync(outputFilePath, jsonString, 'utf8');

        console.log(`✅ 成功生成: ${outputFilePath}`);

    } catch (error) {
        console.error(`❌ 处理文件失败 ${filePath}:`, error.message);
    }
}


// // 定义输入文件路径
// const inputFiles = [
//     'H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\assets\\templates\\json\\DIALOG.json5',
//     'H:\\project\\js\\AnJsflScript-ts\\packages\\xjsfl\\XUL_NEW\\assets\\templates\\json\\Templates.json5'
// ];
//
// // 遍历并处理所有文件
// inputFiles.forEach(file => {
//     // 检查文件是否存在
//     if (fs.existsSync(file)) {
//         convertJson5ToJson(file);
//     } else {
//         console.warn(`⚠️ 文件不存在: ${file}`);
//     }
// });
//
// console.log('🚀 所有任务处理完毕。');


/* ---------- 示例 ---------- */
if (require.main === module) {
    (async () => {
        const cfg: ScanSpec = {
            roots: [String.raw`${CUR_ASSETS}`],
            dirBlack: {
                full: ["__pycache__"],
                part: ["cache"],
                wc: ["*cache*"]
            },
            fileWhite: {part: [".json5"]},
            fileBlack: {part: ["test"]}
        };

        for await (const file of walk(cfg)) {
            // console.log(p);
            // 检查文件是否存在
            if (fs.existsSync(file)) {
                convertJson5ToJson(file);
            } else {
                console.warn(`⚠️ 文件不存在: ${file}`);
            }
        }
        console.log('🚀 所有任务处理完毕。');


    })();
}
