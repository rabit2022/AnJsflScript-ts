//
// function Main() {
//
//     var symbolName = generateNameUntilUnique("虾仁摇头_");
//     doc.convertToSymbol("graphic", symbolName, "center");
//     // var trPoint = getTrPoint(selection[0]);
//
//     doc.enterEditMode("inPlace");
//
//     var timeline = doc.getTimeline();
//
//     // 设置变形点
//     var element1 = timeline.layers[0].frames[0].elements[0];
//     var trPoint = getShakeHeadTrPoint(selection[0], 0.9);
//     element1.setTransformationPoint(trPoint.toObj());
//
//     // 给所有图层加帧
//     timeline.insertFrames(FRAME_7, true);
//     // 关键帧 1,4,7
//     convertToKeyframesSafety(timeline, KEY_FRAMES);
//
//     var frame4_element = timeline.layers[0].frames[FRAME_4].elements[0];
//     frame4_element.rotation = headDirection * shakeIntensity;
//
//     SelectNoneFms(timeline);
//
//     setClassicEaseCurve(timeline);
//
//     doc.exitEditMode();
// }
//
