import { tableToString } from 'console.table';
import { ConsoleStackFrame } from '../types';

export function formatFrames(
  frames: ConsoleStackFrame[],
  format: 'table' | 'list' | 'json'
): string {

  switch (format) {
    case 'json':
      return JSON.stringify(frames, null, 2);

    case 'list':
      return frames
        .map((f, i) =>
          `${i + 1}. ${f.functionName} (${f.fileName}:${f.lineNumber})`
        )
        .join('\n');

    default:
      return tableToString(frames);
  }
}
