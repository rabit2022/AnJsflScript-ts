// 导出所有类型
export * from './types';

import {
    DashedStrokeBuilder,
    DottedStrokeBuilder,
    HatchedStrokeBuilder,
    NoStrokeBuilder,
    RaggedStrokeBuilder,
    SolidStrokeBuilder,
    StippleStrokeBuilder
} from "./builders";
import {DashedStroke, DottedStroke, HatchedStroke, NoStroke, RaggedStroke, SolidStroke, StippleStroke} from "./strokes";

// 创建常量（内部使用）
const STROKES_MAP = {
    NoStroke,
    SolidStroke,
    DashedStroke,
    DottedStroke,
    RaggedStroke,
    StippleStroke,
    HatchedStroke
};

const STROKE_BUILDERS_MAP = {
    NoStrokeBuilder,
    SolidStrokeBuilder,
    DashedStrokeBuilder,
    DottedStrokeBuilder,
    RaggedStrokeBuilder,
    StippleStrokeBuilder,
    HatchedStrokeBuilder
};


// 导出为对象常量（推荐方式）
export const STROKES = {
    get NoStroke() {
        return NoStroke;
    },
    get SolidStroke() {
        return SolidStroke;
    },
    get DashedStroke() {
        return DashedStroke;
    },
    get DottedStroke() {
        return DottedStroke;
    },
    get RaggedStroke() {
        return RaggedStroke;
    },
    get StippleStroke() {
        return StippleStroke;
    },
    get HatchedStroke() {
        return HatchedStroke;
    },

    // 动态访问方法
    get(type: string): any {
        return STROKES_MAP[type as keyof typeof STROKES_MAP];
    }
};

export const STROKE_BUILDERS = {
    get NoStrokeBuilder() {
        return NoStrokeBuilder;
    },
    get SolidStrokeBuilder() {
        return SolidStrokeBuilder;
    },
    get DashedStrokeBuilder() {
        return DashedStrokeBuilder;
    },
    get DottedStrokeBuilder() {
        return DottedStrokeBuilder;
    },
    get RaggedStrokeBuilder() {
        return RaggedStrokeBuilder;
    },
    get StippleStrokeBuilder() {
        return StippleStrokeBuilder;
    },
    get HatchedStrokeBuilder() {
        return HatchedStrokeBuilder;
    },

    // 动态访问方法
    get(type: string): any {
        return STROKE_BUILDERS_MAP[type as keyof typeof STROKE_BUILDERS_MAP];
    }
};

// 工具函数
export function createStroke(type: string, config?: any) {
    const StrokeClass = STROKES_MAP[type as keyof typeof STROKES_MAP];
    if (!StrokeClass) {
        throw new Error(`Unknown stroke type: ${type}`);
    }

    const stroke = new StrokeClass();
    if (config) {
        Object.assign(stroke, config);
    }
    return stroke;
}

export function createStrokeBuilder(type: string) {
    const BuilderClass = STROKE_BUILDERS_MAP[type as keyof typeof STROKE_BUILDERS_MAP];
    if (!BuilderClass) {
        throw new Error(`Unknown stroke builder type: ${type}`);
    }

    return new BuilderClass();
}

