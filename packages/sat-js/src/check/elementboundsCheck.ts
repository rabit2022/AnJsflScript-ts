import {ElementBoundsLike} from "../types/elementboundsType";

export function IsElementBoundsLike(obj):obj is ElementBoundsLike {
    return (obj && typeof obj === "object" && typeof obj.left === "number" && typeof obj.top === "number" && typeof obj.width === "number" && typeof obj.height === "number");
}