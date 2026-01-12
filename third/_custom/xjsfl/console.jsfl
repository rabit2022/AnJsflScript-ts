/**
 * @file: console.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/2/21 17:59
 * @project: AnJsflScript
 * @description:
 * @see: https://github.com/davestewart/xJSFL
 */


define(function() {

    // --------------------------------------------------------------------------------
    // Log constants

    /**
     * @type {Object}    A selection of constants that can be used with xjsfl.output.log
     * @private
     */
    var Log = {
        // logged to main log, output panel, and an alert box
        TRACE: "TRACE",

        // debug
        DEBUG: "DEBUG",

        // log
        LOG: "LOG",

        // logged to main log
        INFO: "INFO",

        // logged to main log, output panel, and an alert box
        WARN: "WARN",

        // error
        ERROR: "ERROR",

        // logged to main log and file.log
        FILE: "FILE"
    };

    // --------------------------------------------------------------------------------
    // 常量
    const trace = fl.trace;
    const LOG_FOLDER = window.AnJsflScript.FOLDERS.Log;


    const MAIN_LOG = LOG_FOLDER + "/main.log";
    const FILE_LOG = LOG_FOLDER + "/file.log";

    function formatMessage() {
        // 把类数组 arguments 转成真数组，然后统一用空格拼接
        return Array.prototype.slice.call(arguments).join(' ');
    }

    // region file
    /**
     * Creates the text that will be traced or logged
     * @param    {String}    prefix        The message prefix
     * @param    {String}    message        The message to trace or log
     * @param    {Number}    level        An optional Number to accentuate the message. 1 = capitals, 2 = horizontal rule & capitals
     * @param    {Boolean}    addNewline    An optional Boolean to add a new line to the traced output
     * @returns    {String}                The created message
     * @private
     */
    function formatLine(prefix, message, level, addNewline) {
        // new line
        var newLine = fl.version.substr(0, 3).toLowerCase() === "win" ? "\r\n" : "\n";
        var output = "";

        // level
        if (level > 0) {
            if (level === 1 || level === 2) {
                message = message.toUpperCase();
            }
            if (level >= 2) {
                output = "----------------------------------------------------------------------------------------------------" + newLine;
            }
            if (level === 3) {
                message += "----------------------------------------------------------------------------------------------------" + newLine;
            }
        }

        // trailing newline
        if (addNewline) {
            message += newLine;
        }

        // return
        return (level > 0 ? newLine : "") + output + prefix + "\t" + message;
    };

    /**
     * Logs a message to the xjsfl or file log, and optionally traces it
     * @param    {String}    message        The text of the log message
     * @param    {String}    $type        An optional Log.CONSTANT type for the log message. Defaults to Log.INFO
     * @param    {Boolean}    $level        An optional Boolean to accentuate the message with a new line and capitals
     * @param    {Number}    $level        An optional Number to accentuate the message with a new line and: 1 = capitals, 2 = horizontal rule & capitals
     * @note     如果LOG_FOLDER  文件夹不存在，不会创建日志文件，只会输出到控制台
     *           如果开发者需要创建日志文件，请在项目的主目录下创建 Logs 文件夹
     * @private
     */
    function writeToLog(message, $type, $level) {
        // parameters
        var params = [$type, $level], type, level;
        params.forEach(function(param) {
            if (typeof param === "string") type = param;
            if (typeof param === "number") level = param;
            if (typeof param === "boolean") level = param === true ? 1 : 0;
        });
        type = type || Log.INFO;

        // date
        var date = new Date();
        var time = date.toString().match(/\d{2}:\d{2}:\d{2}/) + ":" + (date.getMilliseconds() / 1000).toFixed(3).substr(2);

        // log to main
        // var uri = LOG_FOLDER + 'main.log';
        var output = formatLine(time, type + "\t" + message, level, true);
        FLfile.write(MAIN_LOG, output, "append");

        // extra logging for file
        if (type === Log.FILE) {
            // var uri = projectFolder + '/Logs/file.log';
            // var indent = new Array(xjsfl.file.stack.length + 1).join('	');
            // var output = this.create(time, indent + message, level, true);
            var output = formatLine(time, message, level, true);
            FLfile.write(FILE_LOG, output, "append");
        }
    };

    // endregion file

// 存储计时器的起始时间
    const timers = {};
// 存储计数器的计数
    const counters = {};
    var console = {

        // /**
        //  * 打印调用栈信息,可以把报错地方替换为console.stack()，以显示报错的调用栈信息
        //  * @param message
        //  */
        // stack: function(message) {
        //     require(["error-stack-parser"], function(ErrorStackParser) {
        //         try {
        //             throw new Error(message || "Default stack trace");
        //         } catch (e) {
        //             var stack = ErrorStackParser.parse(e);
        //             console.info(stack);
        //         }
        //     });
        // },

        trace: function() {
            var message = formatMessage.apply(null, arguments); // 使用 formatMessage 处理 arguments

            trace("\n⚡admin  TRACE  ❯❯ " + message + "\n");
            writeToLog(message + "\n", Log.TRACE, 3);
        },
        // trace: trace,

        debug: function() {
            var message = formatMessage.apply(null, arguments); // 使用 formatMessage 处理 arguments

            trace("\n⚡admin  DEBUG  ❯❯ " + message + "\n");
            writeToLog(message + "\n", Log.DEBUG, 3);
        },

        log: function() {
            var message = formatMessage.apply(null, arguments); // 使用 formatMessage 处理 arguments

            trace("\n⚡admin  LOG  ❯❯ " + message + "\n");
            writeToLog(message + "\n", Log.LOG, 3);
        },

        info: function() {
            var message = formatMessage.apply(null, arguments); // 使用 formatMessage 处理 arguments

            trace("\n⚡admin  INFO  ❯❯ " + message + "\n");
            writeToLog(message + "\n", Log.INFO, 3);
        },

        warn: function() {
            var message = formatMessage.apply(null, arguments); // 使用 formatMessage 处理 arguments

            trace("\n⚡admin  WARNING  ❯❯ " + message + "\n");
            alert("WARNING  ❯❯ " + message + "\n");
            writeToLog(message + "\n", Log.WARN, 3);
        },

        error: function() {
            var message = formatMessage.apply(null, arguments); // 使用 formatMessage 处理 arguments

            trace("\n⚡admin  ERROR  ❯❯ " + message + "\n");
            alert("⚡⚡⚡ ERROR ⚡⚡⚡ " + message + "\n");
            writeToLog(message + "\n", Log.ERROR, 3);
        },

        /**
         * Clears a log file
         * @param    {String}    type    The type of log file to reset
         */
        clear: function(type) {
            // 清空控制台
            fl.output.clear();

            // 清空日志文件
            var name = type === Log.FILE ? "file" : "main";
            FLfile.remove(LOG_FOLDER + name + ".log");
            trace(name + ".log reset");
        },

        table: function(data) {
            // 检查输入是否为数组或对象
            if (!Array.isArray(data) && typeof data !== "object") {
                throw new Error("table expects an array or an object");
            }

            // 如果是对象，将其转换为键值对数组
            if (typeof data === "object" && !Array.isArray(data)) {
                data = Object.entries(data).map(// ([key, value]) => ({ key, value }));
                    function([key, value]) {
                        return { key: key, value: value };
                    });
            }

            // 检查数据是否为空
            if (data.length === 0) {
                this.log("TABLE\nNo data to display.");
                return;
            }

            // 判断数据类型：普通数组或对象数组
            const isSimpleArray = Array.isArray(data) && typeof data[0] !== "object";

            // 获取所有列名（即对象的键）
            const columns = new Set();
            if (!isSimpleArray) {
                data.forEach(function(item) {
                    if (typeof item === "object") {
                        Object.keys(item).forEach(function(key) {
                            columns.add(key);
                        });
                    }
                });
            } else {
                columns.add("index");
                columns.add("value");
            }

            // 将列名转换为数组
            const columnNames = Array.from(columns);

            // 构建表格的表头
            const header = columnNames.join("\t");

            // 构建表格的每一行
            const rows = data.map(function(item, index) {
                if (isSimpleArray) {
                    // 处理普通数组
                    return [index, item].join("\t");
                } else {
                    // 处理对象数组
                    return columnNames
                        .map(function(column) {
                            return item[column] !== undefined ? String(item[column]) : "";
                        })
                        .join("\t");
                }
            });

            // 将表头和行内容拼接成最终的表格字符串
            const table = ["TABLE", header].concat(rows).join("\n");

            // 打印到控制台
            this.info(table);
        },

        time: function(label) {
            if (label === undefined) label = "default";
            if (timers[label]) {
                // console.warn(`Timer "${label}" already exists.`);
                this.warn("Timer \"%s\" already exists.", label);
                return;
            }
            timers[label] = Date.now();
            // console.log(`Timer "${label}" started.`);
            this.info("Timer \"%s\" started.", label);
        },
        timeEnd: function(label) {
            if (label === undefined) label = "default";
            if (!timers[label]) {
                // console.warn(`Timer "${label}" does not exist.`);
                this.warn("Timer \"%s\" does not exist.", label);
                return;
            }
            const endTime = Date.now();
            const duration = endTime - timers[label];
            delete timers[label];
            // console.log(`Timer "${label}": ${duration}ms`);
            this.info("Timer \"%s\": %sms", label, duration);
        },
        count: function(label) {
            if (label === undefined) label = "default";
            if (!counters[label]) {
                counters[label] = 0;
            }
            counters[label]++;
            // console.log(`"${label}" was called ${counters[label]} times.`);
            this.info("\"%s\" was called %s times.", label, counters[label]);
        },
        countReset: function(label) {
            if (label === undefined) label = "default";
            if (!counters[label]) {
                // console.warn(`Counter "${label}" does not exist.`);
                this.warn("Counter \"%s\" does not exist.", label);
                return;
            }
            delete counters[label];
            // console.log(`Counter "${label}" has been reset.`);
            this.info("Counter \"%s\" has been reset.", label);
        },
        assert: function(expression, message) {
            if (!expression) {
                throw new Error(message || "Assertion failed");
            }
        }
    };

    window.console = console;
    return console;
});
