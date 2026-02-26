/**
 * @file: init.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import { fixTsConfigPaths } from "./init/init_tsconfig_types";
import { set_module_name } from "./init/init_module_name";
import { exclude_require_config } from "./exclude_packages/exclude_require_config";

// ========== 配置区 ==========
const MODULE_NAME = "test"; // ←←← 手动修改这里！
// ==========================

if (require.main === module) {
    (async () => {
        // 类型声明路径
        fixTsConfigPaths();
        // 模块名字
        set_module_name(MODULE_NAME);
        // 不打包模块，所有自定义模块都会不打包
        exclude_require_config();
    })();
}
