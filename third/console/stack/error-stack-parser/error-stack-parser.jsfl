(function(root, factory) {
    "use strict";
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (typeof define === "function" && define.amd) {
        define("error-stack-parser", ["stackframe"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("stackframe"));
    } else {
        root.ErrorStackParser = factory(root.StackFrame);
    }
})(this, function ErrorStackParser(StackFrame) {
    "use strict";

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
    // var FLASH_STACK_REGEXP = /^(.*?)@(.*?):(\d+)$/gm;
    var FLASH_STACK_REGEXP = /([\s\S]*?)@(.*?):(\d+)/gm;

    /**
     * 解析函数调用字符串，提取函数名和参数
     */
    function parseFlashFunctionCall(callStr) {
        if (typeof callStr !== "string") return null;

        // 处理换行
        const trimmedStr = callStr.replace(/\n/g, "");
        const funcMatch = trimmedStr.match(/^(\w+)?\s*\(([\s\S]*)\)$/);
        if (!funcMatch) return null;

        const functionName = funcMatch[1] || "";
        const args = [];
        var depth = 0, currentArg = "";
        var inString = false, stringChar = "", isEscaped = false;
        const argumentsStr = funcMatch[2];

        for (var i = 0; i < argumentsStr.length; i++) {
            const char = argumentsStr[i];

            // 处理转义
            if (inString && char === "\\") {
                isEscaped = !isEscaped;
                currentArg += char;
                continue;
            }

            // 处理字符串
            if (!isEscaped) {
                if (!inString && (char === "'" || char === "\"" || char === "`")) {
                    inString = true;
                    stringChar = char;
                } else if (inString && char === stringChar) {
                    inString = false;
                }
            }

            // 处理括号（非字符串内）
            if (!inString && !isEscaped) {
                if (char === "(" || char === "[" || char === "{") depth++;
                else if (char === ")" || char === "]" || char === "}") depth--;
            }

            // 重置转义状态
            if (isEscaped && char !== "\\") isEscaped = false;

            // 分割参数
            if (char === "," && depth === 0 && !inString && !isEscaped) {
                args.push(currentArg.trim());
                currentArg = "";
            } else {
                currentArg += char;
            }
        }

        // 添加最后一个参数
        if (currentArg.trim()) args.push(currentArg.trim());

        return { functionName: functionName, args: args };
    }

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (
                typeof error.stacktrace !== "undefined" ||
                typeof error["opera#sourceloc"] !== "undefined"
            ) {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack && typeof fl !== "undefined") {
                return this.parseFlash(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error("Cannot parse given Error object");
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(":") === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[()]/g, ""));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseFlash: function ErrorStackParser$$parseFlash(error) {
            // var filtered = error.stack.split('\n').filter(function (line) {
            //     return !!line.match(FLASH_STACK_REGEXP);
            // }, this);
            var flashStacks = error.stack.match(FLASH_STACK_REGEXP);

            // 去除无效信息
            // remove first item ----  "Error(\"Test error\")@:0",
            flashStacks.shift();

            // // remove last item ----  @H:\project\js\AnJsflScript-ts\third\stack\error-stack-parser-3.0.0\test\test.jsfl:1
            // flashStacks.pop();

            return flashStacks.map(function(line) {
                var [_, functionPart, fileName, lineNumber] = line.match(/([\s\S]*)@(.*?):(\d+)$/);
                // console.log(functionPart, fileName, lineNumber);

                // 去除左边的所有空白字符（包括空格、换行、制表符等）
                functionPart = functionPart.replace(/^\s+/, "");

                if (functionPart) {
                    const { functionName, args } = parseFlashFunctionCall(functionPart);
                }


                // stack object
                return new StackFrame({
                    functionName: functionName || "() => {}",
                    args: args || [],
                    fileName: fileName || undefined,
                    lineNumber: parseInt(lineNumber) || undefined,
                    source: functionPart || undefined
                    // columnNumber: undefined
                    // path: path.replace(/\\/g, '/'),
                    // uri: FLfile.platformPathToURI(path + file)
                });
            });

            //     .filter(function(stackFrame) {
            //     // 删除requirejs的调用栈信息
            //     if (stackFrame.fileName.includes("requirejs")) {
            //         return false;
            //     }
            //     return true;
            // });
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = error.stack.split("\n").filter(function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return filtered.map(function(line) {
                if (line.indexOf("(eval ") > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line
                        .replace(/eval code/g, "eval")
                        .replace(/(\(eval at [^()]*)|(,.*$)/g, "");
                }
                var sanitizedLine = line
                    .replace(/^\s+/, "")
                    .replace(/\(eval code/g, "(")
                    .replace(/^.*?\s+/, "");

                // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
                // case it has spaces in it, as the string is split on \s+ later on
                var location = sanitizedLine.match(/ (\(.+\)$)/);

                // remove the parenthesized location from the line, if it was matched
                sanitizedLine = location
                    ? sanitizedLine.replace(location[0], "")
                    : sanitizedLine;

                // if a location was matched, pass it to extractLocation() otherwise pass all sanitizedLine
                // because this line doesn't have function name
                var locationParts = this.extractLocation(
                    location ? location[1] : sanitizedLine
                );
                var functionName = (location && sanitizedLine) || undefined;
                var fileName =
                    ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1
                        ? undefined
                        : locationParts[0];

                return new StackFrame({
                    functionName: functionName,
                    fileName: fileName,
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = error.stack.split("\n").filter(function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return filtered.map(function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(" > eval") > -1) {
                    line = line.replace(
                        / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                        ":$1"
                    );
                }

                if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame({
                        functionName: line
                    });
                } else {
                    var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                    var matches = line.match(functionNameRegex);
                    var functionName = matches && matches[1] ? matches[1] : undefined;
                    var locationParts = this.extractLocation(
                        line.replace(functionNameRegex, "")
                    );

                    return new StackFrame({
                        functionName: functionName,
                        fileName: locationParts[0],
                        lineNumber: locationParts[1],
                        columnNumber: locationParts[2],
                        source: line
                    });
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (
                !e.stacktrace ||
                (e.message.indexOf("\n") > -1 &&
                    e.message.split("\n").length > e.stacktrace.split("\n").length)
            ) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split("\n");
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame({
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        })
                    );
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split("\n");
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame({
                            functionName: match[3] || undefined,
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        })
                    );
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = error.stack.split("\n").filter(function(line) {
                return (
                    !!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
                    !line.match(/^Error created at/)
                );
            }, this);

            return filtered.map(function(line) {
                var tokens = line.split("@");
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = tokens.shift() || "";
                var functionName =
                    functionCall
                        .replace(/<anonymous function(: (\w+))?>/, "$2")
                        .replace(/\([^)]*\)/g, "") || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
                }
                var args =
                    argsRaw === undefined || argsRaw === "[arguments not available]"
                        ? undefined
                        : argsRaw.split(",");

                return new StackFrame({
                    functionName: functionName,
                    args: args,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        }
    };
});
// )
// ;
