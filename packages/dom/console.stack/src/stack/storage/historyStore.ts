/**
 * @file: historyStore.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as fs from "fs";
import { SaveData } from "../types";
import { Paths } from "../config/paths";
import { FileStore } from "./fileStore";

export class HistoryStore {
    save(record: SaveData, output: string) {
        const store = new FileStore();

        store.writeCurrent(record);
        store.writeCurrentText(output);

        let all = store.readAll();

        const exist = all.find(
            (r) =>
                r.message === record.message &&
                JSON.stringify(r.frames) === JSON.stringify(record.frames)
        );

        if (exist) {
            exist.count++;
            exist.timestamp = record.timestamp;
        } else {
            all.push(record);
        }

        store.writeAll(all);
        store.appendAllText(output);
    }

    clear() {
        Object.values(Paths).forEach((p) => {
            if (fs.existsSync(p)) fs.unlinkSync(p);
        });
    }
}
