import {error, log} from "../console";

/**
 * 封装 JSON.stringify，自动打印并返回 JSON 字符串
 * 支持 (value), (value, replacer), (value, replacer, space) 等所有重载
 */
export function json(...args: Parameters<typeof JSON.stringify>): string {
    // JSON.stringify 的类型定义比较严格，第一个参数必须是可序列化的
    // 这里为了兼容动态调用，暂时使用 any[] 展开
    let jsonStr: string;

    try {
        // 但在运行时 JSON.stringify 能够正确处理参数展开
        jsonStr = JSON.stringify(...args);
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        jsonStr = `[Error stringifying object]: ${errorMessage}`;
        error(jsonStr); // 错误也打印出来
        return jsonStr;
    }

    log(jsonStr);
    return jsonStr;
}