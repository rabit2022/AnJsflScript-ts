// main.ts
import * as path from "path";
import { findRepoRoot } from "./nodejs/findPackage";

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
