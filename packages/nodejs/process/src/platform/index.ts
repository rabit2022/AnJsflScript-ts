// var win32 = process.platform === 'win32'

const WIN = "win32", MAC = "darwin", LINUX = "linux", UNKNOWN = "unknown";

// 在 Windows 上输出: 'win32'
// 在 macOS 上输出: 'darwin'
// 在 Linux 上输出: 'linux'
export const platform = (function () {
    // 检测是否在 JSFL 环境中
    if (typeof AnJsflScript !== 'undefined' && AnJsflScript.app) {
        // 在 Windows 上输出: 'win'
// 在 macOS 上输出: 'mac'

        const currentOS = AnJsflScript.app.os;
        if (currentOS.win) {
            return WIN;
        } else if (currentOS.mac) {
            return MAC;
        }
    }

    // 未知环境
    return UNKNOWN;
})();