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
