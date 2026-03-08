/**
 * @file: env.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

export const isBrowser = !!(
        typeof window !== "undefined" &&
        typeof navigator !== "undefined" &&
        window.document
    ),
    // @ts-ignore
    isWebWorker = !isBrowser && typeof importScripts !== "undefined",
    isNode =
        !isBrowser &&
        !isWebWorker &&
        !!(
            typeof process !== "undefined" &&
            process.release &&
            process.release.name === "node"
        ),
    isFlash =
        !isBrowser &&
        !isNode &&
        !isWebWorker &&
        typeof window !== "undefined" &&
        typeof fl !== "undefined";
