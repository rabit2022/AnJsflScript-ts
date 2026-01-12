// clearOutputDirs.js
import { DIST, BUSINESS_OUT, LIB_OUT } from "../ProjectFileDir.js";
import { rm } from "fs/promises";
import { resolve } from "path";

/**
 * 删除构建输出目录
 */
async function clearOutputDirs() {
    const dirs = [DIST, LIB_OUT, BUSINESS_OUT].map((dir) => resolve(dir));

    for (const dir of dirs) {
        try {
            await rm(dir, { recursive: true, force: true });
            console.log(`✅ 已删除: ${dir}`);
        } catch (err) {
            // 如果目录不存在，force: true 会静默忽略，但某些系统可能仍报错
            if (err.code !== "ENOENT") {
                console.warn(`⚠️ 删除失败 (${dir}):`, err.message);
            } else {
                console.log(`ℹ️ 目录不存在，跳过: ${dir}`);
            }
        }
    }
}

// 如果作为独立脚本运行
if (typeof require !== "undefined" && require.main === module) {
    clearOutputDirs().catch(console.error);
}

export { clearOutputDirs };
