// walk.ts
import * as fs from "fs/promises";
import * as path from "path";
import { minimatch } from "minimatch"; // npm i minimatch @types/minimatch

/* ---------- 类型定义 ---------- */
export interface NameRule {
    full?: string[]; // 精确全名
    part?: string[]; // 子串
    wc?: string[]; // 通配符
}

export interface ScanSpec {
    roots: string[]; // 起始根目录
    dirBlack?: NameRule;
    dirWhite?: NameRule;
    fileBlack?: NameRule;
    fileWhite?: NameRule;
}

/* ---------- 工具：单条规则是否命中 ---------- */
function match(name: string, rule?: NameRule): boolean {
    if (!rule) return false;
    return (
        (rule.full?.includes(name) ?? false) ||
        (rule.part?.some((s) => name.includes(s)) ?? false) ||
        (rule.wc?.some((p) => minimatch(name, p)) ?? false)
    );
}

/* ---------- 目录/文件是否放行 ---------- */
function dirOk(name: string, spec: ScanSpec): boolean {
    if (match(name, spec.dirBlack)) return false; // 黑名单优先
    const hasWhite =
        spec.dirWhite &&
        (spec.dirWhite.full?.length ||
            spec.dirWhite.part?.length ||
            spec.dirWhite.wc?.length);
    if (!hasWhite) return true; // 无白名单=直接过
    return match(name, spec.dirWhite);
}

function fileOk(name: string, spec: ScanSpec): boolean {
    if (match(name, spec.fileBlack)) return false;
    const hasWhite =
        spec.fileWhite &&
        (spec.fileWhite.full?.length ||
            spec.fileWhite.part?.length ||
            spec.fileWhite.wc?.length);
    if (!hasWhite) return true;
    return match(name, spec.fileWhite);
}

/* ---------- 递归遍历 ---------- */
export async function* walk(spec: ScanSpec): AsyncIterable<string> {
    for (const root of spec.roots) {
        const stat = await fs.stat(root);
        if (!stat.isDirectory()) continue;
        const queue: string[] = [root];
        while (queue.length) {
            const dir = queue.pop()!;
            const entries = await fs.readdir(dir, { withFileTypes: true });
            for (const ent of entries) {
                const full = path.join(dir, ent.name);
                if (ent.isDirectory()) {
                    if (dirOk(ent.name, spec)) queue.push(full);
                } else if (ent.isFile() && fileOk(ent.name, spec)) {
                    yield full;
                }
            }
        }
    }
}

/* ---------- 示例 ---------- */
if (require.main === module) {
    (async () => {
        const cfg: ScanSpec = {
            roots: [String.raw`H:\project\godot\anti\MyCardIsBetterThanYourCard\code`],
            dirBlack: {
                full: ["__pycache__"],
                part: ["cache"],
                wc: ["*cache*"]
            },
            fileWhite: { part: [".cs"] },
            fileBlack: { part: ["test"] }
        };

        for await (const p of walk(cfg)) console.log(p);
    })();
}
