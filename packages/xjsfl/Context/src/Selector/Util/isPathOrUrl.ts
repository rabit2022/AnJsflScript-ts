export function isUrl(str: string): boolean {
    return /^[a-zA-Z]+:\/\//.test(str);
}

function isWindowsPath(str: string): boolean {
    return /^[a-zA-Z]:[\\/]/.test(str);
}

function isUnixPath(str: string): boolean {
    return /^\//.test(str);
}

function isFile(str: string): boolean {
    return /\.[a-zA-Z0-9]+$/.test(str);
}

export function isPathOrUrl(str: string): boolean {
    return isUrl(str) || isWindowsPath(str) || isUnixPath(str) || isFile(str);
}

// console.log(isPathOrUrl("file:///c|path/to.fla"))
// console.log(isPathOrUrl("C:\\test\\a.fla"))
// console.log(isPathOrUrl("/path/to/file.fla"))
// console.log(isPathOrUrl("element name"))
