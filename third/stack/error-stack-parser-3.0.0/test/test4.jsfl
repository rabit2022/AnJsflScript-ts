(function() {


    /**
     * 解析函数调用字符串，提取函数名和参数
     * @param {string} callStr - 函数调用字符串，格式如 "func(arg1, arg2, arg3)"
     * @returns {object} 包含functionName和args的对象，解析失败返回null
     */
    function parseFunctionCall(callStr) {
        if (typeof callStr !== "string") {
            return null;
        }

        // 匹配函数名和参数部分
        // const funcMatch = callStr.match(/^(\w+)?\s*\((.*)\)$/s);
        // const funcMatch = callStr.match(/^(\w+)?\s*\((.*)\)$/s);


        // 使用[\s\S]代替.来匹配所有字符（包括换行）
        const funcMatch = callStr.match(/^(\w+)?\s*\(([\s\S]*)\)$/);
        if (!funcMatch) {
            return null;
        }

        const functionName = funcMatch[1] || ""; // 处理匿名函数情况
        const argumentsStr = funcMatch[2];

        // 分割参数，处理嵌套括号、引号和转义
        const args = [];
        var depth = 0; // 括号嵌套深度
        var currentArg = "";
        var inString = false; // 是否在字符串内
        var stringChar = ""; // 当前字符串引号类型
        var isEscaped = false; // 是否转义字符

        for (var i = 0; i < argumentsStr.length; i++) {
            const char = argumentsStr[i];
            const prevChar = argumentsStr[i - 1];

            // 处理转义字符
            if (inString && char === "\\" && !isEscaped) {
                isEscaped = true;
                currentArg += char;
                continue;
            }

            if (!inString && !isEscaped) {
                // 不在字符串内，检查括号
                if (char === "(" || char === "[" || char === "{") {
                    depth++;
                } else if (char === ")" || char === "]" || char === "}") {
                    depth--;
                } else if ((char === "'" || char === "\"" || char === "`") && !isEscaped) {
                    inString = true;
                    stringChar = char;
                }
            } else if (inString && !isEscaped) {
                // 在字符串内，检查字符串结束
                if (char === stringChar) {
                    inString = false;
                }
            }

            // 重置转义状态
            if (isEscaped) {
                isEscaped = false;
            }

            // 根据逗号分割参数
            if (char === "," && depth === 0 && !inString) {
                args.push(currentArg.trim());
                currentArg = "";
            } else {
                currentArg += char;
            }
        }

        // 添加最后一个参数
        if (currentArg.trim()) {
            args.push(currentArg.trim());
        }

        return {
            functionName:functionName,
            args: args.length === 1 && args[0] === "" ? [] : args // 处理无参数情况
        };
    }

//     const callPart0 = `localRequire([object Array],(function (ErrorStackParser) {
// function Main() {try {throw new Error("Something went wrong!");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}
//
// Main();}),(void 0))`;

    const callPart0 =  "localRequire([object Array],(function (ErrorStackParser) {\nfunction Main() {try {throw new Error(\"Something went wrong!\");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}\n\nMain();}),(void 0))"


//     const callPart1 = `([object Array],(function (ErrorStackParser) {
// function Main() {try {throw new Error("Something went wrong!");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}
//
// Main();}))`;
    const callPart1 ="([object Array],(function (ErrorStackParser) {\nfunction Main() {try {throw new Error(\"Something went wrong!\");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}\n\nMain();}))";


// 使用示例
    const testCases = [
        // 'func(arg1, arg2, arg3)',
        // 'myFunction("hello, world", [1, 2, 3], {key: "value"})',
        // 'test()',
        // 'process(\'单引号\', "双引号", `模板字符串`)',
        // 'anonymous(1, (a, b) => a + b, {x: 10})',
        // '嵌套("测试", func(1, 2), [3, func2(4)])',
        // 'noArgs()'
        callPart0, callPart1
    ];

    testCases.forEach(function (test ) {
        const result = parseFunctionCall(test);
        // console.log(`输入: ${test}`);
        // console.log(`函数名: ${result?.functionName}`);
        // console.log(`参数: ${JSON.stringify(result?.args)}`);
        console.log("输入: "+test);
        console.log("函数名: "+result.functionName);
        console.log("参数: "+JSON.stringify(result.args));
        console.log("---");
    });

// // 如果需要保持您原有的调用方式
// function parseAndLogFunctionCall(callStr) {
//         const result = parseFunctionCall(callStr);
//         if (!result) {
//                 console.log('无法解析函数调用字符串');
//                 return;
//         }
//
//         console.log('Function:', result.functionName);
//         console.log('Arguments:', result.args);
//         for (var i = 0; i < result.args.length; i++) {
//                 console.log(`Argument ${i + 1}:`, result.args[i]);
//         }
//         return result;
// }

// // 使用方法
// const callPart = 'myFunction("hello", 123, [1, 2, 3])';
// const parsed = parseFunctionCall(callPart);
// console.log('函数名:', parsed.functionName);
// console.log('参数数组:', parsed.args);

})();
