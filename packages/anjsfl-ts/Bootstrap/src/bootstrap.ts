import {SCRIPT_LOAD_QUEUE} from "./FirstRun/config";
import {importFlashScripts} from "./FirstRun/importFlashScripts";

const $keys = require("object-keys");

export function bootstrap() {
    try {
        const scriptPaths = $keys(SCRIPT_LOAD_QUEUE).map(function (key: string) {
            return SCRIPT_LOAD_QUEUE[key];
        });

        importFlashScripts(...scriptPaths);

        // fl.trace("[Bootstrap] All scripts loaded successfully.");
    } catch (e) {
        const errorMessage = (e as Error).message;
        fl.trace(`[Bootstrap] CRITICAL ERROR: Initialization failed.`);
        fl.trace(`[Bootstrap] Details: ${errorMessage}`);

        // 抛出错误停止后续所有操作
        throw e;
    }
};
