/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 13:53
 * @project: AnJsflScript-ts
 * @description:
 */

import { cwd } from "./cwd";
import { process } from "../global/process";

process.cwd = cwd;

export { cwd };
