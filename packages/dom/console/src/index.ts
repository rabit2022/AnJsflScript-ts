/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import "./console";
import "./table";
import "./stack";
import "./inspect";
import "./json";
import { EnhancedConsole } from "./global/console";

if (typeof window.console === "undefined") {
    window.console = EnhancedConsole;
}

// import * as console from "console";
export * from "./console";
export { table } from "./table";
export { stack } from "./stack";
