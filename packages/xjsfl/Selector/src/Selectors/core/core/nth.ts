/**
 * @file: nth.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

export function nth<T>(items: T[], expression: string): T[] {
    const matcher = parseNth(expression);
    if (!matcher) return [];

    return items.filter((_, i) => matcher(i));
}

function parseNth(expression: string): ((i: number) => boolean) | null {
    const exp = expression.trim();

    // 特殊关键字
    if (exp === "odd") return (i) => i % 2 === 0;
    if (exp === "even") return (i) => i % 2 === 1;
    if (exp === "random") return () => Math.random() < 0.5;

    return parseAnPlusB(exp);
}

// 2n+1
function parseAnPlusB(exp: string): ((i: number) => boolean) | null {
    const match = exp.match(/^(\d+)?n([+-]\d+)?$|^\d+$/);
    if (!match) return null;

    // 👉 纯数字：nth(3)
    if (!exp.includes("n")) {
        const index = parseInt(exp, 10);
        return (i) => i === index - 1;
    }

    const a = match[1] ? parseInt(match[1], 10) : 1;
    const b = match[2] ? parseInt(match[2], 10) : 0;

    return (i) => {
        const pos = i + 1;
        return (pos - b) % a === 0 && pos >= b;
    };
}
