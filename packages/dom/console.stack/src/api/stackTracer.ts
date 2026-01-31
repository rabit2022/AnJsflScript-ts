import { Options, SaveData } from '../types';
import { parseStack } from '../core/parser';
import { formatFrames } from '../core/formatter';
import { HistoryStore } from '../storage/historyStore';

export class StackTracer {

  private store = new HistoryStore();

  private defaults: Required<Options> = {
    includeSource: false,
    includeArgs: false,
    depth: 5,
    skipSelf: true,
    skipRequireJs: true,
    format: 'table',
    logToFile: true
  };

  trace(
    input: unknown = 'Stack trace',
    options?: Options
  ) {

    const opt = { ...this.defaults, ...options };

    const message =
      input instanceof Error
        ? input.message
        : String(input);

    const error = new Error(message);

    const frames = parseStack(error, opt);

    const output = formatFrames(frames, opt.format);

    const record: SaveData = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      message,
      frames,
      count: 1
    };

    console.log('Stack Trace:');
    console.log(output);

    if (opt.logToFile) {
      this.store.save(record);
    }
  }

  history() {
    return this.store.getAll();
  }

  clear() {
    this.store.clear();
  }
}