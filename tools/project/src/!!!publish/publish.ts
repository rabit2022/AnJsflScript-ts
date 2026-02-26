import { rm, unlink } from "fs/promises";
import path from "path";
import console from "node:console";
import { ScanSpec, walk } from "../nodejs/walk";
import * as fs from "fs";

const PUBLISH_AnJsflScripts = "H:/project/js/AnJsflScript-ts - 副本";

const PUBLISH_PACKAGES = path.join(PUBLISH_AnJsflScripts, "packages");

function removeEmptyDirs(dir: string) {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
            removeEmptyDirs(fullPath); // 递归子目录
        }
    }

    // 检查当前目录是否为空
    const remaining = fs.readdirSync(dir);
    if (remaining.length === 0) {
        console.log("📂 删除空文件夹:", dir);
        fs.rmdirSync(dir);
    }
}

// 直接删除文件夹，文件
async function step1() {
    const DIRS = [
        ".git",
        ".idea",
        ".run",
        "dist",
        "node_modules",
        "./src/business",
        "./src/business_packages",
        "./src/lib/core",
        "./src/test",
        "./third/checker",
        "tools",
        "types",
        "config/codestyle",
        "config/log"
    ];
    const FILES = [
        ".eslintrc.json",
        ".gitattributes",
        ".gitignore",
        ".npmrc",
        "jest.config.js",
        "package.json5",
        "tsconfig.json",
        "tsconfig.tsbuildinfo"
    ];
    for (const dir of DIRS) {
        let real_dir = path.resolve(PUBLISH_AnJsflScripts, dir);
        console.log(real_dir);
        try {
            await rm(real_dir, {
                recursive: true, // 递归删除内容
                force: true // 即使不存在也不报错（可选）
            });
            console.log(real_dir + "  文件夹已成功删除");
        } catch (err) {
            console.error("删除失败:", real_dir);
        }
    }
    for (const file of FILES) {
        let real_file = path.resolve(PUBLISH_AnJsflScripts, file);

        try {
            await unlink(real_file);

            console.log(real_file + "  文件已成功删除");
        } catch (err) {
            console.error("删除失败:", real_file);
        }
    }
}

// packages
async function step2() {
    // 保留的文件
    const DIRS: ScanSpec = {
        roots: [PUBLISH_PACKAGES],
        // dirBlack: {part: ["node_modules"]},
        fileWhite: { part: [".jsfl", "LICENSE", "package.json"] }
    };
    const filesToKeep: string[] = [];
    for await (const file of walk(DIRS)) {
        filesToKeep.push(file);
    }

    // 所有的文件
    const All: ScanSpec = {
        roots: [PUBLISH_PACKAGES]
        // dirBlack: {part: ["node_modules"]},
    };
    const existingFiles: string[] = [];
    for await (const file of walk(All)) {
        existingFiles.push(file);
    }

    // 转为 Set 提升查找性能
    const keepSet = new Set(filesToKeep.map((p) => p.replace(/\\/g, "/"))); // 统一斜杠
    const existingNormalized = existingFiles.map((p) => p.replace(/\\/g, "/"));

    // 删除其他
    for (const file of existingNormalized) {
        if (!keepSet.has(file)) {
            console.log("🗑️ 删除多余文件:", file);
            fs.unlinkSync(file);
        }
    }
}

if (typeof require !== "undefined" && require.main === module) {
    (async () => {
        await step1();
        await step2();

        // 执行
        removeEmptyDirs(PUBLISH_AnJsflScripts);
    })();
}
