// VectorConverter.ts

import { Vector } from "./Vector";
import { Scale } from "./Transform/Scale";
import { Size } from "./Transform/Size";
import { Skew } from "./Transform/Skew";

export namespace VectorConverter {
    // --- From Vector ---

    export function vectorToScale(v: Vector): Scale {
        return new Scale(v.x, v.y);
    }

    export function vectorToSize(v: Vector): Size {
        return new Size(v.x, v.y);
    }

    export function vectorToSkew(v: Vector): Skew {
        return new Skew(v.x, v.y);
    }

    // --- From Scale ---

    export function scaleToVector(s: Scale): Vector {
        return new Vector(s.scaleX, s.scaleY);
    }

    export function scaleToSize(s: Scale): Size {
        return new Size(s.scaleX, s.scaleY);
    }

    export function scaleToSkew(s: Scale): Skew {
        return new Skew(s.scaleX, s.scaleY);
    }

    // --- From Size ---

    export function sizeToVector(s: Size): Vector {
        return new Vector(s.width, s.height);
    }

    export function sizeToScale(s: Size): Scale {
        return new Scale(s.width, s.height);
    }

    export function sizeToSkew(s: Size): Skew {
        return new Skew(s.width, s.height);
    }

    // --- From Skew ---

    export function skewToVector(s: Skew): Vector {
        return new Vector(s.skewX, s.skewY);
    }

    export function skewToScale(s: Skew): Scale {
        return new Scale(s.skewX, s.skewY);
    }

    export function skewToSize(s: Skew): Size {
        return new Size(s.skewX, s.skewY);
    }

    // --- 通用：从任意 {x,y} 或 {a,b} 对象字面量转为 Vector ---
    // （可选，增强灵活性）

    export function toVector(
        obj:
            | { x: number; y: number }
            | { width: number; height: number }
            | { scaleX: number; scaleY: number }
            | { skewX: number; skewY: number }
    ): Vector {
        if ("x" in obj && "y" in obj) {
            return new Vector(obj.x, obj.y);
        } else if ("width" in obj && "height" in obj) {
            return new Vector(obj.width, obj.height);
        } else if ("scaleX" in obj && "scaleY" in obj) {
            return new Vector(obj.scaleX, obj.scaleY);
        } else if ("skewX" in obj && "skewY" in obj) {
            return new Vector(obj.skewX, obj.skewY);
        } else {
            throw new Error("Unsupported object structure for Vector conversion");
        }
    }
}
