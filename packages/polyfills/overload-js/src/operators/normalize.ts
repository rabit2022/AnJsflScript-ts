/**
 * @file: normalize.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

export function normalizeRules(input: any): any {
    if (Array.isArray(input)) return input.map(normalizeRules);
    if (typeof input === "object" && input !== null) {
        const out: any = {};
        for (const k in input) {
            out[k] = normalizeRules(input[k]);
        }
        return out;
    }
    return input;
}
