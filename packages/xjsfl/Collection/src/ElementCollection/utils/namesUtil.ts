/**
 * @file: namesUtil.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

export function getNextNameInfo(elements: Element[]): {
    baseName: string;
    nextNum: number;
    pad: number;
} {
    let maxNum = 0;
    let baseName = "Item";
    let pad = 0;

    for (const el of elements) {
        const match = el.name.match(/(.+?)_(\d+)$/);
        if (!match) continue;

        const [, name, numStr] = match;
        const num = Number(numStr);

        if (num > maxNum) {
            maxNum = num;
            baseName = name;
            pad = numStr.length;
        }
    }

    return {
        baseName,
        nextNum: maxNum === 0 ? 1 : maxNum + 1,
        pad
    };
}
