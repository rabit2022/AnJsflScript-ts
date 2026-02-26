/**
 * @file: command.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { BufferEncoding, ExecSyncError, ExecSyncOptions, ExecSyncResult } from "./types";
import * as fs from "fs";

/**
 * 模仿 Node.js 的 child_process.execSync 方法
 */
class ChildProcess {
    /**
     * 同步执行命令
     */
    static execSync(command: string, options?: ExecSyncOptions): string {
        const opts: Required<ExecSyncOptions> = {
            cwd: "",
            env: {},
            encoding: "utf8",
            stdio: "pipe",
            timeout: 0,
            maxBuffer: 200 * 1024 * 1024, // 200MB
            shell: "",
            windowsHide: false,
            windowsVerbatimArguments: false,
            ...options
        };

        // 验证最大缓冲区
        if (opts.maxBuffer <= 0) {
            throw new Error("maxBuffer must be a positive number");
        }

        // 创建临时文件来捕获输出
        const tempDir = Folder.temp.fsName;
        const timestamp = Date.now();
        const randomStr = Math.random().toString(36).substr(2, 8);
        const tempOutputFile = `${tempDir}/execSync_${timestamp}_${randomStr}.txt`;
        const tempErrorFile = `${tempDir}/execSync_${timestamp}_${randomStr}_error.txt`;

        try {
            // 构建完整的命令
            let fullCommand: string;

            if (this.isWindows()) {
                // Windows 系统
                if (opts.shell) {
                    fullCommand = `${opts.shell} /c "${command}"`;
                } else {
                    fullCommand = `cmd /c "${command}"`;
                }
                // const output = execSync(`powershell -Command "${command}"`, {
                // encoding: 'utf8',
                // stdio: 'pipe'
                // });

                // 重定向输出到文件
                const redirectCmd = `${fullCommand} > "${tempOutputFile}" 2> "${tempErrorFile}"`;
                const exitCode = FLfile.runCommandLine(redirectCmd);

                // 检查执行结果
                if (exitCode !== 0 && exitCode !== undefined && exitCode !== null) {
                    throw new Error(`Command failed with exit code ${exitCode}`);
                }
            } else {
                // Unix/Linux/Mac 系统
                const shell = opts.shell || "/bin/sh";
                fullCommand = `${shell} -c "${this.escapeShellArg(command)}"`;

                // 重定向输出到文件
                const redirectCmd = `${fullCommand} > "${tempOutputFile}" 2> "${tempErrorFile}"`;
                const exitCode = FLfile.runCommandLine(redirectCmd);

                if (exitCode !== 0 && exitCode !== undefined && exitCode !== null) {
                    throw new Error(`Command failed with exit code ${exitCode}`);
                }
            }

            // 检查输出文件是否存在
            if (!FLfile.exists(tempOutputFile)) {
                throw new Error("Output file was not created");
            }

            // 读取输出文件
            const output = fs.readFileSync(tempOutputFile, opts.encoding);

            // 检查输出大小
            if (Buffer.byteLength(output) > opts.maxBuffer) {
                throw new Error(
                    `maxBuffer size exceeded (${Buffer.byteLength(output)} > ${opts.maxBuffer})`
                );
            }

            // 如果有错误输出，检查是否应该抛出
            if (FLfile.exists(tempErrorFile)) {
                const errorOutput = this.readFileSync(tempErrorFile, opts.encoding);
                if (errorOutput && errorOutput.trim().length > 0) {
                    // 对于非零退出码，抛出包含错误输出的异常
                    if (exitCode !== 0) {
                        const error = new Error(`Command failed: ${errorOutput.trim()}`);
                        (error as any).stderr = errorOutput;
                        (error as any).stdout = output;
                        (error as any).status = exitCode;
                        throw error;
                    }
                }
            }

            return opts.encoding === "buffer" ? Buffer.from(output) : output;
        } catch (error) {
            throw error;
        } finally {
            // 清理临时文件
            this.cleanupTempFiles([tempOutputFile, tempErrorFile]);
        }
    }

    // /**
    //  * 异步执行命令（模仿 exec 但不支持回调，返回 Promise）
    //  */
    // static exec(command: string, options?: ExecSyncOptions): Promise<ExecSyncResult> {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             const stdout = this.execSync(command, { ...options, encoding: 'buffer' });
    //             resolve({
    //                 stdout: stdout,
    //                 stderr: null,
    //                 status: 0,
    //                 signal: null
    //             });
    //         } catch (error: any) {
    //             resolve({
    //                 stdout: error.stdout ,
    //                 stderr: error.stderr ,
    //                 status: error.status || 1,
    //                 signal: null,
    //                 error: error
    //             });
    //         }
    //     });
    // }

    /**
     * 以 spawn 风格执行命令（简化版）
     */
    static spawnSync(
        command: string,
        args?: string[],
        options?: ExecSyncOptions
    ): ExecSyncError {
        // 构建完整的命令字符串
        const fullCommand = args ? `${command} ${args.join(" ")}` : command;
        const result = this.execSync(fullCommand, options);

        return {
            pid: -1, // 在 ExtendScript 中无法获取真正的 PID
            output: [result],
            stdout: result,
            stderr: "",
            status: 0,
            signal: null
        };
    }

    /**
     * 检查当前系统是否为 Windows
     */
    private static isWindows(): boolean {
        return $.os.toLowerCase().indexOf("win") !== -1;
    }

    /**
     * 转义 shell 参数
     */
    private static escapeShellArg(arg: string): string {
        return arg.replace(/(["'$`\\])/g, "\\$1");
    }

    /**
     * 清理临时文件
     */
    private static cleanupTempFiles(files: string[]): void {
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
     * 简化版 execSync，不抛出异常，返回结果对象
     */
    static execSyncNoThrow(command: string, options?: ExecSyncOptions): ExecSyncResult {
        try {
            const stdout = this.execSync(command, { ...options, encoding: "buffer" });
            return {
                stdout: stdout,
                stderr: Buffer.from(""),
                status: 0,
                signal: null
            };
        } catch (error: any) {
            return {
                stdout: error.stdout || Buffer.from(""),
                stderr: error.stderr || Buffer.from(error.message),
                status: error.status || 1,
                signal: null,
                error: error
            };
        }
    }
}
