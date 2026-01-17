/**
 * Represents a 2D point with x and y coordinates.
 */
interface FlashPoint {
    /** X coordinate */
    x: number;
    /** Y coordinate */
    y: number;
}

interface FlashPoint3D extends FlashPoint {
    z: number;
}


interface FlashRectangle {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
