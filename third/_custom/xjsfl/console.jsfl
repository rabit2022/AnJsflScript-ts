/**
 * @file: console.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/2/21 17:59
 * @project: AnJsflScript
 * @description:增强型控制台日志模块（兼容 JSFL）
 * @see: https://github.com/davestewart/xJSFL
 */


define(function () {
    // ========================================================================
    // 工具函数
    // ========================================================================

    /**
     * 左侧填充字符串（兼容 JSFL）
     */
    function padLeft(input, width, padChar) {
        padChar = padChar || '0';
        var str = String(input);
        while (str.length < width) str = padChar + str;
        return str;
    }

    /**
     * 将 URI 转为本地路径（处理 file:///H|/ → H:/）
     */
    function uriToPath(uri) {
        if (uri.indexOf("file:///") === 0) uri = uri.substring(8);
        if (uri.length >= 2 && uri.charAt(1) === '|') {
            uri = uri.charAt(0) + ':' + uri.substring(2);
        }
        return uri.replace(/\\/g, '/');
    }

    /**
     * 获取当前脚本相对于项目根目录的相对路径
     */
    function getCurrentScriptRelativePath() {
        try {
            var scriptURI = fl.scriptURI;
            var baseDir = window.AnJsflScript.$ProjectFileDir$;

            var scriptPath = uriToPath(scriptURI);
            var basePath = uriToPath(baseDir);

            if (basePath.charAt(basePath.length - 1) !== '/') basePath += '/';

            if (scriptPath.indexOf(basePath) !== 0) {
                fl.trace("⚠️ 脚本不在项目目录下");
                return scriptPath;
            }

            return scriptPath.substring(basePath.length);
        } catch (e) {
            return "unknown.jsfl";
        }
    }

    /**
     * 格式化消息（支持多参数）
     */
    function formatMessage(args) {
        return Array.prototype.slice.call(args).join(' ');
    }

    // ========================================================================
    // 日志配置
    // ========================================================================

    const trace = fl.trace;
    const LOG_FOLDER = window.AnJsflScript.FOLDERS.Log;
    const MAIN_LOG = LOG_FOLDER + "/main.log";
    const FILE_LOG = LOG_FOLDER + "/file.log";

    const Log = {
        TRACE: "TRACE",
        DEBUG: "DEBUG",
        LOG: "LOG",
        INFO: "INFO",
        WARN: "WARN",
        ERROR: "ERROR",
        FILE: "FILE"
    };

    // ========================================================================
    // 日志写入核心
    // ========================================================================

    /**
     * 写入日志到文件
     */
    function writeToLog(message, type, level) {
        // 参数标准化
        type = (typeof type === "string") ? type : Log.INFO;
        level = (typeof level === "number") ? level : (level === true ? 1 : 0);

        // 时间：YYYY-MM-DD HH:mm:ss.SSS
        var now = new Date();
        var asctime =
            now.getFullYear() + "-" +
            padLeft(now.getMonth() + 1, 2) + "-" +
            padLeft(now.getDate(), 2) + " " +
            padLeft(now.getHours(), 2) + ":" +
            padLeft(now.getMinutes(), 2) + ":" +
            padLeft(now.getSeconds(), 2) + "." +
            padLeft(now.getMilliseconds(), 3);

        // 日志级别（左对齐 8 字符）
        var levelname = (type || "INFO").toUpperCase();
        while (levelname.length < 8) levelname += " ";

        // 文件信息（JSFL 无法获取行号/函数名，使用占位）
        var short_path = getCurrentScriptRelativePath();
        // var lineno = "000";
        // var class_func = "[user]";

        // 构建日志行
        var logLine = asctime + " | " + levelname + " | " +
            short_path +
            // ":" +lineno + " | " +class_func +
            " | " + message;

        // 写入主日志
        FLfile.write(MAIN_LOG, logLine + "\n", "append");

        // 额外写入 file.log（仅当类型为 FILE）
        if (type === Log.FILE) {
            FLfile.write(FILE_LOG, logLine + "\n", "append");
        }
    }

    // ========================================================================
    // 计时器 & 计数器
    // ========================================================================

    const timers = {};
    const counters = {};

    // ========================================================================
    // Console 对象
    // ========================================================================

    var console = {
        trace: function () {
            var msg = formatMessage(arguments);
            trace("\n⚡admin TRACE ❯❯ " + msg + "\n");
            writeToLog(msg, Log.TRACE, 3);
        },

        debug: function () {
            var msg = formatMessage(arguments);
            trace("\n⚡admin DEBUG ❯❯ " + msg + "\n");
            writeToLog(msg, Log.DEBUG, 3);
        },

        log: function () {
            var msg = formatMessage(arguments);
            trace("\n⚡admin LOG ❯❯ " + msg + "\n");
            writeToLog(msg, Log.LOG, 3);
        },

        info: function () {
            var msg = formatMessage(arguments);
            trace("\n⚡admin INFO ❯❯ " + msg + "\n");
            writeToLog(msg, Log.INFO, 3);
        },

        warn: function () {
            var msg = formatMessage(arguments);
            trace("\n⚡admin WARNING ❯❯ " + msg + "\n");
            alert("WARNING ❯❯ " + msg + "\n");
            writeToLog(msg, Log.WARN, 3);
        },

        error: function () {
            var msg = formatMessage(arguments);
            trace("\n⚡admin ERROR ❯❯ " + msg + "\n");
            alert("⚡⚡⚡ ERROR ⚡⚡⚡ " + msg + "\n");
            writeToLog(msg, Log.ERROR, 3);
        },

        clear: function (type) {
            fl.output.clear();
            var name = (type === Log.FILE) ? "file" : "main";
            FLfile.remove(LOG_FOLDER + "/" + name + ".log");
            trace(name + ".log reset");
        },

        time: function (label) {
            label = label || "default";
            if (timers[label]) {
                this.warn('Timer "' + label + '" already exists.');
                return;
            }
            timers[label] = Date.now();
            this.info('Timer "' + label + '" started.');
        },

        timeEnd: function (label) {
            label = label || "default";
            if (!timers[label]) {
                this.warn('Timer "' + label + '" does not exist.');
                return;
            }
            var duration = Date.now() - timers[label];
            delete timers[label];
            this.info('Timer "' + label + '": ' + duration + 'ms');
        },

        count: function (label) {
            label = label || "default";
            counters[label] = (counters[label] || 0) + 1;
            this.info('"' + label + '" was called ' + counters[label] + ' times.');
        },

        countReset: function (label) {
            label = label || "default";
            if (counters[label] === undefined) {
                this.warn('Counter "' + label + '" does not exist.');
                return;
            }
            delete counters[label];
            this.info('Counter "' + label + '" has been reset.');
        },

        assert: function (expression, message) {
            if (!expression) {
                throw new Error(message || "Assertion failed");
            }
        }
    };

    window.console = console;
    return console;
});