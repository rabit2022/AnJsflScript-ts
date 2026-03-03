/**
 * Flash HalfEdge Object Type Definitions
 * Based on Adobe Flash MX 2004 documentation.
 *
 * The HalfEdge object represents the directed side of an edge of a Shape object.
 * Each edge has two half-edges (one for each side). You can traverse shape contours
 * by "walking around" these half-edges in sequence.
 *
 * Half edges are ordered and directional, forming closed loops (contours).
 * Edges themselves are unordered.
 */


/**
 * Represents a directed half-edge in a Flash shape's topology.
 * Availability: Flash MX 2004+
 */
interface HalfEdge {
    /**
     * Read-only; a unique integer identifier for this HalfEdge object.
     *
     * @example
     * // Display unique ID of the first half-edge in the first contour
     * const shape = fl.getDocumentDOM().selection[0] as Shape;
     * alert(shape.contours[0].getHalfEdge().id);
     */
    readonly id: number;

    /**
     * Gets the Edge object associated with this HalfEdge.
     * Each HalfEdge belongs to exactly one Edge.
     *
     * @returns The Edge object that this half-edge is part of.
     *
     * @example
     * const shape = fl.getDocumentDOM().selection[0] as Shape;
     * const hEdge = shape.edges[0].getHalfEdge(0);
     * const edge = hEdge.getEdge(); // Returns the original edge
     */
    getEdge(): Edge;

    /**
     * Gets the next HalfEdge on the current contour (in traversal order).
     * Allows walking forward along the contour loop.
     *
     * Note: Although half-edges have direction and sequence, edges do not.
     *
     * @returns The next HalfEdge in the same contour.
     *
     * @example
     * const shape = fl.getDocumentDOM().selection[0] as Shape;
     * const hEdge = shape.edges[0].getHalfEdge(0);
     * const nextHalfEdge = hEdge.getNext();
     */
    getNext(): HalfEdge;

    /**
     * Gets the HalfEdge on the opposite side of the same edge.
     * Every edge has exactly two half-edges; this returns the other one.
     *
     * @returns The opposite HalfEdge sharing the same underlying edge.
     *
     * @example
     * const shape = fl.getDocumentDOM().selection[0] as Shape;
     * const hEdge = shape.edges[0].getHalfEdge(0);
     * const otherHalfEdge = hEdge.getOppositeHalfEdge();
     */
    getOppositeHalfEdge(): HalfEdge;

    /**
     * Gets the preceding HalfEdge on the current contour (in traversal order).
     * Allows walking backward along the contour loop.
     *
     * Note: Although half-edges have direction and sequence, edges do not.
     *
     * @returns The previous HalfEdge in the same contour.
     *
     * @example
     * const shape = fl.getDocumentDOM().selection[0] as Shape;
     * const hEdge = shape.edges[0].getHalfEdge(0);
     * const prevHalfEdge = hEdge.getPrev();
     */
    getPrev(): HalfEdge;

    /**
     * Gets the Vertex object at the head (end point) of this HalfEdge.
     * The direction of the half-edge is from its tail to this head vertex.
     *
     * @returns The Vertex at the end of this half-edge.
     *
     * @example
     * const shape = fl.getDocumentDOM().selection[0] as Shape;
     * const edge = shape.edges[0];
     * const hEdge = edge.getHalfEdge(0);
     * const vertex = hEdge.getVertex(); // Vertex at hEdge's head
     */
    getVertex(): Vertex;
}

