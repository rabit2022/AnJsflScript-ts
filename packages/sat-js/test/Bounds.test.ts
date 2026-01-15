// Bounds.test.ts

// === Mock global fl (for default constructor) ===
import {SAT} from "../src";
import Bounds = SAT.Bounds;
import Vector = SAT.Vector;
import {RelativePosition} from "../src/enum/vectorEnums";
import {RectanglePart} from "../src/enum/boundsEnum";

const mockDoc = { width: 800, height: 600 };
(global as any).fl = {
    getDocumentDOM: () => mockDoc,
};

// === Mock FlashElement for testing ===
interface MockFlashElement {
    left: number;
    top: number;
    width: number;
    height: number;
}

// === Imports ===

// Helper to create mock element
const makeElement = (l: number, t: number, w: number, h: number): MockFlashElement => ({
    left: l, top: t, width: w, height: h
});

describe("Bounds", () => {
    // --------------------------------------------------------------------------
    // 1. Constructor Tests
    // --------------------------------------------------------------------------

    test("no args → full document", () => {
        const b = new Bounds();
        expect(b).toEqual({ left: 0, top: 0, right: 800, bottom: 600 });
    });

    test("single number (radius)", () => {
        const b = new Bounds(10);
        expect(b).toEqual({ left: -10, top: -10, right: 10, bottom: 10 });
    });

    test("width, height", () => {
        const b = new Bounds(100, 200);
        expect(b).toEqual({ left: 0, top: 0, right: 100, bottom: 200 });
    });

    test("center (Vector) + radius", () => {
        const b = new Bounds(new Vector(50, 60), 5);
        expect(b).toEqual({ left: 45, top: 55, right: 55, bottom: 65 });
    });

    test("center (plain object) + radius", () => {
        const b = new Bounds({ x: 50, y: 60 }, 5);
        expect(b).toEqual({ left: 45, top: 55, right: 55, bottom: 65 });
    });

    test("four numbers", () => {
        const b = new Bounds(10, 20, 30, 40);
        expect(b).toEqual({ left: 10, top: 20, right: 30, bottom: 40 });
    });

    test("BoundsLike object", () => {
        const b = new Bounds({ left: 1, top: 2, right: 3, bottom: 4 });
        expect(b).toEqual({ left: 1, top: 2, right: 3, bottom: 4 });
    });

    test("Bounds instance (copy)", () => {
        const original = new Bounds(10, 20, 30, 40);
        const copy = new Bounds(original);
        expect(copy).toEqual(original);
        expect(copy).not.toBe(original);
    });

    test("FlashDocument-like object", () => {
        const doc = { width: 500, height: 400 };
        const b = new Bounds(doc as any);
        expect(b).toEqual({ left: 0, top: 0, right: 500, bottom: 400 });
    });

    test("FlashElement-like object", () => {
        const elem = makeElement(10, 20, 100, 200);
        const b = new Bounds(elem as any);
        expect(b).toEqual({ left: 10, top: 20, right: 110, bottom: 220 });
    });

    test("FlashSymbolItem (same as element)", () => {
        const item = makeElement(5, 10, 50, 60);
        const b = new Bounds(item as any);
        expect(b).toEqual({ left: 5, top: 10, right: 55, bottom: 70 });
    });

    test("array of FlashElements", () => {
        const elems = [
            makeElement(10, 10, 20, 20),
            makeElement(50, 50, 30, 30)
        ];
        const b = new Bounds(elems as any);
        expect(b).toEqual({ left: 10, top: 10, right: 80, bottom: 80 });
    });

    // --------------------------------------------------------------------------
    // 2. Property Tests
    // --------------------------------------------------------------------------

    test("properties: width, height, center, size", () => {
        const b = new Bounds(10, 20, 50, 80);
        expect(b.width).toBe(40);
        expect(b.height).toBe(60);
        expect(b.center).toEqual(new Vector(30, 50));
        expect(b.size).toEqual({ width: 40, height: 60 });
    });

    // --------------------------------------------------------------------------
    // 3. Method Tests
    // --------------------------------------------------------------------------

    test("addOffset / subOffset", () => {
        const b = new Bounds(10, 20, 30, 40);
        const offsetNum = b.addOffset(5);
        expect(offsetNum).toEqual({ left: 15, top: 25, right: 35, bottom: 45 });

        const offsetVec = b.addOffset(new Vector(1, 2));
        expect(offsetVec).toEqual({ left: 11, top: 22, right: 31, bottom: 42 });

        const subbed = b.subOffset(5);
        expect(subbed).toEqual({ left: 5, top: 15, right: 25, bottom: 35 });
    });

    test("expand / shrink", () => {
        const b = new Bounds(10, 10, 20, 20);
        const expanded = b.expand(5);
        expect(expanded).toEqual({ left: 5, top: 5, right: 25, bottom: 25 });

        const shrunk = b.shrink(3);
        expect(shrunk).toEqual({ left: 13, top: 13, right: 17, bottom: 17 });
    });

    test("contains", () => {
        const outer = new Bounds(0, 0, 100, 100);
        const inner = new Bounds(10, 10, 90, 90);
        const outside = new Bounds(50, 50, 150, 150);

        expect(outer.contains(inner)).toBe(true);
        expect(outer.contains(outside)).toBe(false);
    });

    test("union", () => {
        const a = new Bounds(0, 0, 10, 10);
        const b = new Bounds(5, 5, 15, 15);
        const merged = a.union(b);
        expect(merged).toEqual({ left: 0, top: 0, right: 15, bottom: 15 });
    });

    test("rotate (around center)", () => {
        const b = new Bounds(0, 0, 2, 2); // square centered at (1,1)
        const rotated = b.rotate(90);
        // After 90° rotation, AABB should still be [0,0,2,2] (square symmetric)
        expect(rotated).toEqual({ left: 0, top: 0, right: 2, bottom: 2 });
    });

    test("rotate (rectangle, 90°)", () => {
        const b = new Bounds(0, 0, 4, 2); // center at (2,1)
        const r = b.rotate(90);
        // Corners: (0,0)->(2,-1), (4,0)->(2,3), (4,2)->(0,3), (0,2)->(0,-1)
        // AABB: left=0, top=-1, right=2, bottom=3
        expect(r.left).toBeCloseTo(0);
        expect(r.top).toBeCloseTo(-1);
        expect(r.right).toBeCloseTo(2);
        expect(r.bottom).toBeCloseTo(3);
    });

    // --------------------------------------------------------------------------
    // 4. Factory Methods
    // --------------------------------------------------------------------------

    test("fromTopLeft (4 args)", () => {
        const b = Bounds.fromTopLeft(10, 20, 30, 40);
        expect(b).toEqual({ left: 10, top: 20, right: 40, bottom: 60 });
    });

    test("fromTopLeft (Vector + Size)", () => {
        const b = Bounds.fromTopLeft(new Vector(10, 20), { width: 30, height: 40 });
        expect(b).toEqual({ left: 10, top: 20, right: 40, bottom: 60 });
    });

    test("fromCenter", () => {
        const b = Bounds.fromCenter(50, 60, 20, 30);
        expect(b).toEqual({ left: 40, top: 45, right: 60, bottom: 75 });
    });

    test("fromVectors", () => {
        const points = [new Vector(10, 20), new Vector(30, 40)];
        const b = Bounds.fromVectors(points);
        expect(b).toEqual({ left: 10, top: 20, right: 30, bottom: 40 });
    });

    test("fromRects", () => {
        const rects = [new Bounds(0, 0, 10, 10), new Bounds(5, 5, 15, 15)];
        const b = Bounds.fromRects(rects);
        expect(b).toEqual({ left: 0, top: 0, right: 15, bottom: 15 });
    });

    test("fromElements", () => {
        const elems = [
            makeElement(10, 10, 20, 20),
            makeElement(50, 50, 30, 30)
        ];
        const b = Bounds.fromElements(elems as any);
        expect(b).toEqual({ left: 10, top: 10, right: 80, bottom: 80 });
    });

    // --------------------------------------------------------------------------
    // 5. Corner and Part Tests
    // --------------------------------------------------------------------------

    test("getCorner", () => {
        const b = new Bounds(10, 20, 30, 40);
        expect(b.getCorner(<RelativePosition>"TopLeft")).toEqual(new Vector(10, 20));
        expect(b.getCorner(<RelativePosition>"BottomRight")).toEqual(new Vector(30, 40));
        expect(b.getCorner(<RelativePosition>"Center")).toEqual(new Vector(20, 30));
    });

    test("getPart", () => {
        const b = new Bounds(0, 0, 100, 100);
        const topLeft = b.getPart(<RectanglePart>"TopLeft", 0.5, 0.5);
        expect(topLeft).toEqual({ left: 0, top: 0, right: 50, bottom: 50 });

        const center = b.getPart(<RectanglePart>"Center", 0.2, 0.2);
        expect(center).toEqual({ left: 40, top: 40, right: 60, bottom: 60 });
    });

    // --------------------------------------------------------------------------
    // 6. Error Cases
    // --------------------------------------------------------------------------

    const makeBounds = (...args: any[]) => new (Bounds as any)(...args);

    test("invalid single arg", () => {
        expect(() => makeBounds("invalid")).toThrow("Invalid argument 1");
        expect(() => makeBounds(null)).toThrow("Invalid argument 1");
    });

    test("invalid two args", () => {
        expect(() => makeBounds("a", "b")).toThrow("Invalid arguments for 2-arg constructor");
    });

    test("unsupported arg count", () => {
        expect(() => makeBounds(1, 2, 3)).toThrow("Unsupported number of arguments: 3");
    });

    test("empty elements array", () => {
        expect(() => makeBounds([])).toThrow("findBoundingRectangle: elements array is empty");
    });
});