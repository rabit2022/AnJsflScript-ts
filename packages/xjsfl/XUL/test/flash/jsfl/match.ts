/**
 * @file: match.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

type MatchResult = string[] | Record<string, any>;

export function match(
    str: string,
    rx: RegExp,
    matchNames?: string | string[],
    captureIndex: boolean = false
): MatchResult[] | null {
    const flags = `g${rx.multiline ? "m" : ""}${rx.ignoreCase ? "i" : ""}`;
    const rxGlobal = new RegExp(rx.source, flags);
    const rxLocal = new RegExp(rx.source, rx.flags.replace("g", ""));

    let matchesGlobal: MatchResult[] = [];

    // Normalize matchNames
    const keys = matchNames
        ? typeof matchNames === "string"
            ? toArray(matchNames.trim(), /\s*,\s*/g)
            : matchNames
        : null;

    if (captureIndex) {
        let exec: RegExpExecArray | null;

        while ((exec = rxGlobal.exec(str)) !== null) {
            if (exec[0] === "") break;

            let local: any[] = keys ? [exec.index] : [];

            for (let i = 0; i < exec.length; i++) {
                local.push(exec[i]);
            }

            if (keys) {
                const namedKeys = ["matchIndex", "match", ...keys];
                matchesGlobal.push(combine(namedKeys, local));
            } else {
                local.push(exec.index);
                matchesGlobal.push(local);
            }
        }

        rxGlobal.lastIndex = 0;
    } else {
        const globalMatches = str.match(rxGlobal);
        if (!globalMatches) return null;

        for (const m of globalMatches) {
            const local = m.match(rxLocal);
            if (!local || local[0] === "") break;

            if (keys) {
                matchesGlobal.push(combine(["match", ...keys], local));
            } else {
                matchesGlobal.push(local);
            }
        }
    }

    return matchesGlobal.length ? matchesGlobal : null;
}

export function combine(keys: string[] | string, values: any[]): Record<string, any> {
    const keyArr = typeof keys === "string" ? keys.trim().split(/\s*,\s*/g) : keys;

    return Object.fromEntries(keyArr.map((key, i) => [key, values[i]]));
}

export function toArray(
    value: string | string[],
    delim: RegExp | string = /\W+/
): string[] {
    if (Array.isArray(value)) return value;

    if (typeof value !== "string") {
        throw new TypeError("toArray expects a string or array");
    }

    const trimmed = value.trim();

    if (delim instanceof RegExp) {
        return trimmed.split(delim);
    } else {
        const escaped = delim.replace(/([\\|*+])/g, "\\$1");
        const rxTrim = new RegExp(`^[\\s${escaped}]+|[\\s${escaped}]+$`, "g");
        const rxSplit = new RegExp(`\\s*${escaped}+\\s*`, "g");
        return trimmed.replace(rxTrim, "").split(rxSplit);
    }
}

// export function toArray1(
//     value: string,
// ): string[] {
//
//     // const trimmed = value.trim();
//     // let delim: RegExp = /\W+/
//     //
//     // return trimmed.split(delim);
//
//     return value.trim().split(/\s*,\s*/g)
// }
//
// console.log(toArray1("a,b,c,d"))

// const str = "apple banana orange";
// const rx = /\w+/g;
//
// const result = match(str, rx);
//
// console.log(result);

// const str = "John:25, Mike:30";
// const rx = /(\w+):(\d+)/g;
//
// const result = match(str, rx);
//
// console.log(result);

// const str = "John:25, Mike:30";
// const rx = /(\w+):(\d+)/g;
//
// const result = match(str, rx, ["name", "age"]);
//
// console.log(result);

// const str = "cat bat rat";
// const rx = /(\w+)at/g;
//
// const result = match(str, rx, ["word"], true);
//
// console.log(result);

// const url = "https://test.com?id=123&name=tom&age=20";
// const rx = /[?&](\w+)=([^&]+)/g;
//
// const result = match(url, rx, ["key", "value"]);
//
// console.log(result);

// const logs = `
// [INFO] 2025-01-01 Start
// [ERROR] 2025-01-02 Failed
// `;
//
// const rx = /\[(\w+)\]\s+([\d-]+)\s+(.*)/g;
//
// const result = match(logs, rx, ["level", "date", "message"]);
//
// console.log(result);
