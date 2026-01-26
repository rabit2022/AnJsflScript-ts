// const callPart = `localRequire([object Array],(function (ErrorStackParser) {
// function Main() {try {throw new Error("Something went wrong!");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}
//
// Main();}),(void 0))`;


const callPart =`([object Array],(function (ErrorStackParser) {
function Main() {try {throw new Error("Something went wrong!");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}

Main();}))`;

// // 方法1：使用更精确的正则匹配
// const funcMatch1 = callPart.match(/^(\w+)\((.*)\)$/);
// if (funcMatch1) {
//     const functionName = funcMatch1[1]; // "localRequire"
//     const argumentsStr = funcMatch1[2]; // "[object Array],(function ...),(void 0)"
//
//     console.log('方法1匹配结果:');
//     console.log('Function:', functionName);
//     console.log('Arguments string:', argumentsStr);
//     console.log('---');
// }

// // 方法2：使用更灵活的正则（处理可能的换行和空格）
// const funcMatch2 = callPart.match(/^(\w+)\s*\(\s*([\s\S]*?)\s*\)$/);
// if (funcMatch2) {
//     const functionName = funcMatch2[1];
//     const argumentsStr = funcMatch2[2];
//
//     console.log('方法2匹配结果:');
//     console.log('Function:', functionName);
//     console.log('Arguments string:', argumentsStr);
//     console.log('---');
// }
//


// 方法3：如果还想把参数分割成数组
const funcMatch3 = callPart.match(/^(\w+)?\s*\((.*)\)$/s); // s标志使.匹配所有字符，包括换行
if (funcMatch3) {
    const functionName = funcMatch3[1];
    const argumentsStr = funcMatch3[2];

    // 分割参数（简单版本，假设没有嵌套括号）
    const args = [];
    let depth = 0;
    let currentArg = '';
    let inString = false;
    let stringChar = '';

    for (let i = 0; i < argumentsStr.length; i++) {
        const char = argumentsStr[i];

        if (!inString) {
            if (char === '(' || char === '[' || char === '{') {
                depth++;
            } else if (char === ')' || char === ']' || char === '}') {
                depth--;
            } else if ((char === "'" || char === '"' || char === '`') && argumentsStr[i-1] !== '\\') {
                inString = true;
                stringChar = char;
            }
        } else {
            if (char === stringChar && argumentsStr[i-1] !== '\\') {
                inString = false;
            }
        }

        if (char === ',' && depth === 0 && !inString) {
            args.push(currentArg.trim());
            currentArg = '';
        } else {
            currentArg += char;
        }
    }

    if (currentArg.trim()) {
        args.push(currentArg.trim());
    }

    console.log('方法3匹配结果（带参数分割）:');
    console.log('Function:', functionName);
    console.log('Arguments:', args);
    console.log('Argument 1:', args[0]);
    console.log('Argument 2:', args[1]);
    console.log('Argument 3:', args[2]);
}