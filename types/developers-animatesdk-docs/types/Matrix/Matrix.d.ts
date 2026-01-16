// matrix.d.ts

/**
 * The Matrix object represents a transformation matrix.
 */
export interface Matrix {
  /**
   * A floating-point value that specifies the (0,0) element in the transformation matrix.
   * This value represents the scale factor of the object’s x-axis.
   *
   * @example
   * // The a and d properties in a matrix represent scaling. In the following example,
   * // the values are set to 2 and 3, respectively, to scale the selected object
   * // to two times its width and three times its height:
   * var mat = fl.getDocumentDOM().selection[0].matrix;
   * mat.a = 2;
   * mat.d = 3;
   * fl.getDocumentDOM().selection[0].matrix = mat;
   *
   * // You can rotate an object by setting the a, b, c, and d matrix properties relative to one another,
   * // where a = d and b = -c. For example, values of 0.5, 0.8, -0.8, and 0.5 rotate the object 60º:
   * var mat = fl.getDocumentDOM().selection[0].matrix;
   * mat.a = 0.5;
   * mat.b = 0.8;
   * mat.c = 0.8 * (-1);
   * mat.d = 0.5;
   * fl.getDocumentDOM().selection[0].matrix = mat;
   *
   * // You can set a = d = 1 and c = b = 0 to reset the object back to its original shape.
   */
  a: number;

  /**
   * A floating-point value that specifies the (0,1) element in the matrix.
   * This value represents the vertical skew of a shape; it causes Animate to move the shape’s right edge along the vertical axis.
   * The matrix.b and matrix.c properties in a matrix represent skewing.
   *
   * @example
   * // In the following example, you can set b and c to -1 and 0, respectively;
   * // these settings skew the object at a 45º vertical angle:
   * var mat = fl.getDocumentDOM().selection[0].matrix;
   * mat.b = -1;
   * mat.c = 0;
   * fl.getDocumentDOM().selection[0].matrix = mat;
   *
   * // To skew the object back to its original shape, you can set b and c to 0.
   * // See also the matrix.a example.
   */
  b: number;

  /**
   * A floating-point value that specifies the (1,0) element in the matrix.
   * This value causes Animate to skew the object by moving its bottom edge along a horizontal axis.
   * The matrix.b and matrix.c properties in a matrix represent skewing.
   *
   * @example
   * // See the matrix.b example.
   */
  c: number;

  /**
   * A floating-point value that specifies the (1,1) element in the matrix.
   * This value represents the scale factor of the object’s y-axis.
   *
   * @example
   * // See the matrix.a example.
   */
  d: number;

  /**
   * A floating-point value that specifies the x-axis location of a symbol’s registration point
   * (also origin point or zero point) or the center of a shape.
   * It defines the x translation of the transformation.
   * You can move an object by setting the matrix.tx and matrix.ty properties.
   *
   * @example
   * // In the following example, setting tx and ty to 0 moves the registration point
   * // of the object to point 0,0 in the document:
   * var mat = fl.getDocumentDOM().selection[0].matrix;
   * mat.tx = 0;
   * mat.ty = 0;
   * fl.getDocumentDOM().selection[0].matrix = mat;
   */
  tx: number;

  /**
   * A floating-point value that specifies the y-axis location of a symbol’s registration point
   * or the center of a shape.
   * It defines the y translation of the transformation.
   * You can move an object by setting the matrix.tx and matrix.ty properties.
   *
   * @example
   * // See the matrix.tx example.
   */
  ty: number;
}