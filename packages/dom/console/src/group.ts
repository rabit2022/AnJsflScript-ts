const trace = fl.trace;

// 存储当前的分组层级
const groupStack = [];

// 模拟 console.group
function consoleGroup(label) {
    const indent = '  '.repeat(groupStack.length);
    const lineLength = Math.max(30 - label.length - groupStack.length * 2, 10);
    
    trace(`${indent}┌─ ${label} ${'─'.repeat(lineLength)}┐`);
    groupStack.push(label);
}

// 模拟 console.groupCollapsed
function consoleGroupCollapsed(label) {
    const indent = '  '.repeat(groupStack.length);
    trace(`${indent}└▶ ${label}...`);
    groupStack.push(label);
}

// 模拟 console.groupEnd
function consoleGroupEnd() {
    if (groupStack.length === 0) return;
    
    const label = groupStack.pop();
    const indent = '  '.repeat(groupStack.length);
    const lineLength = Math.max(30 - label.length - groupStack.length * 2, 10);
    
    trace(`${indent}└─ ${label} ${'─'.repeat(lineLength)}┘`);
}

// 模拟 console.log（带缩进）
function consoleLog(...args) {
    const indent = '  '.repeat(groupStack.length);
    const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');
    
    trace(`${indent}│ ${message}`);
}

// 模拟 console.error（带缩进和错误标记）
function consoleError(...args) {
    const indent = '  '.repeat(groupStack.length);
    const message = args.join(' ');
    trace(`${indent}│ ❌ ${message}`);
}

// 模拟 console.warn（带缩进和警告标记）
function consoleWarn(...args) {
    const indent = '  '.repeat(groupStack.length);
    const message = args.join(' ');
    trace(`${indent}│ ⚠️ ${message}`);
}

// 用法完全兼容原来的代码
consoleGroup('Stack Trace:');
cleanedFrames.forEach((frame, i) => {
    consoleLog(`${i + 1}. ${frame.function} (${frame.file}:${frame.line}:${frame.column})`);
    if (frame.source) consoleLog(`   ↳ ${frame.source}`);
});
consoleGroupEnd();

// 支持嵌套分组
consoleGroup('外层分组');
consoleLog('外层消息');
consoleGroup('内层分组');
consoleLog('内层消息');
consoleError('错误消息');
consoleGroupEnd();
consoleGroupEnd();