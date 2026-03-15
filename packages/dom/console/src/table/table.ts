/**
 * @file: table.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */
import { log } from "../console";
import { tableToString } from "./tableToString";

export class CustomTable {
    readonly _indentLevel: number;
    readonly _indentStr: string;
    readonly logToFile: boolean = true;
    // private historyStore = new HistoryStore();

    constructor(indentLevel = 0, indentStr = " ") {
        this._indentLevel = indentLevel;
        this._indentStr = indentStr;
    }

    table(...args: Parameters<typeof tableToString>): void {
        const table = tableToString(...args);
        const indent = this._indentStr.repeat(this._indentLevel);
        const message = table
            .split("\n")
            .map((line) => (line ? indent + line : ""))
            .join("\n");

        const record = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            message,
            count: 1
        };

        const output = `
Stack Trace:
${JSON.stringify(record, null, 2)}

${message}


    `;

        log(output);

        // if (this.logToFile) {
        //     this.historyStore.save(record, output);
        // }
    }
}
// ===== 示例用法（开发时可保留，发布时建议移除） =====
/*
const users = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35 }
];

const c = new CustomConsole(1);
c.table(users);
c.table(users, ['name', 'age']);
c.table(['apple', 'banana']);
c.table({ foo: 'bar', count: 42, active: true });
*/

/*
⚡admin LOG ❯❯
 ┌─────────┬─────────┬─────┬───────────────────┐
 │ (index) │ name    │ age │ email             │
 ├─────────┼─────────┼─────┼───────────────────┤
 │ 0       │ Alice   │ 25  │ alice@example.com │
 ├─────────┼─────────┼─────┼───────────────────┤
 │ 1       │ Bob     │ 30  │ bob@example.com   │
 ├─────────┼─────────┼─────┼───────────────────┤
 │ 2       │ Charlie │ 35  │ undefined         │
 └─────────┴─────────┴─────┴───────────────────┘


⚡admin LOG ❯❯
 ┌─────────┬─────────┬─────┐
 │ (index) │ name    │ age │
 ├─────────┼─────────┼─────┤
 │ 0       │ Alice   │ 25  │
 ├─────────┼─────────┼─────┤
 │ 1       │ Bob     │ 30  │
 ├─────────┼─────────┼─────┤
 │ 2       │ Charlie │ 35  │
 └─────────┴─────────┴─────┘


⚡admin LOG ❯❯
 ┌─────────┬────────┐
 │ (index) │ Value  │
 ├─────────┼────────┤
 │ 0       │ apple  │
 ├─────────┼────────┤
 │ 1       │ banana │
 └─────────┴────────┘


⚡admin LOG ❯❯
 ┌────────┬───────┐
 │ Key    │ Value │
 ├────────┼───────┤
 │ foo    │ bar   │
 ├────────┼───────┤
 │ count  │ 42    │
 ├────────┼───────┤
 │ active │ true  │
 └────────┴───────┘


 */
