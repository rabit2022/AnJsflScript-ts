/**
 * @file: PerspectiveArrangement.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// strategies/PerspectiveArrangement.ts
import { ArrangementStrategy, ArrangementResult } from "./ArrangementStrategy";

import { SAT_T, SAT } from "@anjsfl/sat";

const { Vector, Scale } = SAT;

export interface PerspectiveConfig {
    horizontalCount: number;
}

export class PerspectiveArrangement extends ArrangementStrategy {
    calculate(x: number, y: number, config?: PerspectiveConfig): ArrangementResult {
        if (!config || !config.horizontalCount) {
            throw new Error("Perspective arrangement requires horizontalCount in config");
        }

        const { horizontalCount } = config;

        // 基础偏移
        const baseOffset = this.offset.clone().scale(x, y);
        const position = this.basePosition.clone().add(baseOffset);

        // 透视偏移
        const horizontalSpacing = this.moveDirection.x;
        const itemWidth = this.element.width;
        const offsetX = this.getOffset(
            horizontalCount,
            horizontalSpacing,
            itemWidth,
            x,
            y
        );

        // 透视缩放
        const scaleFactor = this.getScaleFactor(horizontalCount, y);
        const scale = new Scale(scaleFactor, scaleFactor);

        const finalPosition = position.add(new Vector(offsetX, 0));
        const rect = this.baseRect.clone().addOffset(baseOffset);

        return {
            position: finalPosition,
            rect,
            scale
        };
    }

    private getScaleFactor(horizontalCount: number, verticalj: number): number {
        return 1 + 0.015 * horizontalCount * verticalj;
    }

    private getOffset(
        horizontalCount: number,
        horizontalSpacing: number,
        itemWidth: number,
        i: number,
        j: number
    ): number {
        const Factor = 0.013;
        const relatedParam = horizontalCount * horizontalSpacing * itemWidth;
        const dynamicParam = (i - horizontalCount / 2) * j;
        return Factor * relatedParam * dynamicParam;
    }
}
