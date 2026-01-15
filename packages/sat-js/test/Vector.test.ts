// Vector.test.ts


import {SAT} from "../src";
import Vector = SAT.Vector;

describe("Vector", () => {
    // --------------------------------------------------------------------------
    // 1. Constructor & Constants
    // --------------------------------------------------------------------------

    test("constructor defaults", () => {
        const v = new Vector();
        expect(v).toEqual({ x: 0, y: 0 });
    });

    test("constructor with values", () => {
        const v = new Vector(3, -4);
        expect(v).toEqual({ x: 3, y: -4 });
    });

    test("constants", () => {
        expect(Vector.ZERO).toEqual({ x: 0, y: 0 });
        expect(Vector.ONE).toEqual({ x: 1, y: 1 });
        expect(Vector.LEFT).toEqual({ x: -1, y: 0 });
        expect(Vector.RIGHT).toEqual({ x: 1, y: 0 });
        expect(Vector.UP).toEqual({ x: 0, y: -1 });
        expect(Vector.DOWN).toEqual({ x: 0, y: 1 });
    });

    // --------------------------------------------------------------------------
    // 2. Mutable (Chaining) Methods
    // --------------------------------------------------------------------------

    test("perp (90° clockwise)", () => {
        const v = new Vector(1, 0);
        v.perp();
        expect(v).toEqual({ x: 0, y: -1 });
    });

    test("rotate (counter-clockwise)", () => {
        const v = new Vector(1, 0);
        v.rotate(Math.PI / 2); // 90°
        expect(v.x).toBeCloseTo(0);
        expect(v.y).toBeCloseTo(1);
    });

    test("reverse", () => {
        const v = new Vector(2, -3);
        v.reverse();
        expect(v).toEqual({ x: -2, y: 3 });
    });

    test("normalize", () => {
        const v = new Vector(3, 4);
        v.normalize();
        expect(v.len()).toBeCloseTo(1);
        expect(v).toEqual({ x: 0.6, y: 0.8 });
    });

    test("normalize zero vector", () => {
        const v = new Vector(0, 0);
        v.normalize(); // should not crash
        expect(v).toEqual({ x: 0, y: 0 });
    });

    test("add / sub", () => {
        const a = new Vector(1, 2);
        const b = new Vector(3, 4);
        a.add(b);
        expect(a).toEqual({ x: 4, y: 6 });
        a.sub(new Vector(1, 1));
        expect(a).toEqual({ x: 3, y: 5 });
    });

    test("scale", () => {
        const v = new Vector(2, 3);
        v.scale(2); // uniform
        expect(v).toEqual({ x: 4, y: 6 });
        v.scale(0.5, 2); // non-uniform
        expect(v).toEqual({ x: 2, y: 12 });
    });

    test("project / projectN", () => {
        const v = new Vector(3, 0);
        const axis = new Vector(1, 1).normalize(); // unit vector
        v.project(axis);
        expect(v.x).toBeCloseTo(1.5);
        expect(v.y).toBeCloseTo(1.5);

        const v2 = new Vector(3, 0);
        v2.projectN(axis); // same result for unit vector
        expect(v2.x).toBeCloseTo(1.5);
        expect(v2.y).toBeCloseTo(1.5);
    });

    test("reflect / reflectN", () => {
        const v = new Vector(1, -1);
        const normal = new Vector(0, 1); // floor normal
        v.reflect(normal);
        expect(v).toEqual({ x: 1, y: 1 }); // bounce up
    });

    // --------------------------------------------------------------------------
    // 3. Calculation Methods (Immutable)
    // --------------------------------------------------------------------------

    test("len / len2", () => {
        const v = new Vector(3, 4);
        expect(v.len()).toBe(5);
        expect(v.len2()).toBe(25);
    });

    test("dot / cross", () => {
        const a = new Vector(1, 0);
        const b = new Vector(0, 1);
        expect(a.dot(b)).toBe(0);
        expect(a.cross(b)).toBe(1); // 2D cross product (scalar)
    });

    test("angle", () => {
        expect(new Vector(1, 0).angle()).toBe(0);
        expect(new Vector(0, 1).angle()).toBe(Math.PI / 2);
        expect(new Vector(-1, 0).angle()).toBe(Math.PI);
    });

    test("angleTo", () => {
        const a = new Vector(1, 0);
        const b = new Vector(0, 1);
        expect(a.angleTo(b)).toBe(Math.PI / 2);
    });

    test("distanceTo", () => {
        const a = new Vector(0, 0);
        const b = new Vector(3, 4);
        expect(a.distanceTo(b)).toBe(5);
    });

    test("midpointTo", () => {
        const a = new Vector(0, 0);
        const b = new Vector(4, 6);
        expect(a.midpointTo(b)).toEqual(new Vector(2, 3));
    });

    test("abs / min / max", () => {
        expect(new Vector(-2, 3).abs()).toEqual(new Vector(2, 3));
        expect(new Vector(1, 5).min(new Vector(2, 3))).toEqual(new Vector(1, 3));
        expect(new Vector(1, 5).max(new Vector(2, 3))).toEqual(new Vector(2, 5));
    });

    test("halfSize", () => {
        expect(new Vector(4, 6).halfSize()).toEqual(new Vector(2, 3));
    });

    test("round", () => {
        const v = new Vector(2.7, -3.2);
        v.round();
        expect(v).toEqual({ x: 3, y: -3 });
    });

    test("noZero", () => {
        const v = new Vector(0, 5);
        v.noZero();
        expect(v).toEqual({ x: 1, y: 5 });
    });

    test("equals", () => {
        expect(new Vector(1, 2).equals(new Vector(1, 2))).toBe(true);
        expect(new Vector(1, 2).equals(new Vector(1, 3))).toBe(false);
    });

    test("orbit", () => {
        const pt = new Vector(0, 0);
        const v = new Vector(10, 0);
        v.orbit(pt, 10, 10, 90); // 90° around origin on circle radius 10
        expect(v.x).toBeCloseTo(0);
        expect(v.y).toBeCloseTo(10);
    });

    test("interpolate (instance)", () => {
        const a = new Vector(0, 0);
        const b = new Vector(4, 4);
        expect(a.interpolate(b, 0.5)).toEqual(new Vector(2, 2));
    });

    // --------------------------------------------------------------------------
    // 4. Static Methods
    // --------------------------------------------------------------------------

    test("static interpolate", () => {
        const a = new Vector(0, 0);
        const b = new Vector(4, 4);
        expect(Vector.interpolate(a, b, 0.5)).toEqual(new Vector(2, 2));
    });

    test("static polar", () => {
        const v = Vector.polar(10, Math.PI / 2); // length=10, angle=90°
        expect(v.x).toBeCloseTo(10); // note: your polar uses sin for x, cos for y
        expect(v.y).toBeCloseTo(0);
        // ⚠️ Your implementation: x = length * sin(angle), y = length * cos(angle)
        // This is unusual! Standard is x=cos, y=sin.
        // But we test as implemented.
    });

    test("static distance", () => {
        const a = new Vector(0, 0);
        const b = new Vector(3, 4);
        expect(Vector.distance(a, b)).toBe(5);
    });

    test("static fromAngle", () => {
        const v = Vector.fromAngle(Math.PI / 2); // 90°
        expect(v.x).toBeCloseTo(0);
        expect(v.y).toBeCloseTo(1);
    });

    // --------------------------------------------------------------------------
    // 5. Error Cases
    // --------------------------------------------------------------------------

    test("invert throws on zero", () => {
        expect(() => new Vector(0, 5).invert()).toThrow("x and y must not be zero");
        expect(() => new Vector(5, 0).invert()).toThrow("x and y must not be zero");
        expect(() => new Vector(0, 0).invert()).toThrow("x and y must not be zero");
    });

    test("invert valid", () => {
        const v = new Vector(2, 4).invert();
        expect(v).toEqual({ x: 0.5, y: 0.25 });
    });

    // --------------------------------------------------------------------------
    // 6. Utility Methods
    // --------------------------------------------------------------------------

    test("toSignVector", () => {
        expect(new Vector(-5, 3).toSignVector()).toEqual(new Vector(-1, 1));
        expect(new Vector(0, -2).toSignVector()).toEqual(new Vector(0, -1));
    });

    test("signPow", () => {
        const v = new Vector(3, 4);
        v.signPow(); // (|3| & 1) ? -1 : 1 → 3 is odd → -1; 4 even → 1
        expect(v).toEqual({ x: -1, y: 1 });
    });
});