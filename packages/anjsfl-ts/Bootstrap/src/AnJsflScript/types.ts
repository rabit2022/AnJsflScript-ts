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
    // $ProjectFileDir$: string;

    app: {
        platform: string;
        version: number;
        name: string;
        os: {
            mac: boolean;
            win: boolean;
        };
    };
    folders: {
        AnJsflScript: string;
        Log: string;
        flash: string;
        swf: string;
        "@xjsfl/XUL": string;
        [key: string]: string; // 允许其他字符串属性
    };
    [key: string]: any; // 允许动态添加其他属性
}

declare global {
    interface Window {
        AnJsflScript?: AnJsflScriptAPI;
    }
}
