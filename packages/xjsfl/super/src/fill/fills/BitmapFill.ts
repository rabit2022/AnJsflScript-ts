/**
 * @file: BitmapFill.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  ______     __     ______   __    __     ______     ______   ______   __     __         __
// /\  == \   /\ \   /\__  _\ /\ "-./  \   /\  __ \   /\  == \ /\  ___\ /\ \   /\ \       /\ \
// \ \  __<   \ \ \  \/_/\ \/ \ \ \-./\ \  \ \  __ \  \ \  _-/ \ \  __\ \ \ \  \ \ \____  \ \ \____
//  \ \_____\  \ \_\    \ \_\  \ \_\ \ \_\  \ \_\ \_\  \ \_\    \ \_\    \ \_\  \ \_____\  \ \_____\
//   \/_____/   \/_/     \/_/   \/_/  \/_/   \/_/\/_/   \/_/     \/_/     \/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// BitmapFill
import { BaseFill } from "../base/BaseFill";
import { IBitmapFill } from "../types";

export class BitmapFill extends BaseFill implements IBitmapFill {
    public bitmapPath: string = "";
    public bitmapIsClipped: boolean = false;

    constructor() {
        super("bitmap");
    }

    public toString(): string {
        return "[class BitmapFill]";
    }
}
