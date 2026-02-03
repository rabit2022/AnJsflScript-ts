import {StackTracer} from './api/stackTracer';


export const stackTracer = new StackTracer();


(console as any).stack = (...args: Parameters<typeof stackTracer.trace>) => {
    return stackTracer.trace(...args);
};