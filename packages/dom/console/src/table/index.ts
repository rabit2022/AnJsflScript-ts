/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// setupConsole.ts
import { CustomTable, tableToString } from "./table";
import { EnhancedConsole } from "../global/console";

// 创建自定义 console 实例
export const customTable = new CustomTable(1);

export function table(...args: Parameters<typeof customTable.table>) {
    // const customConsole = new CustomTable(1);
    customTable.table(...args);
}

EnhancedConsole.table = table;

export { tableToString };
