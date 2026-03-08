/**
 * @file: types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

export type BufferEncoding = string;

export interface ExecSyncOptions {
    /** 输出编码，默认 'utf8' */
    encoding?: "utf-8";
    /** 超时时间（毫秒） */
    timeout?: number;
    /** 最大缓冲区大小（字节） */
    maxBuffer?: number;
    shell?: string;
}

export interface ExecSyncResult {
    stdout: string;
    stderr: string | null;
    status: number | null;
    signal: string | null;
    error?: Error;
}

export interface ExecSyncError {
    status: number; // 退出码（如 1, 127, 130）
    signal?: string; // 终止信号（如 'SIGKILL'）
    output: Array<string | null>; // [stdin, stdout, stderr]
    stdout: string;
    stderr: string;
    pid: number; // 进程ID
    error?: Error;
}
