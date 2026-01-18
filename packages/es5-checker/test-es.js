// test-es.js
const fs = require('fs');
const path = require('path');

// 引入 index.js（自动运行所有 ES 特性测试）
const supports = require('./index.js');

// 可选：引入中文映射
let mapper;
try {
    mapper = require('./lib/mapper');
} catch (err) {
    console.warn('⚠️ 未找到 ./lib/mapper.js，跳过中文显示');
    mapper = {};
}

// 构建输出内容
let output = '=== ECMAScript 特性支持情况 ===\n';
for (const feature in supports) {
    if (feature === '_api') continue;
    output += `${feature}: ${supports[feature] ? '✅ 支持' : '❌ 不支持'}\n`;
}

output += '\n=== 中文版支持情况 ===\n';
for (const key in supports) {
    if (key === '_api') continue;
    const name = mapper[key]?.cn || key;
    output += `${name}: ${supports[key] ? '✅' : '❌'}\n`;
}

// 打印到控制台
console.log(output);

// 写入文件（例如 es-support-report.txt）
const reportPath = path.join(__dirname, 'es-support-report.txt');
fs.writeFileSync(reportPath, output, 'utf8');

console.log(`✅ 报告已保存到: ${reportPath}`);