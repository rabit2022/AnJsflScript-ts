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

// package.json
export const PACKAGE_JSON_FILE = path.resolve(CURRENT_PROJECT, "package.json");
export const PACKAGE_JSON5_FILE = path.resolve(CURRENT_PROJECT, "package.comments.json5");

// console.log(PACKAGE_JSON_FILE)

export const CUR_OUT = path.resolve(CURRENT_PROJECT, "out");

export const PACKALLJS_FILE = path.resolve(CUR_OUT, "packAll.js");
export const PACKALLJSFL_FILE = path.resolve(CUR_OUT, "packAll.jsfl");

export const CUR_SRC = path.resolve(CURRENT_PROJECT, "src");

export const CUR_INDEXTS_FILE = path.resolve(CUR_SRC, "index.ts");

export const CUR_DIST = path.resolve(CURRENT_PROJECT, "dist");

export const CUR_DIST_INDEXJS_FILE = path.resolve(CUR_DIST, "index.js");
export const CUR_DIST_INDEXJSFL_FILE = path.resolve(CUR_DIST, "index.jsfl");
