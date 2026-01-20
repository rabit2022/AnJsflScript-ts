// 这个文件由脚本 01.虾仁摇头\src\Main.ts 自动生成，任何手动修改都将会被覆盖.

"use strict";
function Main() {
    var symbolName = generateNameUntilUnique("虾仁摇头_");
    doc.convertToSymbol("graphic", symbolName, "center");
    doc.enterEditMode("inPlace");
    var timeline = doc.getTimeline();
    var element1 = timeline.layers[0].frames[0].elements[0];
    var trPoint = getShakeHeadTrPoint(selection[0], 0.9);
    element1.setTransformationPoint(trPoint.toObj());
    timeline.insertFrames(FRAME_7, true);
    convertToKeyframesSafety(timeline, KEY_FRAMES);
    var frame4_element = timeline.layers[0].frames[FRAME_4].elements[0];
    frame4_element.rotation = headDirection * shakeIntensity;
    SelectNoneFms(timeline);
    setClassicEaseCurve(timeline);
    doc.exitEditMode();
}
