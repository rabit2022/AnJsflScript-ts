/**
 * @file: CheckXML.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as process from "process";
import { Err, Ok, Result } from "oxide.ts";
import * as log from "loglevel";
import { parseNumber } from "@anjsfl/parser";

import { isFlash, isNode } from "@anjsfl-ts/dev";

import { DIALOGUE } from "../DESC/XmlDialogue";
import { AUTHOR } from "../DESC/Descriptions";

export interface AnimationConfig {
    shakeIntensity: number;
    headDirection: number;
}

function checkXMLPanel(): Result<AnimationConfig, string> {
    // var panel = getXMLPanel();

    let panel: XMLPanelReturns;

    if (isNode) {
        // 开发 / 打包环境：mock 数据
        panel = { headDirection: "-1", shakeIntensity: "6", dismiss: "accept" };
    } else if (isFlash) {
        // Adobe Animate 环境：从 XML 面板读取
        panel = fl.xmlPanelFromString(DIALOGUE);
    } else {
        throw new Error("Invalid XML panel type");
    }

    if (panel?.dismiss === "cancel") {
        return Err("取消修改");
    }

    let shakeIntensity_result = parseNumber(
        panel.shakeIntensity,
        "摇头力度只能输入数字，请重新输入。"
    );
    let shakeIntensity: number = 0;
    if (shakeIntensity_result.isOk()) {
        shakeIntensity = shakeIntensity_result.unwrap(); // 类型是 Document
        // log.log("shakeIntensity:", shakeIntensity);
    } else {
        const errorMsg = shakeIntensity_result.unwrapErr(); // 类型是 string
        return Err(errorMsg);
    }

    const headDirection_result = parseNumber(
        panel.headDirection,
        "头部朝向只能输入数字，请重新输入。"
    );
    let headDirection: number = 0;
    if (headDirection_result.isOk()) {
        headDirection = headDirection_result.unwrap();
    } else {
        const errorMsg = headDirection_result.unwrapErr();
        return Err(errorMsg);
    }

    const result = { shakeIntensity, headDirection };
    return Ok(result);
}

// 配置参数
const config = checkXMLPanel();
if (!config.isOk()) {
    const errorMsg = config.unwrapErr();
    log.error("checkXMLPanel 错误:", errorMsg);
    process.exit();
}

export const { shakeIntensity, headDirection } = config.unwrap();

AUTHOR;
