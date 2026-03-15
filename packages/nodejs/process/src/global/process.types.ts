/**
 * @file: process.types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 13:53
 * @project: AnJsflScript-ts
 * @description:
 */

export interface Process {
    cwd(): string;
    exit(code?: number | string | null): never;
    platform: Platform;
}

type Platform =
    | "aix"
    | "android"
    | "darwin"
    | "freebsd"
    | "haiku"
    | "linux"
    | "openbsd"
    | "sunos"
    | "win32"
    | "cygwin"
    | "netbsd";
