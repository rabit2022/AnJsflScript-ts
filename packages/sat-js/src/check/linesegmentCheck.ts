import {IsVectorLike} from "./vectorCheck";
import {LineSegmentLike} from "../types/linesegmentType";

export function IsLineSegmentLike(obj):obj is LineSegmentLike  {
    return (obj && typeof obj === "object" && IsVectorLike(obj.startPoint) && IsVectorLike(obj.endPoint));
}