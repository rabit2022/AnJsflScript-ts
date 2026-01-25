/**
 * @file: test_fill.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// 直接导入使用
import {
    createFill,
    createFillBuilder,
    FILL_BUILDERS,
    FILLS,
    LinearGradientFillBuilder,
    SolidFill
} from "./fill";

// 使用常量
const noFill = new FILLS.NoFill();
const solidFill = new FILLS.SolidFill();

// 使用构建器
const gradientBuilder = new FILL_BUILDERS.LinearGradientFillBuilder();
const gradientFill = gradientBuilder
    .addColorStop(0, "#ff0000")
    .addColorStop(1, "#0000ff")
    .setMatrix(1, 0, 0, 1, 0, 0)
    .build();

// 使用工具函数
const solidFill2 = createFill("SolidFill", { color: "#00ff00" });
const builder = createFillBuilder("RadialGradientFillBuilder");

const mySolidFill = new SolidFill();
mySolidFill.color = "#ff0000";

const myBuilder = new LinearGradientFillBuilder();
const myGradient = myBuilder
    .addColorStop(0, "#ff0000")
    .addColorStop(0.5, "#00ff00")
    .addColorStop(1, "#0000ff")
    .build();
