import {createRuntime} from './runtime';
import {exitInner} from "./exit";
import {onceExit, onExit} from "./handlers";

/**
 * 模块私有 runtime
 * 等价于 Node 的 process 单例
 */
const rt = createRuntime();

export function exit(code?: number) {
    return exitInner(rt, code);
}

export function on(event: 'beforeExit' | 'exit', fn: (code: number) => void) {
    return onExit(rt, event, fn);
}

export function once(event: 'beforeExit' | 'exit', fn: (code: number) => void) {
    return onceExit(rt, event, fn);
}

export function off(event: 'beforeExit' | 'exit', fn: (code: number) => void) {
    const list = rt.handlers[event];
    const i = list.indexOf(fn);
    if (i >= 0) list.splice(i, 1);
}


export {exitCode} from './runtime';

