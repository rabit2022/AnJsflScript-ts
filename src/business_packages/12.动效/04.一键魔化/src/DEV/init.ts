/**
 * @file: init.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as log from "loglevel";
import { IsFlash } from "./env";

if (!IsFlash()) {
    log.setLevel(log.levels.TRACE);
}
