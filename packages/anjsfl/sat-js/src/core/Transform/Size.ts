// ------------------------------------------------------------------------------------------------------------------------
//  ______     __     ______     ______
// /\  ___\   /\ \   /\___  \   /\  ___\
// \ \___  \  \ \ \  \/_/  /__  \ \  __\
//  \/\_____\  \ \_\   /\_____\  \ \_____\
//   \/_____/   \/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// Size
//
// Represents a size with `width` and `height` properties.
import { SObject } from "../../base/SObject";
import { SizeLike } from "../../types/sizeType";

export class Size extends SObject implements SizeLike {
    public width: number = 0;
    public height: number = 0;

    get ratio(): number {
        return this.width / this.height;
    }

    get max_size(): number {
        return Math.max(this.width, this.height);
    }

    get min_size(): number {
        return Math.min(this.width, this.height);
    }

    constructor(width: number, height: number) {
        super();

        this.width = width;
        this.height = height;
    }

    add(size: Size): Size {
        return new Size(this.width + size.width, this.height + size.height);
    }

    sub(size: Size): Size {
        return new Size(this.width - size.width, this.height - size.height);
    }

    getRatioWidth(nowHeight: number): number {
        return this.ratio * nowHeight;
    }

    getRatioHeight(nowWidth: number): number {
        return nowWidth / this.ratio;
    }

    static fromElement(element: FlashElement | FlashDocument | Size | SizeLike): Size {
        return new Size(element.width, element.height);
    }
}
