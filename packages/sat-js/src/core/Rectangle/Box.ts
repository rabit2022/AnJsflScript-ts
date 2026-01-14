// ## Box
//
// Represents an axis-aligned box, with a width and height.


// Create a new box, with the specified position, width, and height. If no position
// is given, the position will be `(0,0)`. If no width or height are given, they will
// be set to `0`.
import {SObject} from "../../base/SObject";
import {BoxTypeLike} from "../../types/boxType";
import {VectorLike} from "../../types/vectorType";
import {Vector} from "../Vector";

/**
 * @param {Vector=} pos A vector representing the bottom-left of the box (i.e. the smallest x and smallest y value).
 * @param {?number=} w The width of the box.
 * @param {?number=} h The height of the box.
 * @constructor
 */
// function Box(pos, w, h) {
//     this['pos'] = pos || new Vector();
//     this['w'] = w || 0;
//     this['h'] = h || 0;
// }
// // SAT['Box'] = Box;

export class Box extends SObject implements BoxTypeLike {
    public pos: VectorLike = Vector.ZERO;
    public width: number = 0;
    public height: number = 0;
}