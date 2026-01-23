// strategies/StaggeredArrangement.ts
import { ArrangementStrategy, ArrangementResult } from './ArrangementStrategy';

export class StaggeredArrangement extends ArrangementStrategy {
    calculate(x: number, y: number): ArrangementResult {
        const offset = this.offset.clone().scale(x, y);

        // 交错排列时，奇数行向右偏移一半宽度
        if (y % 2 !== 0) {
            offset.x += this.offset.x / 2;
        }

        const position = this.basePosition.clone().add(offset);
        const rect = this.baseRect.clone().addOffset(offset);

        return { position, rect };
    }
}