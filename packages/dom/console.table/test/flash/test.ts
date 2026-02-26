/**
 * @file: test.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// ===== 示例用法（开发时可保留，发布时建议移除） =====
import { tableToString } from "../../src";
// import * as console from "node:console";

const users = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 35 }
];

console.table(users);
console.table(users, ["name", "age"]);
console.table(["apple", "banana"]);
console.table({ foo: "bar", count: 42, active: true });
