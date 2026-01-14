import {RelativePosition} from "./vectorEnums";

/**
 * 矩形的四条边（不包含角点或中心）
 */
export enum RectangleSide {
    Top = 'top',
    Right = 'right',
    Bottom = 'bottom',
    Left = 'left',
}

/**
 * 矩形上的任意部分：可以是点（RelativePosition），也可以是边（RectangleSide）
 */
export type RectanglePart = RelativePosition | RectangleSide;


/**
 * 矩形扩展/收缩的方向
 */
export enum Direction {
    All = 'all',
    Left = 'left',
    Top = 'top',
    Right = 'right',
    Bottom = 'bottom',
}