import * as fs from 'fs';
import * as path from 'path';

// 错误记录文件路径
const ALL_ERRORS_FILE = 'all-errors.json';
const CURRENT_ERRORS_FILE = 'current-errors.json';

console.stack = function(message = 'Stack trace', options = {}) {
    const defaultOptions = {
        includeSource: false,
        includeArgs: false,
        depth: 5,
        skipSelf: true,
        format: 'table', // 'table', 'list', 'json'
        skipRequireJs: true,
        logToFile: true // 新增参数：是否记录到文件
    };

    const opts = {
        ...defaultOptions,
        ...options
    };

    try {
        const error = new Error(message);
        const frames = ErrorStackParser.parse(error);

        let filteredFrames = opts.skipSelf ?
            frames.filter(f => !f.functionName?.includes('console.stack')) :
            frames;

        filteredFrames = opts.skipRequireJs ?
            frames.filter(f => !f.fileName?.includes('requirejs')) :
            frames;

        if (opts.depth) {
            filteredFrames = filteredFrames.slice(0, opts.depth);
        }

        // 清理不需要的属性
        const cleanedFrames = filteredFrames.map(frame => {
            const {
                functionName,
                fileName,
                lineNumber,
                source,
                args
            } = frame;
            const result = {
                functionName: functionName,
                fileName: fileName,
                lineNumber: lineNumber,
                // columnNumber: columnNumber,
                timestamp: new Date().toISOString(), // 添加时间戳
                message: message, // 添加错误消息
                source: (opts.includeSource && source) ? source : undefined,
                args: (opts.includeArgs && args) ? args : undefined
            };


            return result;
        });

        // 根据格式输出
        switch (opts.format) {
            case 'table':
                console.table(cleanedFrames);
                break;
            case 'json':
                console.log(JSON.stringify(cleanedFrames, null, 2));
                break;
            case 'list':
            default:
                console.group('Stack Trace:');
                cleanedFrames.forEach((frame, i) => {
                    console.log(`${i + 1}. ${frame.function} (${frame.file}:${frame.line}:${frame.column})`);
                    if (frame.source) console.log(`   ↳ ${frame.source}`);
                });
                console.groupEnd();
        }

        // 新增：如果允许记录到文件，则保存错误信息
        if (opts.logToFile) {
            saveErrorToFiles(cleanedFrames, message);
        }

        return cleanedFrames;
    } catch (err) {
        console.warn('Failed to parse stack trace:', err);
        console.trace(); // 回退到原生trace
    }
};

/**
 * 保存错误信息到文件
 * @param frames 堆栈帧数组
 * @param message 错误消息
 */
function saveErrorToFiles(frames: any[], message: string): void {
    try {
        const errorRecord = {
            id: Date.now(), // 使用时间戳作为唯一ID
            timestamp: new Date().toISOString(),
            message: message,
            frames: frames,
            count: 1
        };

        // 1. 保存到当前错误文件（覆盖写入）
        fs.writeFileSync(CURRENT_ERRORS_FILE, JSON.stringify(errorRecord, null, 2), 'utf8');

        // 2. 保存到所有错误文件（追加到数组）
        let allErrors: any[] = [];

        // 如果文件已存在，读取现有错误
        if (fs.existsSync(ALL_ERRORS_FILE)) {
            try {
                const existingData = fs.readFileSync(ALL_ERRORS_FILE, 'utf8');
                allErrors = JSON.parse(existingData);

                // 检查是否已存在相同错误，如果存在则增加计数
                const existingErrorIndex = allErrors.findIndex(err =>
                    err.message === message &&
                    JSON.stringify(err.frames) === JSON.stringify(frames)
                );

                if (existingErrorIndex !== -1) {
                    // 更新现有错误计数和时间戳
                    allErrors[existingErrorIndex].count += 1;
                    allErrors[existingErrorIndex].lastOccurrence = new Date().toISOString();
                    errorRecord.count = allErrors[existingErrorIndex].count;
                } else {
                    // 添加新错误
                    allErrors.push(errorRecord);
                }
            } catch (readErr) {
                console.warn('Failed to read all errors file, creating new:', readErr);
                allErrors = [errorRecord];
            }
        } else {
            allErrors = [errorRecord];
        }

        // 限制错误记录数量（例如最多1000条）
        if (allErrors.length > 1000) {
            allErrors = allErrors.slice(-1000);
        }

        // 保存更新后的所有错误
        fs.writeFileSync(ALL_ERRORS_FILE, JSON.stringify(allErrors, null, 2), 'utf8');

        console.log(`Error logged to files: ${CURRENT_ERRORS_FILE}, ${ALL_ERRORS_FILE}`);

    } catch (fsErr) {
        console.warn('Failed to save error to files:', fsErr);
    }
}

/**
 * 清除错误记录文件
 * @param clearAll 是否清除所有错误文件（true: 清除所有，false: 只清除当前错误）
 */
console.clearErrors = function(clearAll = false): void {
    try {
        if (clearAll) {
            if (fs.existsSync(ALL_ERRORS_FILE)) {
                fs.unlinkSync(ALL_ERRORS_FILE);
                console.log('Cleared all errors file');
            }
        }

        if (fs.existsSync(CURRENT_ERRORS_FILE)) {
            fs.unlinkSync(CURRENT_ERRORS_FILE);
            console.log('Cleared current errors file');
        }
    } catch (err) {
        console.warn('Failed to clear error files:', err);
    }
};

/**
 * 读取错误记录
 * @param readAll 是否读取所有错误（true: 所有错误，false: 当前错误）
 */
console.getErrors = function(readAll = false): any {
    try {
        const filePath = readAll ? ALL_ERRORS_FILE : CURRENT_ERRORS_FILE;

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        }
        return null;
    } catch (err) {
        console.warn('Failed to read error files:', err);
        return null;
    }
};