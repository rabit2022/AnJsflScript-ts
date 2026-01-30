(function() {
    /**
     * 解析函数调用字符串，提取函数名和参数
     */
    function parseFunctionCall(callStr) {
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

        return { functionName:functionName, args:args };
    }

    const callPart0 = "localRequire([object Array],(function (ErrorStackParser) {\nfunction Main() {try {throw new Error(\"Something went wrong!\");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}\n\nMain();}),(void 0))";
    const callPart1 = "([object Array],(function (ErrorStackParser) {\nfunction Main() {try {throw new Error(\"Something went wrong!\");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}\n\nMain();}))";

    const testCases = [callPart0, callPart1];

    for (var i = 0; i < testCases.length; i++) {
        const result = parseFunctionCall(testCases[i]);
        console.log("输入: " + testCases[i]);
        console.log("函数名: " + result.functionName);
        console.log("参数: " + JSON.stringify(result.args));
        console.log("---");
    }
})();