// types.ts
export interface RangeConfig {
    start?: number;
    end?: number;
    step?: number; // 虽然移除了 Linq，但配置接口保留（validateRange 中暂不处理 step）
}


// 简单模拟 DirectionDictionary 结构
export type DirectionDictionary = { [key: string]: number };

// 定义解析结果的通用结构
export interface Result<T> {
    success: boolean;
    data: T | null;
    message: string;
}


// 解析结果类型
export interface NumberWithSign {
    num: number;
    hasSign: boolean;
}

export interface NumberWithMode {
    num: number;
    mode: "increase" | "decrease" | "unify";
    direction: 1 | -1 | 0; // Math.sign 的结果包含 0
}
