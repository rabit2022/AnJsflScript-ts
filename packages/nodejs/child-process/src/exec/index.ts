import {ExecSyncOptions, ExecSyncResult} from "../types";
import * as fs from "fs";

import {fileURLToPath} from "url";
import * as log from "loglevel";

export function execSync(command: string, options?: ExecSyncOptions): string {
    const opts: Required<ExecSyncOptions> = {
        encoding: "utf-8",
        timeout: 0,
        maxBuffer: 200 * 1024 * 1024, // 200MB
        shell: "powershell",
        ...options
    };

    // 验证最大缓冲区
    if (opts.maxBuffer <= 0) {
        throw new Error("maxBuffer must be a positive number");
    }

    // 创建临时文件来捕获输出
    const tempDir = `${AnJsflScript.folders.Log}cmd/`;
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substr(2, 8);

    const tempOutputFile = `${tempDir}execSync.txt`;
    const tempErrorFile = `${tempDir}execSync_error.txt`;

    // 递归创建目录 (recursive: true 表示如果父目录不存在也一并创建)
    // 如果目录已存在，这行代码什么都不会做，也不会报错
    fs.mkdirSync(tempDir, {recursive: true});


    // try {
    // 构建完整的命令
    let fullCommand: string;

    if (isWindows()) {
        if (opts.shell === "cmd") {
            // CMD 重定向语法: command > out.txt 2> err.txt
            // 注意：CMD 的 2> 需要转义或使用引号包裹整个命令
            fullCommand = `cmd /c "${command}" > "${fileURLToPath(tempOutputFile)}" 2> "${fileURLToPath(tempErrorFile)}"`;

            /*
            cmd /c 'echo "Hello, World!"' > "H:/project/js/AnJsflScript-ts/config/Log/cmd/execSync_1772972745857_hyrlggdb.txt" 2> "H:/project/js/AnJsflScript-ts/config/Log/cmd/execSync_1772972745857_hyrlggdb_error.txt"

             */

        } else if (opts.shell === "powershell") {
            // --- PowerShell 重定向逻辑 (修正版) ---

            // 1. 准备路径 (使用 fileURLToPath 确保是本地路径)
            // 注意：这里不需要转义双引号，因为我们马上要用单引号包裹它们
            const outPath = fileURLToPath(tempOutputFile);
            const errPath = fileURLToPath(tempErrorFile);

            // 2. 【关键】转义路径中的单引号 (PowerShell 规则：' 变成 '')
            // 如果路径里没有单引号，这步不会改变任何东西，很安全
            const safeOutPath = outPath.replace(/'/g, "''");
            const safeErrPath = errPath.replace(/'/g, "''");

            // 3. 处理用户命令中的单引号
            // 如果用户的 command 里有单引号，在 & { ... } 块中也需要转义，防止破坏脚本块结构
            const safeCommand = command.replace(/"/g,"'").replace(/'/g, "''");

            // 4. 构建 PS 脚本字符串
            // 👇 重点：使用单引号 ' 包裹路径，而不是双引号 "
            // 这样就不需要再用反引号 ` 去转义双引号了！
            const psScript = `& { ${safeCommand} } 2> '${safeErrPath}' | Out-File -FilePath '${safeOutPath}' -Encoding UTF8`;

            // 5. 定义参数前缀
            const argumentsPrefix = [
                '-NoProfile',
                '-NonInteractive',
                '-ExecutionPolicy',
                'Bypass',
                '-Command'
            ];

            // 6. 组装最终命令
            // 整个 psScript 被包裹在双引号中传递给 -Command
            // 因为 psScript 内部全是单引号，所以外部双引号非常安全，不需要内部转义
            fullCommand = `powershell ${argumentsPrefix.join(" ")} "${psScript}"`;
        } else {
            throw new Error("Unknown shell " + opts.shell);
        }

        log.log(`Executing: ${fullCommand}`);
        FLfile.runCommandLine(fullCommand);


        // 读取输出文件
        const output = fs.readFileSync(tempOutputFile, opts.encoding);

        // 如果有错误输出，检查是否应该抛出
        if (FLfile.exists(tempErrorFile)) {
            const errorOutput = fs.readFileSync(tempErrorFile, opts.encoding);
            if (errorOutput && errorOutput.trim().length > 0) {
                // 对于非零退出码，抛出包含错误输出的异常
                // if (exitCode !== 0) {
                const error = new Error(`Command failed: ${errorOutput.trim()}`);
                (error as any).stderr = errorOutput;
                (error as any).stdout = output;
                // (error as any).status = exitCode;
                throw error;
                // }
            }
        }

        // 清理临时文件
        // cleanupTempFiles([tempOutputFile, tempErrorFile]);

        return output;
    } else {
        throw new Error("Unknown shell " + opts.shell);
    }
}

/**
 * 检查当前系统是否为 Windows
 */
function isWindows(): boolean {
    return AnJsflScript.app.os.win;
}

/**
 * 清理临时文件
 */
function cleanupTempFiles(files: string[]): void {
    files.forEach((file) => {
        try {
            if (FLfile.exists(file)) {
                FLfile.remove(file);
            }
        } catch (e) {
            // 忽略清理错误
        }
    });
}

/**
 * 异步执行命令（模仿 exec 但不支持回调，返回 Promise）
 */
export function exec(command: string, options?: ExecSyncOptions): Promise<ExecSyncResult> {
    return new Promise((resolve, reject) => {
        try {
            const stdout = execSync(command, options);
            resolve({
                stdout: stdout,
                stderr: null,
                status: 0,
                signal: null
            });
        } catch (error: any) {
            resolve({
                stdout: error.stdout,
                stderr: error.stderr,
                status: error.status || 1,
                signal: null,
                error: error
            });
        }
    });
}


/**
 * 简化版 execSync，不抛出异常，返回结果对象
 */
function execSyncNoThrow(command: string, options?: ExecSyncOptions): ExecSyncResult {
    try {
        const stdout = execSync(command, options);
        return {
            stdout: stdout,
            stderr: null,
            status: 0,
            signal: null
        };
    } catch (error: any) {
        return {
            stdout: error.stdout,
            stderr: error.stderr,
            status: error.status || 1,
            signal: null,
            error: error
        };
    }
}
