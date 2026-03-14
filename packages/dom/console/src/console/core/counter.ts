/**
 * @file: counter.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { info, warn } from "./log";
import { resetTimers } from "./timer";

let counters: Record<string, number> = {};

// ========================================================================
// 计数器方法
// ========================================================================

export function count(label: string = "default"): void {
    counters[label] = (counters[label] || 0) + 1;
    info('"' + label + '" was called ' + counters[label] + " times.");
}

export function countReset(label: string = "default"): void {
    if (counters[label] === undefined) {
        warn('Counter "' + label + '" does not exist.');
        return;
    }
    delete counters[label];
    info('Counter "' + label + '" has been reset.');
}
/**
 * 获取所有计数器
 */
export function getCounters(): Record<string, number> {
    return { ...counters };
}

/**
 * 重置所有 计数器
 */
export function resetCounters(): void {
    counters = {};
    info("All timers and counters have been reset.");
}
