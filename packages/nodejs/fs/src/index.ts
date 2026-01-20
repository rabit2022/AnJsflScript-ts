// fl.ts - 同步文件系统 API（仿 Node.js fs）

// lodash
// import * as _ from "lodash";
import {includes as _includes,startsWith as _startsWith} from 'lodash';



type BufferEncoding = "utf-8";

// --- 辅助函数 ---
function toFileURI(path: string): string {
    if (typeof path !== "string") {
        throw new TypeError("[fl] Path must be a string");
    }
    // if (path.startsWith('file:///')) {
    if (_startsWith(path, "file:///")) {
        return path;
    }

    return FLfile.platformPathToURI(path);
}

function throwErr(code: string, message: string): never {
    const err = new Error(`[fs] ${message}`) as Error & { code?: string };
    err.code = code;
    throw err;
}

// --- 主模块 ---

/**
 * 同步检查路径是否存在
 */
export function existsSync(path: string): boolean {
    return FLfile.exists(toFileURI(path));
}

/**
 * 同步读取文件内容（始终返回 UTF-8 字符串）
 */
export function readFileSync(path: string, _encoding?: BufferEncoding): string {
    const uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", `no such file or directory, open '${path}'`);
    }
    const content = FLfile.read(uri);
    if (content === null) {
        throwErr("EIO", `unable to read file '${path}'`);
    }
    return content; // FLfile.read 始终返回 UTF-8 字符串
}

/**
 * 同步写入文件（覆盖）
 */
export function writeFileSync(
    path: string,
    data: string,
    _options?: { encoding?: BufferEncoding }
): void {
    const uri = toFileURI(path);
    const strData = typeof data === "string" ? data : String(data);

    const parentDir = uri.substring(0, uri.lastIndexOf("/"));
    if (parentDir && !FLfile.exists(parentDir)) {
        throwErr("ENOENT", `no such file or directory, open '${path}'`);
    }

    const success = FLfile.write(uri, strData);
    if (!success) {
        throwErr("EIO", `unable to write file '${path}'`);
    }
}

/**
 * 同步追加写入文件
 */
export function appendFileSync(
    path: string,
    data: string,
    _encoding?: BufferEncoding
): void {
    const uri = toFileURI(path);
    const strData = typeof data === "string" ? data : String(data);

    if (!FLfile.exists(uri)) {
        const parentDir = uri.substring(0, uri.lastIndexOf("/"));
        if (parentDir && !FLfile.exists(parentDir)) {
            throwErr("ENOENT", `no such file or directory, open '${path}'`);
        }
        FLfile.write(uri, ""); // 创建空文件
    }

    const success = FLfile.write(uri, strData, "append");
    if (!success) {
        throwErr("EIO", `unable to append to file '${path}'`);
    }
}

/**
 * 同步创建目录（递归支持有限，FLfile.createFolder 会自动创建中间目录）
 */
export function mkdirSync(path: string, _options?: { recursive?: boolean }): void {
    const uri = toFileURI(path);
    const success = FLfile.createFolder(uri);
    if (!success && !FLfile.exists(uri)) {
        throwErr("EIO", `unable to create directory '${path}'`);
    }
    // 如果目录已存在，视为成功（符合 Node.js 默认行为）
}

/**
 * 同步读取目录内容
 */
export function readdirSync(
    path: string,
    _options?: { withFileTypes?: boolean }
): string[] {
    const uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", `no such file or directory, scandir '${path}'`);
    }
    const attrs = FLfile.getAttributes(uri);
    // if (!attrs.includes('D')) {
    if (!_includes(attrs, "D")) {
        throwErr("ENOTDIR", `not a directory, scandir '${path}'`);
    }
    const result = FLfile.listFolder(uri);
    if (!result || !Array.isArray(result)) {
        throwErr("EIO", `unable to read directory '${path}'`);
    }
    return result;
}

/**
 * 同步获取文件状态（简化版）
 */
export function statSync(path: string): {
    isDirectory(): boolean;
    isFile(): boolean;
    size: number;
} {
    const uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", `no such file or directory, stat '${path}'`);
    }
    const attrs = FLfile.getAttributes(uri);
    // const isDir = attrs.includes('D');
    const isDir = _includes(attrs, "D");
    // FLfile 不提供文件大小，此处 size 无法获取，设为 0 或抛出警告
    // 实际使用中可忽略 size，或通过读取内容计算（不推荐）
    return {
        isDirectory: () => isDir,
        isFile: () => !isDir,
        size: 0 // ⚠️ FLfile 无 size 信息
    };
}

/**
 * 同步删除文件
 */
export function unlinkSync(path: string): void {
    const uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", `no such file or directory, unlink '${path}'`);
    }
    const attrs = FLfile.getAttributes(uri);
    // if (attrs.includes('D')) {
    if (_includes(attrs, "D")) {
        throwErr("EISDIR", `illegal operation on a directory, unlink '${path}'`);
    }
    const success = FLfile.remove(uri);
    if (!success) {
        throwErr("EIO", `unable to delete file '${path}'`);
    }
}

/**
 * 同步删除空目录
 */
export function rmdirSync(path: string): void {
    const uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", `no such file or directory, rmdir '${path}'`);
    }
    const attrs = FLfile.getAttributes(uri);
    // if (!attrs.includes('D')) {
    if (!_includes(attrs, "D")) {
        throwErr("ENOTDIR", `not a directory, rmdir '${path}'`);
    }
    const success = FLfile.remove(uri);
    if (!success) {
        throwErr("EIO", `unable to delete directory '${path}' (may not be empty)`);
    }
}

/**
 * 同步复制文件（简单实现：读 + 写）
 */
export function copyFileSync(src: string, dest: string): void {
    const srcContent = readFileSync(src);
    writeFileSync(dest, srcContent);
}

/**
 * 通用删除（文件或目录）
 */
export function rmSync(path: string, _options?: { recursive?: boolean }): void {
    const uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", `no such file or directory, rm '${path}'`);
    }
    const attrs = FLfile.getAttributes(uri);
    // if (attrs.includes('D')) {
    if (_includes(attrs, "D")) {
        rmdirSync(path); // 注意：FLfile.deleteFolder 要求目录为空
    } else {
        unlinkSync(path);
    }
}
