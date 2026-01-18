// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______     ______     __         ______
// /\  ___\   /\  ___\   /\  __ \   /\ \       /\  ___\
// \ \___  \  \ \ \____  \ \  __ \  \ \ \____  \ \  __\
//  \/\_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_____\
//   \/_____/   \/_____/   \/_/\/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// Scale

import { SObject } from "../../base/SObject";
import { ScaleLike } from "../../types/scaleType";

export class Scale extends SObject implements ScaleLike {
    public scaleX: number;
    public scaleY: number;

    constructor(scaleX: number, scaleY: number) {
        super();

        this.scaleX = scaleX;
        this.scaleY = scaleY;
    }

    static fromElement(element: FlashElement | ScaleLike | Scale): Scale {
        return new Scale(element.scaleX, element.scaleY);
    }
}
