/**
 * @file: XYWHRect.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { SObject } from "../../base/SObject";
import { XYWHRectLike } from "../../types/xywhrectType";
import {Bounds} from "./Bounds";

// Canvas 绘图、UI 布局、游戏对象
export class XYWHRect extends SObject implements XYWHRectLike {
    public x: number = 0;
    public y: number = 0;
    public width: number = 0;
    public height: number = 0;

    constructor(x: number, y: number, width: number, height: number) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    toBounds(): Bounds {
        return Bounds.fromTopLeft(this.x,this.y,this.width, this.height);
    }
}
