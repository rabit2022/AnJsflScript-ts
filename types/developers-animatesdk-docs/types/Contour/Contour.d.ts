import {Fill} from "../Fill/Fill";
import {HalfEdge} from "../HalfEdge/HalfEdge";

/**
 * Represents a closed path of half-edges on the boundary of a shape in Adobe Animate (formerly Flash).
 * Contours define the outline(s) of a shape, including holes (inner contours) and outer boundaries.
 *
 * @availability Flash MX 2004 and later
 */
export interface Contour {
  // --- Methods ---

  /**
   * Returns a {@link HalfEdge} object that lies on this contour.
   * The returned half-edge can be used to traverse the entire contour via `getNext()`.
   *
   * @returns A {@link HalfEdge} object on the contour.
   * @availability Flash MX 2004
   *
   * @example
   * // Traverses all contours of the selected shape and logs vertex coordinates
   * var elt = fl.getDocumentDOM().selection[0];
   * elt.beginEdit();
   * var contourArray = elt.contours;
   * var contourCount = 0;
   * for (i = 0; i < contourArray.length; i++) {
   *   var contour = contourArray[i];
   *   contourCount++;
   *   var he = contour.getHalfEdge();
   *   var iStart = he.id;
   *   var id = 0;
   *   while (id != iStart) {
   *     // Get the next vertex.
   *     var vrt = he.getVertex();
   *     var x = vrt.x;
   *     var y = vrt.y;
   *     fl.trace("vrt: " + x + ", " + y);
   *     he = he.getNext();
   *     id = he.id;
   *   }
   * }
   * elt.endEdit();
   */
  getHalfEdge(): HalfEdge;

  // --- Properties ---

  /**
   * The fill applied to the area enclosed by this contour.
   *
   * ⚠️ Note: This property is documented as available starting in **Flash CS4 Professional**,
   * whereas other members are from Flash MX 2004.
   *
   * @availability Flash CS4 Professional
   * @example
   * // Assuming a contour with a fill is selected, display its fill color
   * var insideContour = fl.getDocumentDOM().selection[0].contours[1];
   * var insideFill = insideContour.fill;
   * fl.trace(insideFill.color);
   *
   * @see Fill
   */
  fill: Fill;

  /**
   * Read-only. Indicates whether this contour encloses a non-zero area.
   * - `true` → the contour defines a filled region (e.g., outer boundary or hole)
   * - `false` → the contour has no area (e.g., degenerate path)
   *
   * @availability Flash MX 2004
   * @readonly
   * @example
   * // Traverses all contours and logs the `interior` value
   * var elt = fl.getDocumentDOM().selection[0];
   * elt.beginEdit();
   * var contourArray = elt.contours;
   * var contourCount = 0;
   * for (i = 0; i < contourArray.length; i++) {
   *   var contour = contourArray[i];
   *   fl.trace("Next Contour, interior:" + contour.interior);
   *   contourCount++;
   * }
   * elt.endEdit();
   */
  readonly interior: boolean;

  /**
   * Read-only. Indicates the winding orientation of the contour:
   * - `1` → clockwise
   * - `-1` → counterclockwise
   * - `0` → contour has no area (degenerate)
   *
   * In standard vector graphics:
   * - Outer boundaries are typically **clockwise** (`1`)
   * - Holes (inner contours) are typically **counterclockwise** (`-1`)
   *
   * @availability Flash MX 2004
   * @readonly
   * @example
   * // Traverses all contours and logs the `orientation` value
   * var elt = fl.getDocumentDOM().selection[0];
   * elt.beginEdit();
   * var contourArray = elt.contours;
   * var contourCount = 0;
   * for (i = 0; i < contourArray.length; i++) {
   *   var contour = contourArray[i];
   *   fl.trace("Next Contour, orientation:" + contour.orientation);
   *   contourCount++;
   * }
   * elt.endEdit();
   */
  readonly orientation: -1 | 0 | 1;
}


