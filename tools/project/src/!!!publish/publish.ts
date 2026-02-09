import {rm, unlink} from 'fs/promises';
import path from "path";
import console from "node:console";
import {ScanSpec, walk, walkDir} from "../nodejs/walk";
import {PACKAGES} from "../ProjectFileDir";
import {toPackageModules} from "../require/toPackageModules";

const PUBLISH_AnJsflScripts = "H:/project/js/AnJsflScript-ts - 副本"

// 直接删除文件夹，文件
async function step1() {

    const DIRS = [".git",".idea", ".run", "dist", "node_modules", "./src/business","./src/business_packages", "./src/lib/core",
        "./src/test", "./third/checker", "tools", "types", "config/codestyle", "config/log"];
    const FILES = [".eslintrc.json", ".gitattributes", ".gitignore", ".npmrc", "jest.config.js", "package.json5", "tsconfig.json",
        "tsconfig.tsbuildinfo"];
    for (const dir of DIRS) {
        let real_dir = path.resolve(PUBLISH_AnJsflScripts, dir);
        console.log(real_dir);
        try {
            await rm(real_dir, {
                recursive: true, // 递归删除内容
                force: true      // 即使不存在也不报错（可选）
            });
            console.log(real_dir + '  文件夹已成功删除');
        } catch (err) {
            console.error('删除失败:', real_dir);
        }

    }
    for (const file of FILES) {
        let real_file = path.resolve(PUBLISH_AnJsflScripts, file);

        try {
            await unlink(real_file);

            console.log(real_file + '  文件已成功删除');
        } catch (err) {
            console.error('删除失败:', real_file);
        }
    }

}

// packages
async function step2() {
    const DIRS: ScanSpec = {
        roots: [PACKAGES],
        // dirBlack: {part: ["node_modules"]},
        dirWhite: {part: ["node_modules",".idea","test","tools",]}
        // fileWhite: {part: ["modules.json"]}
    };


    // const map: Record<string, string> = {};
    for await (const p of walkDir(DIRS)){
        console.log(p)
    }


}


if (typeof require !== "undefined" && require.main === module) {
    (async () => {
        // await step1();
        await step2();
    })();
}