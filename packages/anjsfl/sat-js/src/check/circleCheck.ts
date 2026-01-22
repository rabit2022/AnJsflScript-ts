import { IsVectorLike } from "./vectorCheck";
import { CircleLike } from "../types/circleType";

export function IsCircleLike(obj: unknown): obj is CircleLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        'pos' in obj && 'r' in obj && // 可选：先检查属性是否存在（更安全）
        IsVectorLike((obj as any).pos) &&
        typeof (obj as any).r === "number"
    );
}
