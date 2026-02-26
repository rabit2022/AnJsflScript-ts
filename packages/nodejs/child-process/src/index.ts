/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// 导出常用方法
import ChildProcess from "./command";

export const execSync = ChildProcess.execSync;
export const exec = ChildProcess.exec;
export const spawnSync = ChildProcess.spawnSync;
export const execSyncNoThrow = ChildProcess.execSyncNoThrow;

// 默认导出
export default ChildProcess;

// 使用示例
/*
// 示例 1: 基本使用
try {
    const result = execSync('echo "Hello, World!"', { encoding: 'utf8' });
    alert(result); // "Hello, World!"
} catch (error) {
    alert('Command failed: ' + error.message);
}

// 示例 2: 获取 Buffer
const bufferResult = execSync('echo "Binary data"', { encoding: 'buffer' });

// 示例 3: 异步执行
exec('ls -la').then(result => {
    if (result.error) {
        alert('Error: ' + result.error.message);
    } else {
        alert('Output: ' + result.stdout.toString());
    }
});

// 示例 4: 不抛出异常
const safeResult = execSyncNoThrow('unknown-command');
if (safeResult.error) {
    alert('Command failed with status: ' + safeResult.status);
}
*/
