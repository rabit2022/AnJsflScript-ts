/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { StackTracer } from "./api/stackTracer";

export const stackTracer = new StackTracer();

(console as any).stack = (...args: Parameters<typeof stackTracer.trace>) => {
    const stackTracer = new StackTracer();
    return stackTracer.trace(...args);
};
