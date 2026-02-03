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
