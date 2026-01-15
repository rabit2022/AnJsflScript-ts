import {IsVectorLike} from "./vectorCheck";
import {CircleLike} from "../types/circleType";

export function IsCircleLike(obj):obj is CircleLike {
    return (obj && typeof obj === "object" && IsVectorLike(obj.pos) && typeof obj.r === "number");
}