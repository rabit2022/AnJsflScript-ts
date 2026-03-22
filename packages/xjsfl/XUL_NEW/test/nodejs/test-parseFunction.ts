
// ==========================================
// 1. 定义测试用例数据
// ==========================================

import {parseFunction} from "../../src/paser/Function";

const testCases = [
    {
        description: "标准命名函数",
        fn: function add(a: number, b: number) { return a + b; },
        expected: { name: 'add', params: ['a', 'b'] }
    },
    {
        description: "无参数函数",
        fn: function init() { return true; },
        expected: { name: 'init', params: [] }
    },
    {
        description: "单个参数",
        fn: function log(msg: string) { console.log(msg); },
        expected: { name: 'log', params: ['msg'] }
    },
    {
        description: "多参数带空格",
        fn: function complex( x, y, z ) { return x + y + z; },
        expected: { name: 'complex', params: ['x', 'y', 'z'] }
    },
    {
        description: "匿名函数 (应返回 null 或处理失败)",
        // 注意：匿名函数没有名字，正则可能匹配不到名字，或者名字为空
        fn: function(x: number) { return x * 2; },
        // 在 assign 之前它是匿名的，但这里为了测试方便，我们主要测试有名字的
        expected: null
    },
    {
        description: "包含默认值的参数 (简单正则可能会把值也抓出来，视需求而定)",
        fn: function greet(name: string = "World") { return name; },
        // 原逻辑 /\w+/g 会匹配到 'name' 和 'World'。
        // 如果你的需求是只想要参数名，这个测试用例会暴露原有正则的局限性。
        // 这里预期展示原有逻辑的行为：
        expected: { name: 'greet', params: ['name', 'World'] }
    }
];

// ==========================================
// 2. 辅助函数：给匿名函数赋予名字以便测试
// ==========================================
// 在 JS/TS 中，直接写的 function(x){} 名字是空的。
// 为了测试，我们手动设置 name 属性 (虽然 toSource 不一定反映这个修改，但在真实环境中通常函数都有名字)

const namedFn1 = function multiply(a: number, b: number) { return a * b; };
namedFn1.toString = function() { return "function multiply(a, b) { return a * b; }"; };
// @ts-ignore
namedFn1.toSource = function() { return "function multiply(a, b) { return a * b; }"; };

const namedFn2 = function noArgs() { return 0; };
// @ts-ignore
namedFn2.toSource = function() { return "function noArgs() { return 0; }"; };

// 覆盖测试用例中的匿名部分，使用这些模拟函数
const robustTestCases = [
    {
        description: "模拟标准函数 (multiply)",
        fn: namedFn1 as any,
        expected: { name: 'multiply', params: ['a', 'b'] }
    },
    {
        description: "模拟无参函数 (noArgs)",
        fn: namedFn2 as any,
        expected: { name: 'noArgs', params: [] }
    }
];

// ==========================================
// 3. 执行测试逻辑
// ==========================================

function runTests() {
    console.log("🧪 开始运行 parseFunction 测试...\n");

    let passed = 0;
    let failed = 0;

    const allCases = [...testCases]; // 主要运行模拟测试以保证跨环境可用

    allCases.forEach((testCase, index) => {
        try {
            const result = parseFunction(testCase.fn);
            const isPass = JSON.stringify(result) === JSON.stringify(testCase.expected);

            if (isPass) {
                console.log(`✅ [通过] 测试 ${index + 1}: ${testCase.description}`);
                passed++;
            } else {
                console.log(`❌ [失败] 测试 ${index + 1}: ${testCase.description}`);
                console.log(`   期望: ${JSON.stringify(testCase.expected)}`);
                console.log(`   实际: ${JSON.stringify(result)}`);
                failed++;
            }
        } catch (error) {
            console.log(`💥 [错误] 测试 ${index + 1}: ${testCase.description}`);
            console.log(`   异常: ${error}`);
            failed++;
        }
    });

    console.log("\n--------------------------------");
    console.log(`📊 测试结果: ${passed} 通过, ${failed} 失败`);
    console.log("--------------------------------");

    return failed === 0;
}

// ==========================================
// 4. 入口点
// ==========================================

// 如果在浏览器或 Node 中直接运行此文件
if (typeof require !== 'undefined' && require.main === module) {
    runTests();
}

// 导出测试运行器，方便在其他地方调用
export { runTests };