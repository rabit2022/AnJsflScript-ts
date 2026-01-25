/**
 * @file: ArrangementStrategy.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// strategies/ArrangementStrategy.ts
import { SAT_T } from "@anjsfl/sat";

type Vector_T = SAT_T.Vector;
type Scale_T = SAT_T.Scale;
type Bounds_T = SAT_T.Bounds;

export interface ArrangementResult {
    position: Vector_T;
    rect?: Bounds_T;
    scale?: Scale_T;
}

export abstract class ArrangementStrategy {
    protected element: Element;
    protected offset: Vector_T;
    protected basePosition: Vector_T;
    protected baseRect: Bounds_T;
    protected moveDirection: Vector_T;

    constructor(
        element: Element,
        offset: Vector_T,
        basePosition: Vector_T,
        baseRect: Bounds_T,
        moveDirection: Vector_T
    ) {
        this.element = element;
        this.offset = offset;
        this.basePosition = basePosition;
        this.baseRect = baseRect;
        this.moveDirection = moveDirection;
    }

    abstract calculate(x: number, y: number, config?: any): ArrangementResult;
}
