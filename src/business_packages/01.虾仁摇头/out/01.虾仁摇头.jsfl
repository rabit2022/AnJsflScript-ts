/**
 * @file: 01.虾仁摇头.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/1/22 19:50
 * @project: AnJsflScript
 * @description:
 */

// @formatter:off
// prettier-ignore
"undefined"==typeof require&&fl.runScript(function(){var r=fl.scriptURI.match(/(?:^|.*[\/])(AnJsflScript(?:-[a-zA-Z0-9]+)?)(?=[\/]|$)/)[1],t=fl.scriptURI.match(r);if(t){var n=t[0],i=fl.scriptURI.lastIndexOf(n);return fl.scriptURI.substring(0,i+n.length)}throw new Error("Can't find project path ["+fl.scriptURI+"]")}()+"/config/require/CheckEnvironment.jsfl");
// @formatter:on
require([
    "checkUtil",
    "xmlPanelUtil",
    "SymbolNameGenerator",
    "satUtil",
    "JSFLConstants",
    "EaseCurve",
    "FramesSelect",
    "KeyFrameOperation",
    "COMPATIBILITY"
], function (
    checkUtil,
    xmlPanelUtil,
    sng,
    satUtil,
    JSFLConstants,
    curve,
    fms,
    kfo,
    COMPATIBILITY
) {
    const { CheckDom: checkDom, CheckSelection: checkSelection } = checkUtil;

    const { getShakeHeadTrPoint } = satUtil;
    const { FRAME_1, FRAME_4, FRAME_7 } = JSFLConstants.Numerics.frame.frameList;
    const { setClassicEaseCurve } = curve;
    const { SelectNoneFms } = fms;
    const { convertToKeyframesSafety } = kfo;
    const { generateNameUntilUnique, generateNameUseLast } = sng;
    const { parseNumber } = xmlPanelUtil;

    const { __WEBPACK_COMPATIBILITY_XML_PANEL_RELATIVE_PATH__ } = COMPATIBILITY;


});
