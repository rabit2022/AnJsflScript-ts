/**
 * @file: GridArrangement.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// strategies/GridArrangement.ts
import { ArrangementResult, ArrangementStrategy } from "./ArrangementStrategy";

import { SAT_T, VectorConverter } from "@anjsfl/sat";

type Scale_T = SAT_T.Scale;
const { vectorToScale } = VectorConverter;

export class GridArrangement extends ArrangementStrategy {
    calculate(x: number, y: number): ArrangementResult {
        const baseOffset = this.offset.clone().scale(x, y);
        const position = this.basePosition.clone().add(baseOffset);

        const v = this.moveDirection.signPow();
        const scale = vectorToScale(v);

        return {
            position,
            scale
        };
    }

    executeGridOperation(): void {
        const doc = typeof fl !== "undefined" ? fl.getDocumentDOM() : null;
        if (!doc) {
            console.error("FL document not available");
            return;
        }

        // 这里需要根据实际情况实现 ElementSelect
        // OnlySelectCurrent(this.element);

        doc.duplicateSelection();
        doc.moveSelectionBy(this.offset);

        const v = this.moveDirection.signPow();
        const scale = vectorToScale(v);

        doc.scaleSelection(scale.scaleX, scale.scaleY);
    }
}
