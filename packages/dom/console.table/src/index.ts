// setupConsole.ts
import { tableToString, CustomConsole } from "./table";

// 创建自定义 console 实例
const customConsole = new CustomConsole(1);

// 覆盖全局 console.table（仅在浏览器环境）
if (typeof window !== 'undefined' && (window as any).console) {
    // 注意：c.table 是一个方法，要绑定 this，否则内部 this.#indentLevel 会丢失！
    (window as any).console.table = customConsole.table.bind(customConsole);
}

// 可选：导出工具函数供其他地方使用
export { tableToString };