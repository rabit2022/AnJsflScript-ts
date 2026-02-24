// tools/copy-js-to-jsfl.mjs
import { copyFileSync } from 'fs';
import { resolve } from 'path';
import {CUR_DIST_INDEXJS_FILE, CUR_DIST_INDEXJSFL_FILE} from "../ProjectFileDir";

const src = CUR_DIST_INDEXJS_FILE;
const dest = CUR_DIST_INDEXJSFL_FILE;

copyFileSync(src, dest);
console.log('✅ Copied dist/index.js → dist/index.jsfl');