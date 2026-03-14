import * as util from "util";
import { error, log } from "../console";

/**
 * 封装 util.inspect，自动打印并返回格式化字符串
 * 支持任意数量的参数，行为等同于 Node.js 原生的 util.inspect
 */
export function inspect(...args: Parameters<typeof util.inspect>): string {
    let resultStr: string;

    try {
        // util.inspect 的第一个参数是要检查的对象，后续是选项
        // 使用 spread operator (...) 直接传递参数数组
        resultStr = util.inspect(...args);
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        resultStr = `[Error inspecting object]: ${errorMessage}`;
        error(resultStr); // 错误也打印出来
        return resultStr;
    }

    // 主动打印到控制台
    log(resultStr);

    return resultStr;
}
