// flash TypeScript file test1.ts

import { execSync } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as process from "process";

const tempDir = `${AnJsflScript.folders.Log}cmd/`;
const logFolderPath = fileURLToPath(tempDir);

try {
    if (process.platform === 'win32') {
        execSync(`explorer "${logFolderPath}"`);
    } else if (process.platform === 'darwin') {
        execSync(`open "${logFolderPath}"`);
    } else {
        execSync(`xdg-open "${logFolderPath}"`);
    }
    console.log('已打开日志文件夹');
} catch (e) {
    console.error('无法自动打开文件夹', e);
}