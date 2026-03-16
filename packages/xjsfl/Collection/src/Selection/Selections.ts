// import {SAT, SAT_T} from "@anjsfl/sat"
//
// const {FrameRange} = SAT;
// type T_FrameRange = SAT_T.T_FrameRange;
//
// interface Mode {
//     layer: Layer;
//     frame: Frame;
//     layerIndex: number;
//     frameIndex: number;
// }
//
// function* splitFrs(
//     selectedFr: T_FrameRange,
//     keyFrameRanges: T_FrameRange[]
// ): Generator<T_FrameRange> {
//
//     for (const keyFrameRange of keyFrameRanges) {
//
//         if (!selectedFr.intersects(keyFrameRange)) continue;
//
//         const overlapStart = Math.max(
//             selectedFr.startFrame,
//             keyFrameRange.startFrame
//         );
//
//         const overlapEnd = Math.min(
//             selectedFr.endFrame,
//             keyFrameRange.endFrame
//         );
//
//         yield new FrameRange(
//             keyFrameRange.layerIndex,
//             overlapStart,
//             overlapEnd
//         );
//     }
// }
//
// function splitFrsFromSelection(
//     layers: Layer[],
//     frs: T_FrameRange[]
// ) {
//
//     for (const selectedFr of frs) {
//
//         const layer = layers[selectedFr.layerIndex];
//
//         const keyFrameRanges = getKeyFrameRangesOfLayer(layers, layer);
//
//         yield* splitFrs(selectedFr, keyFrameRanges);
//     }
// }
//
// function* iterateModes(
//     layers: Layer[],
//     frs: T_FrameRange[]
// ): Generator<Mode> {
//
//     for (const fr of splitFrsFromSelection(layers, frs)) {
//
//         const layer = layers[fr.layerIndex];
//
//         yield {
//             layer,
//             frame: layer.frames[fr.startFrame],
//             layerIndex: fr.layerIndex,
//             frameIndex: fr.startFrame
//         };
//     }
// }
//
// function Main(): Mode[] {
//
//     if (!CheckSelection(selection, "selectElement", "No limit")) {
//         return [];
//     }
//
//     const result: Mode[] = [];
//
//     for (const mode of iterateModes(layers, frs)) {
//         result.push(mode);
//     }
//
//     return result;
// }
//
// for (const mode of iterateModes(layers, frs)) {
//
//     silentFrame(mode.frame);
//
// }
// const modes = [...iterateModes(layers, frs)];
//
//
// class Selections {
//
// }