/**
 * @file: parser.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as ErrorStackParser from "error-stack-parser";

import { ConsoleStackFrame, Options } from "../types";

export function parseStack(
    error: Error,
    options: Required<Options>
): ConsoleStackFrame[] {
    let frames: ConsoleStackFrame[] = ErrorStackParser.parse(error);

    if (options.fuck) {
        return frames;
    }

    if (options.skipSelf) {
        // frames = frames.filter(f => !f.functionName?.includes('stack'));
        frames = frames.filter((f) => !f.fileName?.includes("console.stack"));
    }

    if (options.skipRequireJs) {
        frames = frames.filter((f) => !f.fileName?.includes("requirejs"));
    }

    if (options.depth) {
        frames = frames.slice(0, options.depth);
    }

    if (!options.includeSource) {
        // 使用解构赋值：提取 source (并丢弃)，剩余属性放入 rest
        frames = frames.map(({ source, ...rest }) => rest);
    }

    if (!options.includeArgs) {
        // 使用解构赋值：提取 source (并丢弃)，剩余属性放入 rest
        frames = frames.map(({ args, ...rest }) => rest);
    }

    return frames;
}
