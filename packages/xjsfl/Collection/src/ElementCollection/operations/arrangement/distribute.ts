/**
 * @file: distribute.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

// 用户侧可用关键字
import { ElementCollection } from "../../core/ElementCollection";

type DistributeKeyword = "left" | "right" | "top" | "bottom" | "horizontal" | "vertical";

// 支持的输入
type DistributeProp = DistributeKeyword | DistributeKeyword[];

// 原生 JSFL 命令
type NativeDistributeCommand =
    | "left edge"
    | "right edge"
    | "top edge"
    | "bottom edge"
    | "horizontal center"
    | "vertical center";

export interface DistributeOptions {
    props: DistributeProp;
    toStage?: boolean;
}

export function distribute(
    this: ElementCollection,
    options: DistributeProp | DistributeOptions,
    toStage = false
) {
    // if (!this.elements.length) {
    if (!this.size) {
        return this;
    }

    // 兼容两种调用风格
    const opts: DistributeOptions =
        typeof options === "string" || Array.isArray(options)
            ? { props: options, toStage }
            : options;

    const propsArray = Array.isArray(opts.props) ? opts.props : [opts.props];

    this._deselect(false);

    for (const prop of propsArray) {
        const cmd = resolveDistributeCommand(prop);
        if (cmd) {
            this.dom.distribute(cmd, opts.toStage);
        }
    }

    this._reselect();
    return this;
}

function resolveDistributeCommand(
    prop: DistributeKeyword
): NativeDistributeCommand | null {
    switch (prop) {
        case "horizontal":
            return "horizontal center";

        case "vertical":
            return "vertical center";

        case "left":
        case "right":
        case "top":
        case "bottom":
            return `${prop} edge` as NativeDistributeCommand;

        default:
            return null; // 防御
    }
}
