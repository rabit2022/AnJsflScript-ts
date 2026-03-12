/**
 * @file: open.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import * as fs from "fs";
import * as path from "path";
import { FileObject, OpenMode } from "./types";

/**
 * 文件处理类
 * 实现 FileObject 接口并支持 Disposable 模式 (using 语法)
 */
export class FileHandle implements FileObject {
    // --- 公开只读属性 ---
    public readonly name: string;
    public readonly mode: OpenMode;

    // --- 私有内部状态 (封装) ---
    private fileContentCache: string | undefined;
    private fileLinesCache: string[] | undefined;
    private readLineIndex: number = 0;
    private isClosed: boolean = false;
    private readonly absolutePath: string;

    /**
     * 构造函数
     * @param filePath 文件路径
     * @param mode 打开模式 (默认 'r')
     * @param encoding 编码 (默认 'utf-8', 仅支持 utf-8)
     */
    constructor(filePath: string, mode: OpenMode = "r", encoding: string = "utf-8") {
        if (encoding.toLowerCase() !== "utf-8") {
            throw new Error("暂不支持非 utf-8 编码的文件");
        }

        this.absolutePath = path.resolve(filePath);
        this.name = this.absolutePath;
        this.mode = mode;
    }

    // --- 内部辅助方法 ---

    private checkClosed(): void {
        if (this.isClosed) {
            throw new Error("File already closed");
        }
    }

    private performClose(): void {
        if (this.isClosed) return; // 幂等保护

        this.fileContentCache = undefined;
        this.fileLinesCache = undefined;
        this.readLineIndex = 0;
        this.isClosed = true;

        // 调试日志，生产环境可移除或改为 logger
        console.log(`[System] File ${this.name} disposed/closed.`);
    }

    // --- 公开 API 实现 ---

    public read(size?: number): string {
        this.checkClosed();

        // 懒加载内容
        if (this.fileContentCache === undefined) {
            if (this.mode === "r" || this.mode === "a") {
                try {
                    this.fileContentCache = fs.readFileSync(this.absolutePath, "utf-8");
                } catch (err: any) {
                    if (err.code === "ENOENT") {
                        throw new Error(`File not found: ${this.absolutePath}`);
                    }
                    throw err;
                }
            } else {
                // 'w' or 'x' 模式下，初始化为空
                this.fileContentCache = "";
            }
        }

        const content = this.fileContentCache || "";

        if (size === undefined || size === -1) {
            return content;
        }
        return content.substr(0, size);
    }

    public readLine(): string | null {
        this.checkClosed();

        // 确保内容已加载且行缓存已初始化
        const content = this.read();
        if (this.fileLinesCache === undefined) {
            this.fileLinesCache = content.split(/\r?\n/);
        }

        if (this.readLineIndex >= this.fileLinesCache.length) {
            return null;
        }

        return this.fileLinesCache[this.readLineIndex++];
    }

    public readLines(): string[] {
        this.checkClosed();

        const content = this.read();
        if (this.fileLinesCache === undefined) {
            this.fileLinesCache = content.split(/\r?\n/);
        }
        return this.fileLinesCache;
    }

    public write(text: string): boolean {
        this.checkClosed();

        if (!["w", "a", "x"].includes(this.mode)) {
            throw new Error(
                `Invalid mode for writing: ${this.mode}. Use 'w', 'a', or 'x'.`
            );
        }

        let flag: string = "w";
        if (this.mode === "a") {
            flag = "a";
        } else if (this.mode === "x") {
            // 根据需求，'x' 暂时等同于 'w' (覆盖)
            flag = "w";
            // 若需严格独占创建，改为: flag = 'wx';
        }

        try {
            fs.writeFileSync(this.absolutePath, text, {
                encoding: "utf-8",
                flag: flag as fs.OpenMode as string
            });

            // 更新缓存策略
            if (this.mode === "w" || this.mode === "x") {
                this.fileContentCache = text;
                this.fileLinesCache = undefined;
                this.readLineIndex = 0;
            } else if (this.mode === "a") {
                // 追加后重新读取全量以保持一致性
                this.fileContentCache = fs.readFileSync(this.absolutePath, "utf-8");
                this.fileLinesCache = undefined;
                this.readLineIndex = 0;
            }

            return true;
        } catch (err: any) {
            if (err.code === "EEXIST" && flag === "wx") {
                throw new Error(`File already exists: ${this.absolutePath}`);
            }
            throw err;
        }
    }

    public writeLines(lines: string[]): boolean {
        this.checkClosed();
        if (!Array.isArray(lines)) {
            throw new Error("writeLines expects an array of strings");
        }
        return this.write(lines.join("\n"));
    }

    public close(): void {
        this.performClose();
    }

    /**
     * 实现 Disposable 接口
     * 当使用 `using` 关键字时，作用域结束会自动调用此方法
     */
    [Symbol.dispose](): void {
        this.close();
    }
}
