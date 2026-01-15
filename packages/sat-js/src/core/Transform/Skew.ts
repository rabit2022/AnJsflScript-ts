
// ------------------------------------------------------------------------------------------------------------------------
//  ______     __  __     ______     __     __
// /\  ___\   /\ \/ /    /\  ___\   /\ \  _ \ \
// \ \___  \  \ \  _"-.  \ \  __\   \ \ \/ ".\ \
//  \/\_____\  \ \_\ \_\  \ \_____\  \ \__/".~\_\
//   \/_____/   \/_/\/_/   \/_____/   \/_/   \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// Skew


import {SObject} from "../../base/SObject";
import {SkewLike} from "../../types/skewType";

/**
 * This is a simple skew class,Skew has two parameters {skewX},{skewY}.
 */
export class Skew  extends SObject implements SkewLike{
    public skewX: number = 0;
    public skewY: number = 0;
    constructor(skewX: number, skewY: number) {
        super();
        this.skewX = skewX;
        this.skewY = skewY;
    }

    static fromElement(element: FlashElement | SkewLike | Skew): Skew{
        return new Skew(element.skewX, element.skewY);
    }
}





