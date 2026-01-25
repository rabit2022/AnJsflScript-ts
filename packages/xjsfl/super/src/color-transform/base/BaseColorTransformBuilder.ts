/**
 * @file: BaseColorTransformBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseColorTransform } from "./BaseColorTransform";
import { SObject } from "../../base/SObject";

export abstract class BaseColorTransformBuilder<
    T extends BaseColorTransform
> extends SObject {
    protected colorTransform: T;

    constructor(colorTransform: T) {
        super();
        this.colorTransform = colorTransform;
    }

    public build(): T {
        return this.colorTransform;
    }
}
