import * as fs from 'fs';
import {Options} from "./types";
import {formatOutput} from "./stack";

// ====== 辅助方法（保持简单） ======
(console as any).clearErrors = () => {
    try {
        fs.existsSync('current-errors.json') && fs.unlinkSync('current-errors.json');
        fs.existsSync('all-errors.json') && fs.unlinkSync('all-errors.json');
        console.log('Error logs cleared.');
    } catch (e) {
        console.warn('Clear failed:', e);
    }
};

(console as any).getErrors = (all = false) => {
    const file = all ? 'all-errors.json' : 'current-errors.json';
    try {
        return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
    } catch (e) {
        console.warn(`Read ${file} failed:`, e);
        return null;
    }
};


// ====== 新增：console.history —— 用于重放保存的错误记录 ======
(console as any).history = function (userOptions: Options & { record?: any; records?: any[] } = {}) {
    const { record, records, ...formatOptions } = userOptions;

    // 默认读取 all-errors.json 如果没有指定 record(s)
    let targetRecords = records || (record ? [record] : null);
    if (!targetRecords) {
        const all = console.getErrors(true);
        targetRecords = Array.isArray(all) ? all : (all ? [all] : []);
    }

    if (targetRecords.length === 0) {
        console.log('No error history found.');
        return;
    }

    const defaults: Required<Options> = {
        includeSource: false,
        includeArgs: false,
        depth: 5,
        skipSelf: true,
        format: 'table',
        skipRequireJs: true,
        logToFile: false, // 不再写文件
    };
    const options = { ...defaults, ...formatOptions };

    targetRecords.forEach((rec: any, idx: number) => {
        if (!rec?.frames) return;

        // 可选：显示元信息
        console.log(`\n--- Error History Entry #${idx + 1} ---`);
        console.log(`Message: ${rec.message}`);
        console.log(`Timestamp: ${rec.timestamp}`);
        if (rec.count && rec.count > 1) console.log(`Repeated: ${rec.count} times`);

        // 使用与 console.stack 完全相同的格式化逻辑
        const outputStr = formatOutput(rec.frames, options.format);
        console.log(`Stack Trace (${options.format}):`);
        console.log(outputStr);
        console.log('----------------------------------------\n');
    });
};
