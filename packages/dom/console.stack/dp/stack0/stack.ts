import * as fs from 'fs';
import * as ErrorStackParser from 'error-stack-parser';
import {tableToString} from 'console.table';
import {ConsoleStackFrame, Options, SaveData} from "./types"; // 👈 你明确要求使用的工具

// ====== 你辛苦写好的 buildCleanedFrames（完全保留！） ======
function buildCleanedFrames(
    frames: ErrorStackParser.StackFrame[],
    message: string,
    options: Options
): ConsoleStackFrame[] {
    // 过滤
    if (options.skipSelf) {
        frames = frames.filter(f => !f.functionName?.includes('console.stack'));
    }
    if (options.skipRequireJs) {
        frames = frames.filter(f => !f.fileName?.includes('requirejs'));
    }
    if (options.depth) {
        frames = frames.slice(0, options.depth);
    }
    return frames.map(frame => {
        const {functionName, fileName, lineNumber, source, args} = frame;
        return {
            functionName: functionName,
            fileName: fileName,
            lineNumber: lineNumber,
            timestamp: new Date().toISOString(),
            message: message,
            source: (options.includeSource && source) ? source : undefined,
            args: (options.includeArgs && args) ? args : undefined
        };
    });
}

// ====== 格式化函数（使用你的 cleanedFrames + tableToString） ======
export function formatOutput(frames: ConsoleStackFrame[], format: 'table' | 'list' | 'json'): string {
    switch (format) {
        case 'table':
            // 使用 console.table 的字符串化版本（你指定的）
            return tableToString(frames);
        case 'list':
            return frames.map((f, i) =>
                `${i + 1}. ${f.functionName || '<anonymous>'} (${f.fileName}:${f.lineNumber})`
            ).join('\n');
        case 'json':
            return JSON.stringify(frames, null, 2);
        default:
            return tableToString(frames);
    }
}

// ====== 主函数：console.stack ======
(console as any).stack = function (message = 'Stack trace', userOptions: Options = {}) {
    const defaults: Required<Options> = {
        includeSource: false,
        includeArgs: false,
        depth: 5,
        skipSelf: true,
        format: 'table',
        skipRequireJs: true,
        logToFile: true
    };

    const options = {...defaults, ...userOptions};

    try {
        const error = new Error(message);
        const rawFrames = ErrorStackParser.parse(error);
        const cleanedFrames = buildCleanedFrames(rawFrames, message, options);

        // 打印到控制台（使用你指定的格式）
        const outputStr = formatOutput(cleanedFrames, options.format);
        console.log(`Stack Trace (${options.format}):`);
        console.log(outputStr);

        // 保存到文件：始终保存完整结构（含元数据），JSON 格式
        if (options.logToFile) {
            const record = {
                id: Date.now(),
                timestamp: new Date().toISOString(),
                message,
                frames: cleanedFrames,
                count: 1
            };
            writeToFile(record);
        }

        // return cleanedFrames;
    } catch (err) {
        console.warn('Failed to capture stack:', err);
        // return [];
    }
};

function writeToFile(record:SaveData) {

    // current-errors.json（覆盖）
    fs.writeFileSync('current-errors.json', JSON.stringify(record, null, 2));

    // all-errors.json（追加/去重）
    let allRecords: typeof record[] = [];
    if (fs.existsSync('all-errors.json')) {
        try {
            allRecords = JSON.parse(fs.readFileSync('all-errors.json', 'utf8'));
        } catch (e) {
            console.warn('Failed to parse all-errors.json, resetting.');
        }
    }

    const existing = allRecords.find(r =>
        r.message === record.message &&
        JSON.stringify(r.frames) === JSON.stringify(record.frames)
    );

    if (existing) {
        existing.count++;
    } else {
        allRecords.push(record);
        if (allRecords.length > 1000) allRecords = allRecords.slice(-1000);
    }

    fs.writeFileSync('all-errors.json', JSON.stringify(allRecords, null, 2));

}
