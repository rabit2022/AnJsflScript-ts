/**
 * @file: test_stroke.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import {
    createStroke,
    createStrokeBuilder,
    DashedStrokeBuilder,
    SolidStrokeBuilder
} from "./stroke";

// 使用构建器模式
const solidStroke = new SolidStrokeBuilder()
    .setThickness(2)
    .setColor("#ff0000")
    .setJoinType("round")
    .build();

const dashedStroke = new DashedStrokeBuilder()
    .setThickness(1)
    .setColor("#00ff00")
    .setDash1(5)
    .setDash2(3)
    .build();

// 使用工厂函数
const stroke1 = createStroke("SolidStroke", { thickness: 2, color: "#ff0000" });
const stroke2 = createStroke("DashedStroke", { thickness: 1, dash1: 5, dash2: 3 });

const builder1 = createStrokeBuilder("SolidStrokeBuilder");
const stroke3 = builder1.setThickness(3).setColor("#0000ff").build();
