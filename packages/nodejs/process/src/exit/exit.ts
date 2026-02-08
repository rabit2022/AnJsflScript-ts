/**
 * @file: exit.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {exitCode, Runtime} from './runtime';

function trace(msg: string) {
  try {
    // @ts-ignore 可选宿主日志
    if (typeof fl !== 'undefined' && fl.trace) {
      fl.trace(msg);
    }
  } catch {}
}

export function exitInner(rt: Runtime, code?: number): never {
  if (rt.exited) {
    throw new Error('Process already exited');
  }

  const finalCode =
    typeof code === 'number' ? code : exitCode;

  rt.exited = true;

  if (finalCode !== 0) {
    trace(`Process exited with code ${finalCode}`);
  }

  for (const fn of rt.handlers.beforeExit) {
    try {
      fn(finalCode);
    } catch {}
  }

  for (const fn of rt.handlers.exit) {
    try {
      fn(finalCode);
    } catch {}
  }

  throw new Error(`Process.exit(${finalCode})`);
}
