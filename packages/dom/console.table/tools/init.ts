import {fixTsConfigPaths} from "./init/init_tsconfig_types";
import {set_module_name} from "./init/init_module_name";


// ========== 配置区 ==========
const MODULE_NAME = "table"; // ←←← 手动修改这里！
// ==========================

if (require.main === module) {
    (async () => {
        await fixTsConfigPaths();
        await set_module_name(MODULE_NAME)

    })();
}