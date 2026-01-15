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


const elem = makeElement(10, 20, 100, 200);
const b = new Bounds(elem as any);
console.log(b);