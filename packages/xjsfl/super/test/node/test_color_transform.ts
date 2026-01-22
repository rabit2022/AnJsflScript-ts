import {
    COLOR_TRANSFORM_BUILDERS,
    COLOR_TRANSFORMS,
    createColorTransform,
    createColorTransformBuilder
} from './color-transform';

// 使用常量
const brightnessTransform = new COLOR_TRANSFORMS.BrightnessColorTransform();
const tintBuilder = new COLOR_TRANSFORM_BUILDERS.TintColorTransformBuilder();

// 使用工具函数
const advancedTransform = createColorTransform('AdvancedColorTransform', {
    colorRedPercent: 50,
    colorGreenPercent: 50
});

const builder = createColorTransformBuilder('BrightnessColorTransformBuilder');
const transform = builder.setBrightnessPercent(50).build();

// 使用实例方法
// setInstanceBrightness(elements, 50);