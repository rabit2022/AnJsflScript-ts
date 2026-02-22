// var win32 = process.platform === 'win32'


// 在 Windows 上输出: 'win32'
// 在 macOS 上输出: 'darwin'
// 在 Linux 上输出: 'linux'
export const platform = (function () {
    // 检测是否在 JSFL 环境中
    if (typeof AnJsflScript !== 'undefined' && AnJsflScript.app) {
        // 在 Windows 上输出: 'win'
// 在 macOS 上输出: 'mac'
        const jsflPlatform = AnJsflScript.app.platform;

        // JSFL 返回: 'Windows' 或 'Macintosh'
        if (jsflPlatform === 'win') {
            return 'win32';
        } else if (jsflPlatform === 'mac') {
            return 'darwin';
        }
    }

    // 未知环境
    return 'unknown';
})();