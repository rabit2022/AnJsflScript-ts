import {URL} from 'url';

export function isFileUri(str:string) {
    if (!str || typeof str !== 'string') return false;

    try {
        const url = new URL(str.trim());
        // 只有当协议是 'file:' 时，才认为是 File URI
        return url.protocol === 'file:';
    } catch (e) {
        // 如果无法解析为 URL (例如普通路径 "C:\Users" 或相对路径 "./data")
        // 这里会抛出 TypeError，说明它不是一个标准的绝对 URI
        return false;
    }
}

// // --- 测试用例 ---
// const tests = [
//     'file:///c:/',             // ✅ true (File URI)
//     'file:///home/user/doc.txt', // ✅ true (File URI)
//     'FILE:///C:/Users',        // ✅ true (协议不区分大小写，但 new URL 处理后通常是小写)
//     "http://example.com",
//     'C:\\Windows\\System32',   // ❌ false (Windows 本地路径)
//     '/usr/bin/node',           // ❌ false (Linux/Mac 本地路径)
//     './config.json',           // ❌ false (相对路径)
//     'http://example.com',      // ❌ false (这是 http URI，不是 file URI)
// ];
//
// tests.forEach(input => {
//     console.log(`输入: "${input}" -> ${isFileUri(input)}`);
// });