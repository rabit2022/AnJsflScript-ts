/**
 * Represents a layer in Adobe Animate timeline that supports rig parenting.
 */
interface Layer {
    /**
     * Returns the rig matrix of the particular frame.
     *
     * @param frameIndex - An integer that specifies absolute frame index.
     * @returns A matrix object representing the rig transformation at the given frame.
     *
     * @example
     * // The following example gets the rig matrix from the first frame of the ninth layer:
     * var matrix = an.getDocumentDOM().getTimeline().layers[8].getRigMatrixAtFrame(0);
     */
    getRigMatrixAtFrame(frameIndex: number): Matrix;

    /**
     * Returns the layer parent of the given frame.
     *
     * @param frameIndex - An integer that specifies absolute frame index.
     * @returns The layer object that is the parent at the specified frame.
     *
     * @example
     * // The following example gets the layer parent from the first frame of the ninth layer:
     * var myparent = an.getDocumentDOM().getTimeline().layers[8].getRigParentAtFrame(0);
     */
    getRigParentAtFrame(frameIndex: number): Layer;

    /**
     * Sets the layer parent of the particular frame.
     *
     * @param frameIndex - An integer that specifies absolute frame index.
     * @param layer - The layer object to be set as parent.
     * @returns Nothing.
     *
     * @example
     * // The following example gets the layer parent of the first frame and sets the same to the tenth frame of the first layer:
     * var myParent = an.getDocumentDOM().getTimeline().layers[0].getRigParentAtFrame(0);
     * an.getDocumentDOM().getTimeline().layers[0].setRigParentAtFrame(9, myParent);
     */
    // setRigParentAtFrame(frameIndex: number, layer: FlashLayer): void;


    /**
     * @since Animate 2020
     * @param {number} frameIndex
     * @param {Layer|number} layer
     * @note 该方法设置指定帧的指定层的父级为指定层。
     * @bug 参数顺序错误，导致无法设置父级。
     * @bug 当 layer 是Layer无法工作时，可以传入数字，具体原因未知。
     */
    setRigParentAtFrame(layer:number, frameIndex:Layer|number): void;

}

