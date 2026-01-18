import { Bounds } from "../core/Rectangle/Bounds";
import { Size } from "../core/Transform/Size";

export class FlashStageWrapper {
    public doc: FlashDocument = fl.getDocumentDOM()!;

    /**
     * 获取舞台中心点坐标
     * @return {Vector} 点
     */
    get center() {
        var rect = new Bounds(this.doc);
        var stageCenter = rect.center;
        return stageCenter;
    }

    /**
     * 获取舞台矩形
     * @return {Bounds} 矩形对象
     */
    get bounds() {
        var rect = new Bounds(this.doc);
        return rect;
    }

    /**
     * 获取舞台尺寸
     * @return {Size} 尺寸对象
     */

    get size(): Size {
        return Size.fromElement(this.doc);
    }
}
