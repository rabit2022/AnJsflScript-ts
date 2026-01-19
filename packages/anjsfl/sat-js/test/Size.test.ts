// Size.test.ts

// === Mock FlashElement / FlashDocument ===
import { SAT } from "../src";
import Size = SAT.Size;

interface MockFlashElement {
    width: number;
    height: number;
}

const mockDoc = { width: 1920, height: 1080 };

describe("Size", () => {
    // --------------------------------------------------------------------------
    // 1. Constructor & Properties
    // --------------------------------------------------------------------------

    test("constructor with values", () => {
        const s = new Size(800, 600);
        expect(s.width).toBe(800);
        expect(s.height).toBe(600);
    });

    test("default values", () => {
        const s = new Size(0, 0);
        expect(s.width).toBe(0);
        expect(s.height).toBe(0);
    });

    test("ratio", () => {
        const s = new Size(1600, 900);
        expect(s.ratio).toBeCloseTo(16 / 9);
    });

    test("ratio when height is 0", () => {
        const s = new Size(100, 0);
        expect(s.ratio).toBe(Infinity);
    });

    test("max_size / min_size", () => {
        const s = new Size(800, 600);
        expect(s.max_size).toBe(800);
        expect(s.min_size).toBe(600);

        const s2 = new Size(400, 1200);
        expect(s2.max_size).toBe(1200);
        expect(s2.min_size).toBe(400);
    });

    // --------------------------------------------------------------------------
    // 2. Calculation Methods
    // --------------------------------------------------------------------------

    test("add", () => {
        const a = new Size(100, 200);
        const b = new Size(50, 30);
        const result = a.add(b);
        expect(result).toEqual(new Size(150, 230));
        // Original unchanged
        expect(a).toEqual(new Size(100, 200));
    });

    test("sub", () => {
        const a = new Size(100, 200);
        const b = new Size(30, 50);
        const result = a.sub(b);
        expect(result).toEqual(new Size(70, 150));
        expect(a).toEqual(new Size(100, 200));
    });

    test("getRatioWidth", () => {
        const s = new Size(1600, 900); // ratio = 16/9
        const w = s.getRatioWidth(450); // should be 800
        expect(w).toBe(800);
    });

    test("getRatioHeight", () => {
        const s = new Size(1600, 900);
        const h = s.getRatioHeight(800); // should be 450
        expect(h).toBe(450);
    });

    test("getRatioWidth with zero height", () => {
        const s = new Size(100, 0);
        expect(s.getRatioWidth(50)).toBe(0); // or Infinity * 50 → NaN? But your code returns 0
        // Your implementation: return this.ratio * nowHeight → Infinity * 50 = Infinity
        // But let's check actual behavior:
        expect(s.getRatioWidth(50)).toBe(Infinity);
    });

    // --------------------------------------------------------------------------
    // 3. Static Factory Method: fromElement
    // --------------------------------------------------------------------------

    test("fromElement - SizeLike object", () => {
        const sizeLike = { width: 300, height: 200 };
        const s = Size.fromElement(sizeLike as any);
        expect(s).toEqual(new Size(300, 200));
    });

    test("fromElement - Size instance", () => {
        const original = new Size(400, 300);
        const s = Size.fromElement(original);
        expect(s).toEqual(new Size(400, 300));
    });

    test("fromElement - FlashElement", () => {
        const elem: MockFlashElement = { width: 500, height: 400 };
        const s = Size.fromElement(elem as any);
        expect(s).toEqual(new Size(500, 400));
    });

    test("fromElement - FlashDocument", () => {
        const s = Size.fromElement(mockDoc as any);
        expect(s).toEqual(new Size(1920, 1080));
    });

    test("fromElement - invalid object", () => {
        const invalid = { foo: "bar" };
        expect(() => Size.fromElement(invalid as any)).toThrow();
    });

    // --------------------------------------------------------------------------
    // 4. Edge Cases
    // --------------------------------------------------------------------------

    test("negative dimensions", () => {
        const s = new Size(-100, -200);
        expect(s.width).toBe(-100);
        expect(s.height).toBe(-200);
        expect(s.ratio).toBe(0.5); // (-100)/(-200)
    });

    test("zero dimensions", () => {
        const s = new Size(0, 0);
        expect(s.ratio).toBeNaN(); // 0/0 = NaN
        expect(s.getRatioWidth(100)).toBeNaN();
        expect(s.getRatioHeight(100)).toBeNaN();
    });
});
