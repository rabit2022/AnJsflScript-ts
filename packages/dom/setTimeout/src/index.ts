// @ts-ignore

/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */

import { clearAllTimers, clearTimeout, setTimeout } from "./setTimeout";
import { clearInterval, setInterval } from "./setInterval";

const __setTimeout__ = {
    setTimeout,
    clearTimeout,
    clearAllTimers,
    setInterval,
    clearInterval
};

window.AnJsflScript.__setTimeout__ = __setTimeout__;

export { clearAllTimers, clearTimeout, setTimeout } from "./setTimeout";
export { clearInterval, setInterval } from "./setInterval";

// export default __setTimeout__;
