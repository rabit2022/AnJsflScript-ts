/**
 * @file: types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

export interface AnJsflScriptAPI {
    importFlashScripts: (...paths: string[]) => void;
    $ProjectFileDir$: string;
}

declare global {
    interface Window {
        AnJsflScript?: AnJsflScriptAPI;
    }
}
