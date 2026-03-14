/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */

import {
    assert,
    count,
    countReset,
    group,
    groupEnd,
    debug,
    log,
    info,
    warn,
    error,
    file,
    clear,
    resetAll,
    time,
    timeEnd
} from "./core";
import { EnhancedConsole } from "../global/console";

EnhancedConsole.assert = assert;
EnhancedConsole.count = count;
EnhancedConsole.countReset = countReset;
EnhancedConsole.group = group;
EnhancedConsole.groupEnd = groupEnd;
EnhancedConsole.debug = debug;
EnhancedConsole.log = log;
EnhancedConsole.info = info;
EnhancedConsole.warn = warn;
EnhancedConsole.error = error;
// @ts-ignore
EnhancedConsole.file = file;
EnhancedConsole.clear = clear;
// @ts-ignore
EnhancedConsole.resetAll = resetAll;
EnhancedConsole.time = time;
EnhancedConsole.timeEnd = timeEnd;

export * from "./core";
