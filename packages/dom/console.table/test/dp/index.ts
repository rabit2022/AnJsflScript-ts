/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { ConsoleTablePrinter } from "./tablePrinter";

const c = new ConsoleTablePrinter(2);
c.table([{ name: "Alice", age: 30 }], ["name", "age"]);
