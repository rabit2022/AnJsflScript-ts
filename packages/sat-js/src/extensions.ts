import {Vector} from "./Vector";
import {Bounds} from "./core/Rectangle/Bounds";

/**
 * 取元素的左上角坐标
 * @param {Element} element 元素
 * @returns {Vector}
 */
function getTopLeft(element) {
    return new Vector(element.left, element.top);
}




/**
 * 获取元素的中心点坐标
 * @param {Element} element 元素
 * @return {Vector} 点
 */
function getSymbolCenter(element) {
    var topLeft = getTopLeft(element);
    var size = wrapSize(element);

    var rect = wrapRectByTopLeft(topLeft, size);
    return rect.getCenterVector();
}

/**
 * 获取元素的 矩形
 * @param element
 * @returns {Bounds}
 */
function getSymbolRect(element) {
    const size = wrapSize(element);
    const center = getSymbolCenter(element);

    const finalRect = wrapRectByCenter(center, size);
    return finalRect;
};
var getSymbolBounds = getSymbolRect;

/**
 * 获取舞台中心点坐标
 * @return {Vector} 点
 */
function getStageCenter() {
    var doc = fl.getDocumentDOM();

    var rect = new Bounds(doc);
    var stageCenter = rect.getCenterVector();
    return stageCenter;
}

/**
 * 获取舞台矩形
 * @return {Bounds} 矩形对象
 */
function getStageRect() {
    var doc = fl.getDocumentDOM();
    var rect = new Bounds(doc);
    return rect;
}

var getStageBounds = getStageRect;

/**
 * 获取舞台尺寸
 * @return {Size} 尺寸对象
 */
function getStageSize() {
    var doc = fl.getDocumentDOM();
    return wrapSize(doc);
}

/**
 * 获取摄像机矩形
 * @param {Timeline} timeline 时间轴
 * @param {number} frameIndex 帧索引
 * @return {Bounds} 矩形对象
 */
function getCameraRect(timeline, frameIndex) {
    const {width: stageWidth, height: stageHeight} = getStageSize();

    var cameraPos = wrapPosition(timeline.camera.getPosition(frameIndex));
    var cameraZoomRatio = timeline.camera.getZoom(frameIndex) / 100;
    // var stageWidth = doc.width;
    // var stageHeight = doc.height;
    var cameraRect = new Bounds(-cameraPos.x, -cameraPos.y, -cameraPos.x + stageWidth / cameraZoomRatio, -cameraPos.y + stageHeight / cameraZoomRatio);
    return cameraRect;
}

var getCameraBounds = getCameraRect;

/**
 * 获取摄像机中心点坐标
 * @param {Timeline} timeline 时间轴
 * @param {number} frameIndex 帧索引
 * @return {Vector} 点
 */
function getCameraCenter(timeline, frameIndex) {
    return getCameraRect(timeline, frameIndex).getCenterVector();
}
