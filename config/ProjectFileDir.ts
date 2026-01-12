// main.ts
import * as path from "path";

export const $ProjectFileDir$ = path.resolve(__filename, "../../");

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
const DIST = path.resolve($ProjectFileDir$, "dist");
const DIST_LIB = path.resolve(DIST, "lib");

export const DIST_BUSINESS = path.resolve(DIST, "business");
export const DIST_LIB_CORE = path.resolve(DIST_LIB, "core");
export const DIST_LIB_OUT = path.resolve(DIST_LIB, "out");

// config
export const REQUIRE_CONFIG_FILE = path.resolve(__dirname, "require/require.config.jsfl");
export const TS_CONFIG_FILE = path.resolve($ProjectFileDir$, "tsconfig.json");

// console.log(REQUIRE_CONFIG_FILE);
// console.log(TS_CONFIG_FILE);
