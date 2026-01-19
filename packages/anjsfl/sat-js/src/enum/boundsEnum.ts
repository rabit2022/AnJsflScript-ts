/**
 * 矩形的四条边（不包含角点或中心）
 */
export enum RectangleSide {
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    Left = "left"
}

// /**
//  * 矩形上的任意部分：可以是点（RelativePosition），也可以是边（RectangleSide）
//  */
// export type RectanglePart = RelativePosition | RectangleSide;

/**
 * 矩形上的任意部分：包括四条边和九个关键点
 */
export enum RectanglePart {
    // 边（来自 RectangleSide）
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    Left = "left",

    // 点/位置（来自 RelativePosition）
    TopRight = "top right",
    TopLeft = "top left",
    BottomRight = "bottom right",
    BottomLeft = "bottom left",
    TopCenter = "top center",
    RightCenter = "right center",
    BottomCenter = "bottom center",
    LeftCenter = "left center",
    Center = "center"
}

/**
 * 矩形扩展/收缩的方向
 */
export enum InsetDirection {
    All = "all",
    Left = "left",
    Top = "top",
    Right = "right",
    Bottom = "bottom"
}
