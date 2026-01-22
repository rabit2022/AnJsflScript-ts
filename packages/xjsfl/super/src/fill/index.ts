// 导入所有填充类
import {BitmapFill, LinearGradientFill, NoFill, RadialGradientFill, SolidFill} from './fills';

// 导入所有构建器
import {BitmapFillBuilder, LinearGradientFillBuilder, RadialGradientFillBuilder, SolidFillBuilder} from './builders';

// 导入基类

// 导出所有类型
export * from './types';

// 创建常量（内部使用）
const FILLS_MAP = {
    NoFill,
    SolidFill,
    LinearGradientFill,
    RadialGradientFill,
    BitmapFill
};

const FILL_BUILDERS_MAP = {
    SolidFillBuilder,
    LinearGradientFillBuilder,
    RadialGradientFillBuilder,
    BitmapFillBuilder
};

// 导出为对象常量（与 Stroke 保持一致）
export const FILLS = {
    get NoFill() {
        return NoFill;
    },
    get SolidFill() {
        return SolidFill;
    },
    get LinearGradientFill() {
        return LinearGradientFill;
    },
    get RadialGradientFill() {
        return RadialGradientFill;
    },
    get BitmapFill() {
        return BitmapFill;
    },

    // 动态访问方法
    get(type: string): any {
        return FILLS_MAP[type as keyof typeof FILLS_MAP];
    }
};

export const FILL_BUILDERS = {
    get SolidFillBuilder() {
        return SolidFillBuilder;
    },
    get LinearGradientFillBuilder() {
        return LinearGradientFillBuilder;
    },
    get RadialGradientFillBuilder() {
        return RadialGradientFillBuilder;
    },
    get BitmapFillBuilder() {
        return BitmapFillBuilder;
    },

    // 动态访问方法
    get(type: string): any {
        return FILL_BUILDERS_MAP[type as keyof typeof FILL_BUILDERS_MAP];
    }
};

// 工具函数
export function createFill(type: string, config?: any) {
    const FillClass = FILLS_MAP[type as keyof typeof FILLS_MAP];
    if (!FillClass) {
        throw new Error(`Unknown fill type: ${type}`);
    }

    const fill = new FillClass();
    if (config) {
        Object.assign(fill, config);
    }
    return fill;
}

export function createFillBuilder(type: string) {
    const BuilderClass = FILL_BUILDERS_MAP[type as keyof typeof FILL_BUILDERS_MAP];
    if (!BuilderClass) {
        throw new Error(`Unknown fill builder type: ${type}`);
    }

    return new BuilderClass();
}

