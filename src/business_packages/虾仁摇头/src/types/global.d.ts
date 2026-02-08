/**
 * @file: global.d.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// 为不同文件类型声明模块
declare module '*.xml' {
    const content: string;
    export default content;
}

declare module '*.txt' {
    const content: string;
    export default content;
}

declare module '*.html' {
    const content: string;
    export default content;
}

declare module '*.glsl' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}



