/**
 * @file: types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

// --- 类型定义 ---

export type OpenMode = "r" | "w" | "a" | "x";

/**
 * 文件对象接口
 * 添加 [Symbol.dispose] 以支持 using 语法
 */
export interface FileObject {
    name: string;
    mode: OpenMode;

    // 原有方法
    read(size?: number): string;
    readLine(): string | null;
    readLines(): string[];
    write(text: string): boolean;
    writeLines(lines: string[]): boolean;
    close(): void;

    // 【新增】Disposable 协议方法
    [Symbol.dispose](): void;
}

export interface OpenResult {
    f: FileObject;
    [Symbol.dispose](): void; // 如果坚持返回包装对象，包装对象也需要实现此方法
}
