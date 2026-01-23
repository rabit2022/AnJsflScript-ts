// enums/ArrangementMode.ts
/**
 * 排列模式枚举
 */
export enum ArrangementMode {
    NEAT = "neat",          // 整齐排列
    STAGGERED = "staggered", // 交错排列
    RANDOM = "random",      // 随机排列
    GRID = "grid",          // 网格排列
    PERSPECTIVE = "perspective" // 透视排列

    // 后续可能实现
    // SPIRAL = "spiral",      // 螺旋排列
    // HEXAGONAL = "hexagonal", // 蜂窝排列
    // CIRCULAR = "circular",  // 圆形排列
    // DIAGONAL = "diagonal",  // 对角线排列
    // ZIGZAG = "zigzag",      // Z 字形排列
    // FREEFORM = "freeform"   // 自由排列
}

export default ArrangementMode;