import {SObject} from "../../base/SObject";
import {XYWHRectLike} from "../../types/xywhrectType";


// Canvas 绘图、UI 布局、游戏对象
export class XYWHRect extends SObject implements XYWHRectLike {
    public x: number = 0;
    public y: number = 0;
    public width: number = 0;
    public height: number = 0;
}
