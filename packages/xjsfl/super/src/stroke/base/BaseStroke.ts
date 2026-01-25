/**
 * @file: BaseStroke.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______     ______     ______     ______     ______   ______
// /\  == \   /\  __ \   /\  ___\   /\  ___\   /\  ___\   /\__  _\ /\  == \
// \ \  __<   \ \  __ \  \ \___  \  \ \  __\   \ \___  \  \/_/\ \/ \ \  __<
//  \ \_____\  \ \_\ \_\  \/\_____\  \ \_____\  \/\_____\    \ \_\  \ \_\ \_\
//   \/_____/   \/_/\/_/   \/_____/   \/_____/   \/_____/     \/_/   \/_/ /_/
//
//  ______     __  __     ______
// /\  __ \   /\ \/ /    /\  ___\
// \ \ \/\ \  \ \  _"-.  \ \  __\
//  \ \_____\  \ \_\ \_\  \ \_____\
//   \/_____/   \/_/\/_/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// BaseStroke

import { BaseStrokeProps, IBaseStroke } from "../types";
import { SObject } from "../../base/SObject";

export class BaseStroke extends SObject implements IBaseStroke {
    public breakAtCorners: boolean = false;
    public capType: "none" | "round" | "square" = "none";
    public strokeHinting: boolean = false;
    public style:
        | "noStroke"
        | "solid"
        | "dashed"
        | "dotted"
        | "ragged"
        | "stipple"
        | "hatched";
    public thickness: number = 1;
    public color: string = "#000000";
    public shapeFill: {
        tag: number;
        color: string;
        style: string;
        matrix: {
            a: number;
            b: number;
            c: number;
            d: number;
            tx: number;
            ty: number;
        };
    };
    public scaleType: "normal" | "horizontal" | "vertical" | "none" = "normal";
    public joinType: "miter" | "round" | "bevel" = "miter";
    public miterLimit: number = 4;

    constructor(
        style?:
            | "noStroke"
            | "solid"
            | "dashed"
            | "dotted"
            | "ragged"
            | "stipple"
            | "hatched"
    ) {
        super();
        this.style = style || "solid";
        this.shapeFill = {
            tag: 0,
            color: "#000000",
            style: style || "solid",
            matrix: {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                tx: 0,
                ty: 0
            }
        };
    }

    public static fromProps(props: BaseStrokeProps): BaseStroke {
        const stroke = new BaseStroke(props.style);
        Object.assign(stroke, props);
        return stroke;
    }
}
