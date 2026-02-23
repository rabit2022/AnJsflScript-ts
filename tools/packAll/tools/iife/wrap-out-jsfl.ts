// dist/*.jsfl


import {CUR_DIST, CUR_OUT} from "../ProjectFileDir";

const fs = require('fs');
const path = require('path');
const mm = require('micromatch');

// 检测文件是否已被 IIFE 包装
function isAlreadyWrapped(content) {
    const trimmed = content.trim();
    // 检查是否以 (function(){ 或 (function (){ 开头
    return trimmed.startsWith('(function(){') || trimmed.startsWith('(function (){');
}

// 获取 dist 目录下的所有文件
// const distDir = 'dist';
const distDir = CUR_OUT;
const allFiles = fs.readdirSync(distDir);

// 使用 micromatch 筛选所有 .jsfl 文件
const jsflFiles = mm.match(allFiles, '*.jsfl');

console.log(`Found ${jsflFiles.length} .jsfl file(s):`, jsflFiles);

let wrappedCount = 0;
let skippedCount = 0;

// 遍历处理每个 jsfl 文件
jsflFiles.forEach(file => {
    const input = path.join(distDir, file);
    const output = input;

    const code = fs.readFileSync(input, 'utf8');

    // 跳过已 wrap 的文件
    if (isAlreadyWrapped(code)) {
        console.log(`⊘ Skipped (already wrapped): ${file}`);
        skippedCount++;
        return;
    }

    const wrapped = `(function(){\n ${code}\n})();`;

    fs.writeFileSync(output, wrapped);
    console.log(`✓ Wrapped: ${file}`);
    wrappedCount++;
});

console.log(`\n✅ Done! Wrapped: ${wrappedCount}, Skipped: ${skippedCount}`);