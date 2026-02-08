/**
 * @file: runtime.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { ExitHandlers } from './types';

export interface Runtime {
  // exitCode: number;
  handlers: ExitHandlers;
  exited: boolean;
}

export function createRuntime(): Runtime {
  return {
    // exitCode: 0,
    exited: false,
    handlers: {
      beforeExit: [],
      exit: [],
    },
  };
}

export const exitCode: number = 0;
