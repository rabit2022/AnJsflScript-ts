import {FLASH, SAT} from "../src";
import Bounds = SAT.Bounds;
const mockDoc = { width: 800, height: 600 };
(global as any).fl = {
    getDocumentDOM: () => mockDoc,
};
// Helper to create mock element
const makeElement = (l: number, t: number, w: number, h: number): MockFlashElement => ({
    left: l, top: t, width: w, height: h
});
const makeBounds = (...args: any[]) => new (Bounds as any)(...args);


const b = new Bounds(0, 0, 4, 2); // center at (2,1)
const r = b.rotate(90);

console.log(r)