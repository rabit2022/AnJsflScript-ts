/**
 * @file: settings.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * ==============================================================================
 * 全局类型声明 (Global Type Declarations)
 * 放在文件顶部或单独的 .d.ts 文件中
 * ==============================================================================
 */

// 声明 AnJsflScript 命名空间的结构
interface AnJsflScriptNamespace {
    app: {
        platform: string;
        version: number;
        name: string;
        os: {
            mac: boolean;
            win: boolean;
        };
    };
    folders: {
        AnJsflScript: string;
        Log: string;
        flash: string;
        swf: string;
        "@xjsfl/XUL": string;
        [key: string]: string; // 允许其他字符串属性
    };
    $ProjectFileDir$?: string; // 特殊占位符属性
    [key: string]: any; // 允许动态添加其他属性
}

// 扩展 window 对象
declare global {
    interface Window {
        AnJsflScript: AnJsflScriptNamespace;
    }
}

/**
 * ==============================================================================
 * 业务逻辑
 * ==============================================================================
 */

// 1. 版本映射表 (常量)
const VERSION_MAP: Record<string, string> = {
    "9": "CS3",
    "10": "CS4",
    "11": "CS5",
    "12": "CS6",
    "13": "CC",
    "14": "CC 2014",
    "15": "CC 2015",
    "16": "Animate CC",
    "17": "Animate CC 2017",
    "18": "Animate CC 2018",
    "19": "Animate CC 2019",
    "20": "Animate 2020",
    "21": "Animate 2021",
    "22": "Animate 2022",
    "23": "Animate 2023",
    "24": "Animate 2024" /* 未来版本可在此添加 */
};

// --- 安全获取 fl 数据 ---
if (typeof fl === "undefined") {
    throw new Error(
        "JSFL Error: 'fl' object is not defined. This script must run inside Adobe Animate/Flash."
    );
}

// 1. 提取核心信息
const APP_VERSION_STRING: string = fl.version;

// 防御性编程：防止字符串过短
const PLATFORM_CODE: string =
    APP_VERSION_STRING.length >= 3
        ? APP_VERSION_STRING.substr(0, 3).toLowerCase()
        : "unknown";

// 2. 解析版本号
let VERSION_NUMBER: number = 0;
let VERSION_NAME: string = "Unknown";

// 正则匹配：匹配 "WIN 24" 或 "MAC 24" 中的数字部分
const versionMatch = APP_VERSION_STRING.match(/\w+\s+(\d+)/);

if (versionMatch && versionMatch[1]) {
    VERSION_NUMBER = parseInt(versionMatch[1], 10);

    // 查找版本名称，如果找不到则默认为 "Unknown"
    // 注意：VERSION_NUMBER 是 number，需要转为 string 作为 key
    VERSION_NAME = VERSION_MAP[String(VERSION_NUMBER)] ?? "Unknown";
}

// 3. 初始化全局命名空间
if (!window.AnJsflScript) {
    window.AnJsflScript = {} as AnJsflScriptNamespace;
}

// 赋值 app 信息
window.AnJsflScript.app = {
    platform: PLATFORM_CODE,
    version: VERSION_NUMBER,
    name: VERSION_NAME,
    os: {
        mac: PLATFORM_CODE === "mac",
        win: PLATFORM_CODE === "win"
    }
};

// 4. 初始化文件夹路径
// 关键点：$ProjectFileDir$ 的处理
// 方案 A: 如果这是运行时由外部注入到 window 对象的属性：
const projectDir = window.AnJsflScript.$ProjectFileDir$;

// 方案 B: 如果这是构建时替换的字符串字面量
let cwd: string = projectDir || "";

window.AnJsflScript.folders = {
    AnJsflScript: cwd,
    Log: cwd ? `${cwd}/config/Log` : "", // 防止 cwd 为空导致路径错误

    // flash dir (这些是运行时确定的)
    flash: fl.configURI,
    swf: `${fl.configURI}WindowSWF/`,

    "@xjsfl/XUL": cwd ? `${cwd}/packages/xjsfl/XUL/` : ""
};

// 导出空对象，使文件成为模块，避免变量污染全局作用域（除了我们显式挂载到 window 的部分）
export {};
