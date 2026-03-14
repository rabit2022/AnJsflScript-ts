import { info, warn } from "./log";

let timers: Record<string, number> = {};

// ========================================================================
// 计时器方法
// ========================================================================

export function time(label: string = "default"): void {
    if (timers[label]) {
        warn('Timer "' + label + '" already exists.');
        return;
    }
    timers[label] = Date.now();
    info('Timer "' + label + '" started.');
}

export function timeEnd(label: string = "default"): void {
    if (!timers[label]) {
        warn('Timer "' + label + '" does not exist.');
        return;
    }
    const duration = Date.now() - timers[label];
    delete timers[label];
    info('Timer "' + label + '": ' + duration + "ms");
}

/**
 * 获取所有计时器
 */
export function getTimers(): Record<string, number> {
    return { ...timers };
}

/**
 * 重置所有 计时器
 */
export function resetTimers(): void {
    timers = {};
    info("All timers and counters have been reset.");
}
