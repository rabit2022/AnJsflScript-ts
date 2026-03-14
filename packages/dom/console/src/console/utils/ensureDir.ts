import * as path from "path";
import * as fs from "fs";

export function ensureDir(file: string): void {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}
