/**
 * @file: stackTracer.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { Options, SaveData } from "../types";
import { parseStack } from "../core/parser";
import { formatFrames } from "../core/formatter";
import { HistoryStore } from "../storage/historyStore";
import {log} from "../../console";

export class StackTracer {
    private historyStore = new HistoryStore();

    private defaults: Required<Options> = {
        includeSource: false,
        includeArgs: false,
        depth: 5,
        skipSelf: true,
        skipRequireJs: true,
        format: "table",
        logToFile: true,
        fuck: false
    };

    trace(input: unknown = "Stack trace", options?: Options) {
        const opt = { ...this.defaults, ...options };

        const message = input instanceof Error ? input.message : String(input);

        const error = new Error(message);

        const frames = parseStack(error, opt);

        let output = formatFrames(frames, opt.format);

        const record: SaveData = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            message,
            frames,
            count: 1
        };

        output = `Stack Trace:
id:${record.id} timestamp:${record.timestamp} message:${record.message} count:${record.count}

${output}


    `;

        log(output);

        if (opt.logToFile) {
            // console.log("log to file")

            this.historyStore.save(record, output);
        }
    }

    // history() {
    //   return this.historyStore.getAll();
    // }

    clear() {
        this.historyStore.clear();
    }
}
