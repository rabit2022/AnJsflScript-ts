/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { inspect } from "./inspect";
import { EnhancedConsole } from "../global/console";

// @ts-ignore
EnhancedConsole.inspect = inspect;
