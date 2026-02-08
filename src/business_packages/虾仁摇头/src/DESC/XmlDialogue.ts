/**
 * @file: XmlDialogue.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// src/index.ts
// 先加载 XML 加载器（仅在非打包环境）
import {IsFlash} from "../DEV/env";
import { AUTHOR } from "./Descriptions";

if (!IsFlash()) {
    require('../DEV/dev-xml-loader'); // 👈 注意路径
}

AUTHOR

// import DIALOGUE from '../asset/01.虾仁摇头.xml';
export const DIALOGUE = require('../../asset/01.虾仁摇头.xml');

// console.log(DIALOGUE)