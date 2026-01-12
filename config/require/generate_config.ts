/* ---------- 4. 运行 ---------- */
import { buildRequireConfig } from "./generate_require_config";
import { buildTsConfig } from "./generate_ts_config";

if (require.main === module) {
    (async () => {
        await buildRequireConfig();
        await buildTsConfig();
    })();
}
