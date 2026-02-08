/**
 * @file: init.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {fixTsConfigPaths} from "./init/init_tsconfig_types";
import {set_module_name} from "./init/init_module_name";


// ========== 配置区 ==========
const MODULE_NAME = "child-process"; // ←←← 手动修改这里！
// ==========================

if (require.main === module) {
    (async () => {
        await fixTsConfigPaths();
        await set_module_name(MODULE_NAME)

    })();
}