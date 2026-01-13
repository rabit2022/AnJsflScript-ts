
// 碰撞检测、裁剪区域、DOM getBoundingClientRect
interface LTRBRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

// 或简写为 Bounds（常用于“包围盒”场景）
type Bounds = LTRBRect;