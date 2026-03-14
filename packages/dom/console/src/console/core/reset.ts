/**
 * @file: reset.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { info } from "./log";
import { resetTimers } from "./timer";
import { resetCounters } from "./counter";

/**
 * 重置所有计时器和计数器
 */
export function resetAll(): void {
    resetTimers();
    resetCounters();
    info("All timers and counters have been reset.");
}
