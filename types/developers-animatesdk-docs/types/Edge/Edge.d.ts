import {Stroke} from "../Stroke/Stroke";
import {HalfEdge} from "../HalfEdge/HalfEdge";
import {FlashPoint} from "../Math/MathType";

/**
 * Represents an edge (a segment of a path) of a shape on the Flash/Animate Stage.
 * Edges can be straight lines or cubic Bézier curves.
 *
 * ⚠️ To modify an edge (e.g., via `setControl` or `splitEdge`), you must first call
 * `shape.beginEdit()` on its parent shape, and later call `shape.endEdit()`.
 *
 * @availability Flash MX 2004 and later (with `cubicSegmentIndex` and `stroke` from Flash CS4)
 */
export interface Edge {
  // --- Methods ---

  /**
   * Gets the location of a specified control point of this edge.
   *
   * Control point indices:
   * - `0`: beginning control point
   * - `1`: middle control point (for curves; for lines, this is the midpoint)
   * - `2`: end control point
   *
   * @param i The index of the control point (0, 1, or 2).
   * @returns A {@link Point} object with `x` and `y` coordinates.
   * @availability Flash MX 2004
   *
   * @example
   * // Store the first control point of the specified shape in the `pt` variable
   * var shape = fl.getDocumentDOM().selection[0];
   * var pt = shape.edges[0].getControl(0);
   */
  getControl(i: 0 | 1 | 2):FlashPoint;

  /**
   * Returns one of the two half-edges associated with this edge.
   * Each edge has two directed half-edges (one in each direction).
   *
   * @param index Specifies which half-edge to return:
   *              - `0` for the first half-edge
   *              - `1` for the second half-edge
   * @returns A {@link HalfEdge} object.
   * @availability Flash MX 2004
   *
   * @example
   * // Store the half-edges of the specified edge in `hEdge0` and `hEdge1`
   * var shape = fl.getDocumentDOM().selection[0];
   * var edge = shape.edges[0];
   * var hEdge0 = edge.getHalfEdge(0);
   * var hEdge1 = edge.getHalfEdge(1);
   */
  getHalfEdge(index: 0 | 1): HalfEdge;

  /**
   * Sets the position of a specified control point of this edge.
   *
   * ⚠️ You must call `shape.beginEdit()` before using this method.
   *
   * @param index The control point to set:
   *              - `0`: beginning
   *              - `1`: middle
   *              - `2`: end
   * @param x Horizontal coordinate. Relative to the edited object if in edit mode; otherwise relative to the Stage.
   * @param y Vertical coordinate. Relative to the edited object if in edit mode; otherwise relative to the Stage.
   * @availability Flash MX 2004
   *
   * @example
   * // Set the beginning control point of the specified edge to (0, 1)
   * var x = 0; var y = 1;
   * var shape = fl.getDocumentDOM().selection[0];
   * shape.beginEdit();
   * shape.edges[0].setControl(0, x, y);
   * shape.endEdit();
   */
  setControl(index: 0 | 1 | 2, x: number, y: number): void;

  /**
   * Splits this edge into two pieces at a specified parameter `t`.
   *
   * ⚠️ You must call `shape.beginEdit()` before using this method.
   *
   * @param t A floating-point value between 0 and 1:
   *          - `0` → start of the edge
   *          - `1` → end of the edge
   *          - `0.5` → middle (parametric midpoint; for curves, not necessarily geometric center)
   * @availability Flash MX 2004
   *
   * @example
   * // Split the specified edge in half
   * var shape = fl.getDocumentDOM().selection[0];
   * shape.beginEdit();
   * shape.edges[0].splitEdge(0.5);
   * shape.endEdit();
   */
  splitEdge(t: number): void;

  // --- Properties ---

  /**
   * Read-only. The index of the cubic segment in the parent shape that this edge belongs to.
   * Used with {@link Shape.getCubicSegmentPoints()}.
   *
   * @availability Flash CS4 Professional
   * @readonly
   *
   * @example
   * // Display the cubic segment index values for all edges of the selected shape
   * var theShape = fl.getDocumentDOM().selection[0];
   * var edgesArray = theShape.edges;
   * for (var i = 0; i < edgesArray.length; i++) {
   *   fl.trace(edgesArray[i].cubicSegmentIndex);
   * }
   */
  readonly cubicSegmentIndex: number;

  /**
   * Read-only. A unique integer identifier for this edge.
   *
   * @availability Flash MX 2004
   * @readonly
   *
   * @example
   * // Store a unique identifier for the specified edge
   * var shape = fl.getDocumentDOM().selection[0];
   * var my_shape_id = shape.edges[0].id;
   */
  readonly id: number;

  /**
   * Read-only. Indicates whether this edge is a straight line.
   * - `1` → straight line (the middle control point is the geometric midpoint)
   * - `0` → cubic Bézier curve
   *
   * @availability Flash MX 2004
   * @readonly
   *
   * @example
   * // Determine if the specified edge is a straight line (outputs 1 or 0)
   * var shape = fl.getDocumentDOM().selection[0];
   * fl.trace(shape.edges[0].isLine);
   */
  readonly isLine: 0 | 1;

  /**
   * The stroke style applied to this edge.
   *
   * @availability Flash CS4 Professional
   *
   * @example
   * // Display the stroke color of the first edge of the selected object
   * var shape = fl.getDocumentDOM().selection[0];
   * fl.trace(shape.edges[0].stroke.color);
   *
   * @see Stroke
   */
  stroke: Stroke;
}



