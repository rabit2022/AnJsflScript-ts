// src/core/normalizer.ts

import { Options, SaveData, StackMode } from '../types';
import { parseStack } from './parser';
import { formatFrames } from './formatter';

function isSaveData(input: any): input is SaveData {
  return (
    input &&
    typeof input === 'object' &&
    typeof input.message === 'string' &&
    Array.isArray(input.frames)
  );
}

export function normalizeInput(
  input: unknown,
  options: Required<Options>
): {
  record: SaveData;
  output: string;
  mode: StackMode;
} {

  /* ========= replay ========= */

  if (isSaveData(input)) {
    return {
      record: input,
      output: formatFrames(input.frames, options.format),
      mode: 'replay'
    };
  }

  /* ========= live ========= */

  const message =
    input instanceof Error
      ? input.message
      : String(input ?? 'Stack trace');

  const error = new Error(message);

  const frames = parseStack(error, options);

  const record: SaveData = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    message,
    frames,
    count: 1
  };

  return {
    record,
    output: formatFrames(frames, options.format),
    mode: 'live'
  };
}
