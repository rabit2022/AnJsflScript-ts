// 导出所有类型
export * from './types';

// 导入所有颜色变换类
import {NoneColorTransform} from './transforms/NoneColorTransform';
import {BrightnessColorTransform} from './transforms/BrightnessColorTransform';
import {TintColorTransform} from './transforms/TintColorTransform';
import {AdvancedColorTransform} from './transforms/AdvancedColorTransform';
import {AlphaColorTransform} from './transforms/AlphaColorTransform';

// 导入所有构建器
import {BrightnessColorTransformBuilder} from './builders/BrightnessColorTransformBuilder';
import {TintColorTransformBuilder} from './builders/TintColorTransformBuilder';
import {AdvancedColorTransformBuilder} from './builders/AdvancedColorTransformBuilder';
import {AlphaColorTransformBuilder} from './builders/AlphaColorTransformBuilder';

// 导入所有实例方法
import {setInstanceNone} from './instances/setInstanceNone';
import {setInstanceBrightness} from './instances/setInstanceBrightness';
import {setInstanceTint, setInstanceTintRGB} from './instances/setInstanceTint';
import {setInstanceAdvancedColor} from './instances/setInstanceAdvancedColor';
import {setInstanceAlpha} from './instances/setInstanceAlpha';

// 导入基类
import {BaseColorTransform} from './base/BaseColorTransform';
import {BaseColorTransformBuilder} from './base/BaseColorTransformBuilder';

// 创建内部映射
const COLOR_TRANSFORMS_MAP = {
    NoneColorTransform,
    BrightnessColorTransform,
    TintColorTransform,
    AdvancedColorTransform,
    AlphaColorTransform
};

const COLOR_TRANSFORM_BUILDERS_MAP = {
    BrightnessColorTransformBuilder,
    TintColorTransformBuilder,
    AdvancedColorTransformBuilder,
    AlphaColorTransformBuilder
};

const COLOR_TRANSFORM_INSTANCES_MAP = {
    setInstanceNone,
    setInstanceBrightness,
    setInstanceTint,
    setInstanceTintRGB,
    setInstanceAdvancedColor,
    setInstanceAlpha
};

// 导出为对象常量（与 Stroke 和 Fill 保持一致）
export const COLOR_TRANSFORMS = {
    get NoneColorTransform() {
        return NoneColorTransform;
    },
    get BrightnessColorTransform() {
        return BrightnessColorTransform;
    },
    get TintColorTransform() {
        return TintColorTransform;
    },
    get AdvancedColorTransform() {
        return AdvancedColorTransform;
    },
    get AlphaColorTransform() {
        return AlphaColorTransform;
    },

    // 动态访问方法
    get(type: string): any {
        return COLOR_TRANSFORMS_MAP[type as keyof typeof COLOR_TRANSFORMS_MAP];
    }
};

export const COLOR_TRANSFORM_BUILDERS = {
    get BrightnessColorTransformBuilder() {
        return BrightnessColorTransformBuilder;
    },
    get TintColorTransformBuilder() {
        return TintColorTransformBuilder;
    },
    get AdvancedColorTransformBuilder() {
        return AdvancedColorTransformBuilder;
    },
    get AlphaColorTransformBuilder() {
        return AlphaColorTransformBuilder;
    },

    // 动态访问方法
    get(type: string): any {
        return COLOR_TRANSFORM_BUILDERS_MAP[type as keyof typeof COLOR_TRANSFORM_BUILDERS_MAP];
    }
};

export const COLOR_TRANSFORM_INSTANCES = {
    get setInstanceNone() {
        return setInstanceNone;
    },
    get setInstanceBrightness() {
        return setInstanceBrightness;
    },
    get setInstanceTint() {
        return setInstanceTint;
    },
    get setInstanceTintRGB() {
        return setInstanceTintRGB;
    },
    get setInstanceAdvancedColor() {
        return setInstanceAdvancedColor;
    },
    get setInstanceAlpha() {
        return setInstanceAlpha;
    },

    // 动态访问方法
    get(type: string): any {
        return COLOR_TRANSFORM_INSTANCES_MAP[type as keyof typeof COLOR_TRANSFORM_INSTANCES_MAP];
    }
};

// 导出所有具体类
export {
    NoneColorTransform,
    BrightnessColorTransform,
    TintColorTransform,
    AdvancedColorTransform,
    AlphaColorTransform,
    BrightnessColorTransformBuilder,
    TintColorTransformBuilder,
    AdvancedColorTransformBuilder,
    AlphaColorTransformBuilder,
    BaseColorTransform,
    BaseColorTransformBuilder
};

// 导出实例方法
export {
    setInstanceNone,
    setInstanceBrightness,
    setInstanceTint,
    setInstanceTintRGB,
    setInstanceAdvancedColor,
    setInstanceAlpha
};

// 工具函数
export function createColorTransform(type: string, config?: any) {
    const TransformClass = COLOR_TRANSFORMS_MAP[type as keyof typeof COLOR_TRANSFORMS_MAP];
    if (!TransformClass) {
        throw new Error(`Unknown color transform type: ${type}`);
    }

    const transform = new TransformClass();
    if (config) {
        Object.assign(transform, config);
    }
    return transform;
}

export function createColorTransformBuilder(type: string) {
    const BuilderClass = COLOR_TRANSFORM_BUILDERS_MAP[type as keyof typeof COLOR_TRANSFORM_BUILDERS_MAP];
    if (!BuilderClass) {
        throw new Error(`Unknown color transform builder type: ${type}`);
    }

    return new BuilderClass();
}


// 类型别名
export type ColorTransformType = keyof typeof COLOR_TRANSFORMS_MAP;
export type ColorTransformBuilderType = keyof typeof COLOR_TRANSFORM_BUILDERS_MAP;
export type ColorTransformInstanceType = keyof typeof COLOR_TRANSFORM_INSTANCES_MAP;