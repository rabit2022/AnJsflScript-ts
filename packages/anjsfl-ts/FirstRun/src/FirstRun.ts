/**
 * ==============================================================================
 * 类型定义 (Type Definitions)
 * 针对 Adobe Animate JSFL 环境的全局声明
 * ==============================================================================
 */

interface AnJsflScriptAPI {
    importFlashScripts: (...paths: string[]) => void;
    $ProjectFileDir$: string;
}

declare global {
    interface Window {
        AnJsflScript?: AnJsflScriptAPI;
    }
}

/**
 * ==============================================================================
 * 工具函数 (Utilities)
 * ==============================================================================
 */

/**
 * 获取当前脚本所在的目录 URI
 * 使用现代 URL 处理逻辑，比手动 substring 更安全
 */
const getcwd = (): string => {
    const scriptURI = fl.scriptURI;
    // 尝试使用 URL 对象解析（如果环境支持），否则回退到字符串操作
    try {
        // file:///C:/.../script.jsfl -> file:///C:/.../
        const url = new URL(scriptURI);
        // 移除文件名，保留路径
        const pathParts = url.pathname.split('/');
        pathParts.pop(); // 移除文件名
        url.pathname = pathParts.join('/') + (pathParts.length > 0 ? '' : '/');
        // 注意：URL 对象在处理本地文件路径时可能会有编码问题，
        // 对于纯 JSFL 环境，手动切片往往更可靠且兼容性更好。
        // 这里为了保持绝对兼容 JSFL 的特殊 URI 格式，推荐使用稳健的手动切片：
        const lastSlash = scriptURI.lastIndexOf('/');
        return lastSlash !== -1 ? scriptURI.substring(0, lastSlash) : '';
    } catch {
        const lastSlash = scriptURI.lastIndexOf('/');
        return lastSlash !== -1 ? scriptURI.substring(0, lastSlash) : '';
    }
};

/**
 * 断言路径为字符串 (Type Guard)
 */
const assertPath = (path: unknown): asserts path is string => {
    if (typeof path !== 'string') {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(path)}.`);
    }
};

/**
 * 判断是否为绝对路径
 */
const isAbsolute = (path: string): boolean => {
    assertPath(path);
    return path.startsWith('file:///');
};

/**
 * 规范化脚本路径：确保以 .jsfl 结尾
 * 逻辑：
 * 1. 如果以 .js 结尾 -> 替换为 .jsfl
 * 2. 如果没有后缀 -> 添加 .jsfl
 * 3. 如果已经是 .jsfl -> 保持不变
 */
const normalizeScriptPath = (uri: string): string => {
    if (uri.endsWith('.js')) {
        return uri.replace(/\.[^.]*$/, '.jsfl');
    }
    if (!uri.endsWith('.jsfl')) {
        return `${uri}.jsfl`;
    }
    return uri;
};

/**
 * ==============================================================================
 * 核心功能 (Core Logic)
 * ==============================================================================
 */

/**
 * 导入并执行 Flash 脚本
 * @param paths 可变参数，支持相对路径或绝对路径
 */
const importFlashScripts = (...paths: string[]): void => {
    const cwd = getcwd();

    // paths.forEach((relativePath) => {
    for (const relativePath of paths) {
        // 1. 构建绝对 URI
        // 使用模板字符串拼接，注意处理可能的双斜杠问题（虽然 JSFL 通常能容忍）
        const scriptURI = isAbsolute(relativePath)
            ? relativePath
            : `${cwd}/${relativePath}`.replace(/\/+/g, '/'); // 清理多余斜杠

        // 2. 规范化后缀
        const finalURI = normalizeScriptPath(scriptURI);

        // 3. 检查并执行
        if (FLfile.exists(finalURI)) {
            fl.runScript(finalURI);
        } else {
            const errorMsg = `[importFlashScripts] Error: Cannot find script file [${finalURI}]`;
            fl.trace(errorMsg);
            throw new Error(errorMsg);
        }
    };
};

/**
 * ==============================================================================
 * 初始化入口 (Entry Point)
 * ==============================================================================
 */
const bootstrap = () => {
    // 安全地初始化全局命名空间
    window.AnJsflScript = window.AnJsflScript || ({} as AnJsflScriptAPI);

    // 暴露 API
    window.AnJsflScript.importFlashScripts = importFlashScripts;

    // 暴露项目根目录
    window.AnJsflScript.$ProjectFileDir$ = getcwd();

    // 配置项 (可以使用 const object 或 Map)
    const CONFIG = {
        requirejs: 'third/require/requirejs/require-js'
    } as const;

    // 执行初始加载
    try {
        importFlashScripts(CONFIG.requirejs);
    } catch (e) {
        // 在生产环境中，你可能希望捕获错误而不是让整个脚本崩溃，
        // 但为了保持与原逻辑一致（抛出错误），这里保留 throw 的行为。
        fl.trace(`[Bootstrap] Initialization failed: ${(e as Error).message}`);
        throw e;
    }
};

// 立即执行
bootstrap();