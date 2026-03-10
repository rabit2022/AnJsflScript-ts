import {OpenMode} from "./types";
import {FileHandle} from "./open";

/**
 * 工厂函数 (保持原有的 open 调用习惯)
 * 返回一个 FileHandle 实例
 */
export function open(
    filePath: string,
    mode?: OpenMode,
    encoding?: string
): FileHandle {
    return new FileHandle(filePath, mode, encoding);
}

