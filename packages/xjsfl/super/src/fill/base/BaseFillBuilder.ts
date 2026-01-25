/**
 * @file: BaseFillBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseFill } from "./BaseFill";
import { SObject } from "../../base/SObject";

export abstract class BaseFillBuilder<T extends BaseFill> extends SObject {
    protected fill: T;

    constructor(fill: T) {
        super();
        this.fill = fill;
    }

    public setStyle(style: string): this {
        this.fill.style = style as any;
        return this;
    }

    public build(): T {
        return this.fill;
    }
}
