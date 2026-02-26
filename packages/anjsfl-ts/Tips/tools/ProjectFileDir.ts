/**
 * @file: ProjectFileDir.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

// main.ts
import * as path from "path";
import { findNearestPackageJson, findRepoRoot } from "./nodejs/findPackage";

// export const $ProjectFileDir$ = path.resolve(__filename, "../../../../");
export const $ProjectFileDir$ = findRepoRoot(__dirname);

// third 文件夹
export const THIRD = path.resolve($ProjectFileDir$, "third");

// src 文件夹
const SRC = path.resolve($ProjectFileDir$, "src");
const LIB = path.resolve(SRC, "lib");

export const BUSINESS = path.resolve(SRC, "business");
export const LIB_CORE = path.resolve(LIB, "core");
export const LIB_OUT = path.resolve(LIB, "out");

export const BUSINESS_OUT = path.resolve($ProjectFileDir$, "out");

// dist  文件夹
export const DIST = path.resolve($ProjectFileDir$, "dist");
const DIST_LIB = path.resolve(DIST, "lib");

export const DIST_BUSINESS = path.resolve(DIST, "business");
export const DIST_LIB_CORE = path.resolve(DIST_LIB, "core");
export const DIST_LIB_OUT = path.resolve(DIST_LIB, "out");

// config
export const REQUIRE_CONFIG_FILE = path.resolve(
    $ProjectFileDir$,
    "config/require/require.config.jsfl"
);
export const TS_CONFIG_FILE = path.resolve($ProjectFileDir$, "tsconfig.json");

export const PACKAGES = path.resolve($ProjectFileDir$, "packages");

// ==============================================================

export const CURRENT_PROJECT = findNearestPackageJson(process.cwd())!.dir;

// console.log(CURRENT_PROJECT);
export const WEBPACK_CONFIG_FILE = path.resolve(CURRENT_PROJECT, "webpack.config.js");
export const WEBPACK_CONFIG_TEST_FILE = path.resolve(CURRENT_PROJECT, "webpack.test.js");

// path.join(PROJECT_DIR, "tsconfig.json"),
//     path.join(PROJECT_DIR, "tsconfig.test.json")

export const TS_CONFIG = path.resolve(CURRENT_PROJECT, "tsconfig.json");
export const TS_CONFIG_TEST = path.resolve(CURRENT_PROJECT, "tsconfig.test.json");

export const CUR_OUT = path.resolve(CURRENT_PROJECT, "out");
