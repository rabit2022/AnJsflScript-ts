console.stack = function(message = 'Stack trace', options = {}) {
    const defaultOptions = {
        includeSource: false,
        includeArgs: false,
        depth: 5,
        skipSelf: true,
        format: 'table' // 'table', 'list', 'json'
    };

    const opts = { ...defaultOptions, ...options };

    try {
        const error = new Error(message);
        const frames = ErrorStackParser.parse(error);

        let filteredFrames = opts.skipSelf
            ? frames.filter(f => !f.functionName?.includes('console.stack'))
            : frames;

        if (opts.depth) {
            filteredFrames = filteredFrames.slice(0, opts.depth);
        }

        // 清理不需要的属性
        const cleanedFrames = filteredFrames.map(frame => {
            const { functionName, fileName, lineNumber, columnNumber, source, args } = frame;
            const result = {
                function: functionName || '(anonymous)',
                file: fileName || '(unknown)',
                line: lineNumber,
                column: columnNumber
            };

            if (opts.includeSource && source) result.source = source;
            if (opts.includeArgs && args) result.args = args;

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

        return cleanedFrames;
    } catch (err) {
        console.warn('Failed to parse stack trace:', err);
        console.trace(); // 回退到原生trace
    }
};