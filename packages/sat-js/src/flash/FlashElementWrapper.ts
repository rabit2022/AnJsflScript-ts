import {Vector} from "../core/Vector";
import {ElementBoundsLike} from "../types/elementboundsType";
import {Size} from "../core/Transform/Size";
import {Bounds} from "../core/Rectangle/Bounds";

export class FlashElementWrapper {
    public element: ElementBoundsLike | FlashElement;

    constructor(element: ElementBoundsLike | FlashElement) {
        this.element = element;
    }

    /** 获取元素左上角坐标 */
    get topLeft(): Vector {
        // 可选：添加类型守卫或默认值以提高健壮性
        const {left = 0, top = 0} = this.element as any;
        return new Vector(left, top);
    }

    get size(): Size {
        return Size.fromElement(this.element);
    }

    get bounds(): Bounds {
        return Bounds.fromTopLeft(this.topLeft, this.size);
    }

    get center(): Vector {
        return this.bounds.center;
    }
}