/**
 * Represents a 2D point with x and y coordinates.
 */
export interface FlashPoint {
    /** X coordinate */
    x: number;
    /** Y coordinate */
    y: number;
}

export interface FlashPoint3D extends FlashPoint {
    z: number;
}


export interface FlashRectangle {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
