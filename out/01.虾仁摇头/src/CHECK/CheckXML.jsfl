// 这个文件由脚本 01.虾仁摇头\src\CHECK\CheckXML.ts 自动生成，任何手动修改都将会被覆盖.

"use strict";
function checkXMLPanel() {
    var panel = __WEBPACK_COMPATIBILITY_XML_PANEL_RELATIVE_PATH__("./01.虾仁摇头.xml");
    if (panel === null)
        return null;
    var shakeIntensity = parseNumber(panel.shakeIntensity, "摇头力度只能输入数字，请重新输入。");
    if (shakeIntensity === null)
        return null;
    var headDirection = parseNumber(panel.headDirection, "头部朝向只能输入数字，请重新输入。");
    if (headDirection === null)
        return null;
    return { shakeIntensity: shakeIntensity, headDirection: headDirection };
}
var config = checkXMLPanel();
if (config === null)
    return;
var shakeIntensity = config.shakeIntensity;
var headDirection = config.headDirection;
