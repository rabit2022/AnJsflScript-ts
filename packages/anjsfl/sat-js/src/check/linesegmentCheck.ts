import { IsVectorLike } from "./vectorCheck";
import { LineSegmentLike } from "../types/linesegmentType";


export function IsLineSegmentLike(obj: unknown): obj is LineSegmentLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        'startPoint' in obj &&
        'endPoint' in obj &&
        IsVectorLike(obj.startPoint) &&
        IsVectorLike(obj.endPoint)
    );
}
