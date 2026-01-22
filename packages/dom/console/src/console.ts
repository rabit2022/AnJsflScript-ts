/**
 * @file: console.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/2/21 17:59
 * @project: AnJsflScript
 * @description:增强型控制台日志模块（兼容 JSFL）
 * @see: https://github.com/davestewart/xJSFL
 */


// ========================================================================
// 环境常量
// ========================================================================

const trace = fl.trace;
const uriToPath = FLfile.uriToPlatformPath;

const LOG_FOLDER = AnJsflScript.FOLDERS.Log;
const MAIN_LOG = `${LOG_FOLDER}/main.log`;
const FILE_LOG = `${LOG_FOLDER}/file.log`;

// ========================================================================
// 常量定义
// ========================================================================

enum LogLevel {
    TRACE = "TRACE",
    DEBUG = "DEBUG",
    LOG = "LOG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    FILE = "FILE"
}

// ========================================================================
// 工具函数
// ========================================================================

/**
 * 左侧填充字符串（兼容 JSFL）
 */
function padLeft(input: any, width: number, padChar: String = '0') {
    // padChar = padChar || '0';
    var str = String(input);
    while (str.length < width) str = padChar + str;
    return str;
}

/**
 * 路径解析，类似 Node.js 的 path.resolve（私有函数）
 */
function pathResolve(target: string, base: string): string {
    try {
        var scriptPath = uriToPath(target);
        var basePath = uriToPath(base);


        // 非子目录
        if (scriptPath.indexOf(basePath) !== 0) {
            fl.trace(`⚠️ 脚本不在项目目录下,可能在事件循环中 ${scriptPath},${basePath}`);
            return scriptPath;
        }

        // 最后补充"/"
        if (basePath.charAt(basePath.length - 1) !== '/') basePath += '/';


        return scriptPath.substring(basePath.length);
    } catch (e) {
        return "unknown.jsfl";
    }
}


/**
 * 格式化消息（支持多参数）
 */
function formatMessage(args: IArguments): string {
    return Array.prototype.slice.call(args).join(' ');
}

/**
 * 写入日志到文件
 */
function writeToLog(message: string, type: string = LogLevel.INFO, level: number | boolean = 0): void {
    // 参数标准化
    const logType: string = typeof type === "string" ? type : LogLevel.INFO;
    const logLevel: number = typeof level === "number" ? level : (level === true ? 1 : 0);

    // 时间：YYYY-MM-DD HH:mm:ss.SSS
    const now = new Date();
    var asctime =
        now.getFullYear() + "-" +
        padLeft(now.getMonth() + 1, 2) + "-" +
        padLeft(now.getDate(), 2) + " " +
        padLeft(now.getHours(), 2) + ":" +
        padLeft(now.getMinutes(), 2) + ":" +
        padLeft(now.getSeconds(), 2) + "." +
        padLeft(now.getMilliseconds(), 3);


    // 日志级别（左对齐 8 字符）
    let levelname = (logType || "INFO").toUpperCase();
    while (levelname.length < 8) {
        levelname += " ";
    }

    // 文件信息（JSFL 无法获取行号/函数名，使用占位）
    // NOTE:fl.addEventListener注册的函数，调用打印时 fl.scriptURI = unknown
    var scriptURI = fl.scriptURI;
    var baseDir = AnJsflScript.$ProjectFileDir$;

    // fl.trace(scriptURI);
    // fl.trace(baseDir);

    const short_path = pathResolve(scriptURI, baseDir);

    // 构建日志行
    const logLine = `${asctime} | ${levelname} | ${short_path} | ${message}`;

    // 写入主日志
    FLfile.write(MAIN_LOG, logLine + "\n", "append");

    // 额外写入 file.log（仅当类型为 FILE）
    if (logType === LogLevel.FILE) {
        FLfile.write(FILE_LOG, logLine + "\n", "append");
    }
}

// ========================================================================
// Console 类
// ========================================================================

class EnhancedConsole {
    private timers: Record<string, number> = {};
    private counters: Record<string, number> = {};

    // ========================================================================
    // 日志方法
    // ========================================================================

    trace(...args: any[]): void {
        const msg = formatMessage(arguments);
        trace("\n⚡admin TRACE ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.TRACE, 3);
    }

    debug(...args: any[]): void {
        const msg = formatMessage(arguments);
        trace("\n⚡admin DEBUG ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.DEBUG, 3);
    }

    log(...args: any[]): void {
        const msg = formatMessage(arguments);
        trace("\n⚡admin LOG ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.LOG, 3);
    }

    info(...args: any[]): void {
        const msg = formatMessage(arguments);
        trace("\n⚡admin INFO ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.INFO, 3);
    }

    warn(...args: any[]): void {
        const msg = formatMessage(arguments);
        trace("\n⚡admin WARNING ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.WARN, 3);
    }

    error(...args: any[]): void {
        const msg = formatMessage(arguments);
        trace("\n⚡admin ERROR ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.ERROR, 3);
    }

    file(...args: any[]): void {
        const msg = formatMessage(arguments);
        writeToLog(msg, LogLevel.FILE);
    }

    clear(type?: string): void {
        // @ts-ignore
        fl.outputPanel.clear();
        const name = (type === LogLevel.FILE) ? "file" : "main";
        FLfile.remove(`${LOG_FOLDER}/${name}.log`);
        trace(name + ".log reset");
    }

    // ========================================================================
    // 计时器方法
    // ========================================================================

    time(label: string = "default"): void {
        if (this.timers[label]) {
            this.warn('Timer "' + label + '" already exists.');
            return;
        }
        this.timers[label] = Date.now();
        this.info('Timer "' + label + '" started.');
    }

    timeEnd(label: string = "default"): void {
        if (!this.timers[label]) {
            this.warn('Timer "' + label + '" does not exist.');
            return;
        }
        const duration = Date.now() - this.timers[label];
        delete this.timers[label];
        this.info('Timer "' + label + '": ' + duration + 'ms');
    }

    // ========================================================================
    // 计数器方法
    // ========================================================================

    count(label: string = "default"): void {
        this.counters[label] = (this.counters[label] || 0) + 1;
        this.info('"' + label + '" was called ' + this.counters[label] + ' times.');
    }

    countReset(label: string = "default"): void {
        if (this.counters[label] === undefined) {
            this.warn('Counter "' + label + '" does not exist.');
            return;
        }
        delete this.counters[label];
        this.info('Counter "' + label + '" has been reset.');
    }

    // ========================================================================
    // 断言方法
    // ========================================================================

    assert(expression: boolean, message?: string): void {
        if (!expression) {
            throw new Error(message || "Assertion failed");
        }
    }

    // ========================================================================
    // 工具方法
    // ========================================================================

    /**
     * 获取所有计时器
     */
    getTimers(): Record<string, number> {
        return {...this.timers};
    }

    /**
     * 获取所有计数器
     */
    getCounters(): Record<string, number> {
        return {...this.counters};
    }

    /**
     * 重置所有计时器和计数器
     */
    resetAll(): void {
        this.timers = {};
        this.counters = {};
        this.info("All timers and counters have been reset.");
    }
}

// ========================================================================
// 导出
// ========================================================================

// 创建单例实例
const console = new EnhancedConsole();

// 设置全局 console 对象
(window as any).console = console;

// 只导出 console 变量
export {console};