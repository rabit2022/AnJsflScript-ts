import * as ErrorStackParser from 'error-stack-parser';
import { Options, ConsoleStackFrame } from '../types';

export function parseStack(
  error: Error,
  options: Required<Options>
): ConsoleStackFrame[] {

  let frames = ErrorStackParser.parse(error);

  if (options.skipSelf) {
    frames = frames.filter(f => !f.functionName?.includes('stack'));
  }

  if (options.skipRequireJs) {
    frames = frames.filter(f => !f.fileName?.includes('requirejs'));
  }

  if (options.depth) {
    frames = frames.slice(0, options.depth);
  }

  return frames.map(f => ({
    functionName: f.functionName ?? '<anonymous>',
    fileName: f.fileName ?? '',
    lineNumber: f.lineNumber ?? 0,
    timestamp: new Date().toISOString(),
    message: error.message,
    source: options.includeSource ? f.source : undefined,
    args: options.includeArgs ? f.args : undefined
  }));
}
