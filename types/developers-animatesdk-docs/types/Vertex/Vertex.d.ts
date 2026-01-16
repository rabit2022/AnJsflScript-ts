// vertex.d.ts

import {HalfEdge} from "../HalfEdge/HalfEdge";

/**
 * The Vertex object is the part of the shape data structure that holds the coordinate data.
 */
export interface Vertex {
  /**
   * Read-only; the x location of the vertex in pixels.
   *
   * @example
   * var shape = fl.getDocumentDOM().selection[0]; var hEdge = shape.edges[0].getHalfEdge(0); var vertex = hEdge.getVertex();fl.trace('x location of vertex is: ' + vertex.x); fl.trace('y location of vertex is: ' + vertex.y);
   */
  readonly x: number;

  /**
   * Read-only; the y location of the vertex in pixels.
   *
   * @example
   * See vertex.x.
   */
  readonly y: number;

  /**
   * Gets a HalfEdge object that shares this vertex.
   *
   * @returns A HalfEdge object.
   *
   * @example
   * var shape = fl.getDocumentDOM().selection[0]; var hEdge = shape.edges[0].getHalfEdge(0); var theVertex = hEdge.getVertex();var someHEdge = theVertex.getHalfEdge(); // Not necessarily the same half edge var theSameVertex = someHEdge.getVertex();fl.trace('the same vertex: ' + theSameVertex);
   */
  getHalfEdge(): HalfEdge;

  /**
   * Sets the location of the vertex.
   * You must call shape.beginEdit() before using this method.
   *
   * @param x A floating-point value that specifies the x coordinate of where the vertex should be positioned, in pixels.
   * @param y A floating-point value that specifies the y coordinate of where the vertex should be positioned, in pixels.
   * @returns Nothing.
   *
   * @example
   * var shape = fl.getDocumentDOM().selection[0]; shape.beginEdit();var hEdge = shape.edges[0].getHalfEdge(0); var vertex = hEdge.getVertex();var someHEdge = vertex.getHalfEdge();var vertex = someHEdge.getVertex();// Move the vertex to the origin. vertex.setLocation(0.0, 0.0);shape.endEdit();
   */
  setLocation(x: number, y: number): void;
}

