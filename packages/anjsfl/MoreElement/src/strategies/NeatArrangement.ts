/**
 * @file: NeatArrangement.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// strategies/NeatArrangement.ts
import { ArrangementStrategy, ArrangementResult } from "./ArrangementStrategy";

export class NeatArrangement extends ArrangementStrategy {
    calculate(x: number, y: number): ArrangementResult {
        const baseOffset = this.offset.clone().scale(x, y);
        const position = this.basePosition.clone().add(baseOffset);

        const rect = this.baseRect.clone().addOffset(baseOffset);

        return { position, rect };
    }
}
