/**
 * @file: Hello.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { SAT } from "@anjsfl/sat";
import Bounds = SAT.Bounds;

// const mockDoc = {width: 800, height: 600};
// (globalThis as any).fl = {
//     getDocumentDOM: () => mockDoc
// };
// // Helper to create mock element
// const makeElement = (l: number, t: number, w: number, h: number): FlashElement => ({
//     left: l,
//     top: t,
//     width: w,
//     height: h
// } as FlashElement);
// const makeBounds = (...args: any[]) => new (Bounds as any)(...args);

const b = new Bounds(0, 0, 4, 2); // center at (2,1)
const r = b.rotate(90);

console.log(r);
