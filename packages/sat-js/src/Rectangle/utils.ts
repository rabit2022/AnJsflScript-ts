// XYWH → LTRB
function toLTRB({ x, y, width, height }: XYWHRect): LTRBRect {
    return {
        left: x,
        top: y,
        right: x + width,
        bottom: y + height
    };
}

// LTRB → XYWH
function toXYWH({ left, top, right, bottom }: LTRBRect): XYWHRect {
    return {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top
    };
}

// Corner → LTRB
function cornerToLTRB({ topLeft, bottomRight }: CornerRect): LTRBRect {
    return {
        left: topLeft.x,
        top: topLeft.y,
        right: bottomRight.x,
        bottom: bottomRight.y
    };
}

// LTRB → Corner
function ltrbToCorner({ left, top, right, bottom }: LTRBRect): CornerRect {
    return {
        topLeft: { x: left, y: top },
        bottomRight: { x: right, y: bottom }
    };
}