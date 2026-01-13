
// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______     ______     ______   ______     __   __     ______
// /\  == \   /\  ___\   /\  ___\   /\__  _\ /\  __ \   /\ "-.\ \   /\  ___\
// \ \  __<   \ \  __\   \ \ \____  \/_/\ \/ \ \  __ \  \ \ \-.  \  \ \ \__ \
//  \ \_\ \_\  \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\\"\_\  \ \_____\
//   \/_/ /_/   \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/ \/_/   \/_____/
//
//  __         ______
// /\ \       /\  ___\
// \ \ \____  \ \  __\
//  \ \_____\  \ \_____\
//   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// Rectangle
//
// Represents a rectangle with `left`, `top`, `right`, and `bottom` properties.

/**
 * Rectangle object.
 * Useful for quickly creating objects on the stage
 * @class Rectangle
 * @constructor
 */
function Rectangle() {
    SObject.apply(this, arguments);

    // variables
    var args = arguments;
    var $dom = fl.getDocumentDOM();

    // switch
    switch (args.length) {
        // 0 arguments, use document size
        case 0:
            this.left = 0;
            this.top = 0;
            this.right = $dom.width;
            this.bottom = $dom.height;
            break;

        // 1 argument - should be a document, element, radius, or an Array of Elements (such as a selection)
        case 1:
            // Bounds,RectangleLike
            if (args[0] instanceof Rectangle || IsRectangleLike(args[0])) {
                this.copy(args[0]);
            }

            // Document
            else if (args[0] instanceof Document) {
                return new Rectangle();
            }

            // Element (element bounds)
            else if (args[0] instanceof Element || args[0] instanceof SymbolItem) {
                this.left = args[0].left;
                this.top = args[0].top;
                this.right = args[0].left + args[0].width;
                this.bottom = args[0].top + args[0].height;
            }

            // Number (radius)
            else if (typeof args[0] === "number") {
                this.left = -args[0];
                this.top = -args[0];
                this.right = args[0];
                this.bottom = args[0];
            }

                // Array - selection or list of elements
            // 找到所有元素的最小矩形
            else if (args[0] instanceof Array && args[0].length) {
                var rect = findBoundingRectangle(args[0]);
                this.copy(rect);
            }

            // undefined
            else if (args[0] === undefined) {
                throw new Error("Rectangle: 请选中一个元件。 ");
            }

            // other
            else {
                // console.stack('Rectangle: Invalid argument 1');
                throw new Error("Invalid argument 1");
            }

            break;

        // (width, height),(centerPos, radius)
        case 2:
            if (typeof args[0] === "number" && typeof args[1] === "number") {
                this.left = 0;
                this.top = 0;
                this.right = args[0];
                this.bottom = args[1];
            } else if (args[0] instanceof Vector && typeof args[1] === "number") {
                var radiusRect = new Rectangle(args[1]);
                var centerPos = args[0];
                var addRect = radiusRect.addOffset(centerPos);
                this.copy(addRect);
            } else {
                throw new Error("Invalid argument 2");
            }
            break;

        // left, top, right, bottom
        case 4:
            this.left = args[0];
            this.top = args[1];
            this.right = args[2];
            this.bottom = args[3];
            break;
    }
}

INHERIT_MACRO(Rectangle, SObject);

Object.defineProperty(Rectangle.prototype, "width", {
    get: function() {
        return this.right - this.left;
    }
});
Object.defineProperty(Rectangle.prototype, "height", {
    get: function() {
        return this.bottom - this.top;
    }
});
Object.defineProperty(Rectangle.prototype, "center", {
    get: function() {
        return this.getCenterVector();
    }
});
Object.defineProperty(Rectangle.prototype, "size", {
    get: function() {
        return this.getSize();
    }
});


SAT["Rectangle"] = Rectangle;
SAT["R"] = Rectangle;

/**
 * 矩形 偏移后的 矩形
 * 移动矩形的边界
 * @param {Number|Vector|Rectangle} offset 偏移量
 * @returns {Rectangle} 矩形
 */
Rectangle.prototype.addOffset = function(offset) {
    if (typeof offset === "number") {
        offset = new Rectangle(offset, offset, offset, offset);
    } else if (offset instanceof Vector) {
        offset = new Rectangle(offset.x, offset.y, offset.x, offset.y);
    }
    return new Rectangle(this.left + offset.left, this.top + offset.top, this.right + offset.right, this.bottom + offset.bottom);
};

/**
 * 矩形 偏移前的 矩形
 * 移动矩形的边界
 * @param {Number|Vector|Rectangle} offset 偏移量
 * @returns {Rectangle} 矩形
 */
Rectangle.prototype.subOffset = function(offset) {
    if (typeof offset === "number") {
        offset = new Rectangle(offset, offset, offset, offset);
    } else if (offset instanceof Vector) {
        offset = new Rectangle(offset.x, offset.y, offset.x, offset.y);
    }
    return new Rectangle(this.left - offset.left, this.top - offset.top, this.right - offset.right, this.bottom - offset.bottom);
};

/**
 * 扩大矩形的边界
 * @param {Number|Vector|Rectangle} size 扩大量
 * @param {DirectionType} [whichDirection="all"] 哪个角点
 * @returns {Rectangle} 矩形
 */
Rectangle.prototype.expand = function(size, whichDirection) {
    // const offset = new Rectangle(-size, -size, size, size);
    // return this.addOffset(offset);
    if (whichDirection === undefined) whichDirection = "all";

    var offset = new Rectangle(0, 0, 0, 0);
    switch (whichDirection) {
        case "left":
            offset.left = -size;
            break;
        case "top":
            offset.top = -size;
            break;
        case "right":
            offset.right = size;
            break;
        case "bottom":
            offset.bottom = size;
            break;
        case "all":
            offset.left = -size;
            offset.top = -size;
            offset.right = size;
            offset.bottom = size;
            break;
        default:
            throw new Error("whichDirection 参数错误:" + whichDirection);
    }

    return this.addOffset(offset);
};
/**
 * 缩小矩形的边界
 * @param {Number|Vector|Rectangle} size 缩小量
 * @param {Direction} [whichDirection="all"] 哪个角点
 * @returns {Rectangle} 矩形
 */
Rectangle.prototype.shrink = function(size, whichDirection) {
    // const offset = new Rectangle(-size, -size, size, size);
    // return this.subOffset(offset);
    if (whichDirection === undefined) whichDirection = "all";

    var offset = new Rectangle(0, 0, 0, 0);
    switch (whichDirection) {
        case "left":
            offset.left = -size;
            break;
        case "top":
            offset.top = -size;
            break;
        case "right":
            offset.right = size;
            break;
        case "bottom":
            offset.bottom = size;
            break;
        case "all":
            offset.left = -size;
            offset.top = -size;
            offset.right = size;
            offset.bottom = size;
            break;
        default:
            throw new Error("whichDirection 参数错误:" + whichDirection);
    }

    return this.subOffset(offset);
};


/**
 * 矩形中心点
 * @returns {Vector} 点
 */
Rectangle.prototype.getCenterVector = function() {
    return new Vector((this.left + this.right) / 2, (this.top + this.bottom) / 2);
};

/**
 * 矩形大小
 * @returns {Size} 大小
 */
Rectangle.prototype.getSize = function() {
    return new Size(this.width, this.height);
};

/**
 * 是否包含,当前矩形 是否 在 目标矩形 内部
 * @param {Rectangle} rect 矩形
 * @returns {boolean} 包含返回true，否则返回false
 */
Rectangle.prototype.contains = function(rect) {
    return (this.left <= rect.left && this.top <= rect.top && this.right >= rect.right && this.bottom >= rect.bottom);
};

/**
 * 获取矩形的某个角点
 * @param {Corner} whichCorner 角点或中心点
 * @returns {Vector} 点
 */
Rectangle.prototype.getCorner = function(whichCorner) {
    // 获取矩形的基本属性
    const { left, right, top, bottom } = this;

    // 获取中心点坐标
    const { x: centerX, y: centerY } = this.getCenterVector();

    // 辅助函数：创建 Vector 对象
    function createVector(x, y) {
        return new Vector(x, y);
    }

    switch (whichCorner) {
        case "top right":
            return createVector(right, top);
        case "top left":
            return createVector(left, top);
        case "bottom right":
            return createVector(right, bottom);
        case "bottom left":
            return createVector(left, bottom);
        case "top center":
            return createVector(centerX, top);
        case "right center":
            return createVector(right, centerY);
        case "bottom center":
            return createVector(centerX, bottom);
        case "left center":
            return createVector(left, centerY);
        case "center":
            return createVector(centerX, centerY);
        default:
            throw new Error("参数错误：whichCorner " + whichCorner);
    }
};

/**
 * 获取矩形的某个部分
 *
 * 该方法根据指定的 `whichPart` 参数，从当前矩形中提取一个子矩形。子矩形的大小和位置由 `whichPart` 和比例参数（`widthRatio` 和 `heightRatio`）决定。
 *
 * @param {Part} whichPart 部分
 * @param {number} [widthRatio=0.5] - 宽度方向的比例（0-1），表示提取部分的宽度占原始矩形宽度的比例。
 * @param {number} [heightRatio=0.5] - 高度方向的比例（0-1），表示提取部分的高度占原始矩形高度的比例。
 * @returns {Rectangle} - 返回一个新矩形对象，表示提取的部分。
 * @throws {Error} - 如果 `whichPart` 参数无效，将抛出错误。
 */
Rectangle.prototype.getPart = function(whichPart, widthRatio, heightRatio) {
    if (typeof widthRatio === "undefined") widthRatio = 0.5;
    if (typeof heightRatio === "undefined") heightRatio = widthRatio;
    // console.log("whichPart", whichPart, "widthRatio", widthRatio, "heightRatio", heightRatio);

    // 解构矩形的基本属性
    const { left, right, top, bottom, width, height } = this;
    // console.log("left", left, "top", top, "right", right, "bottom", bottom, "width", width, "height", height);

    // 获取中心点坐标
    const { x: centerX, y: centerY } = this.getCenterVector();
    // console.log("centerX", centerX, "centerY", centerY);

    // 提前计算宽度和高度的占比
    const widthPart = width * widthRatio;
    const heightPart = height * heightRatio;
    // console.log("widthPart", widthPart, "heightPart", heightPart);

    // 提前计算宽度和高度的剩余部分
    const widthInversePart = width - widthPart;
    const heightInversePart = height - heightPart;
    // console.log("widthInversePart", widthInversePart, "heightInversePart", heightInversePart);

    // 提前计算宽度和高度的一半占比
    const halfWidthPart = widthPart / 2;
    const halfHeightPart = heightPart / 2;
    // console.log("halfWidthPart", halfWidthPart, "halfHeightPart", halfHeightPart);

    switch (whichPart) {
        case "top right":
            return new Rectangle(right - widthInversePart, top, right, top + heightPart);
        case "top left":
            return new Rectangle(left, top, left + widthPart, top + heightPart);
        case "bottom right":
            return new Rectangle(right - widthInversePart, bottom - heightInversePart, right, bottom);
        case "bottom left":
            return new Rectangle(left, bottom - heightInversePart, left + widthPart, bottom);
        case "top center":
            return new Rectangle(centerX - halfWidthPart, top, centerX + halfWidthPart, top + heightPart);
        case "right center":
            // console.log("right center",widthRatio,heightRatio);
            return new Rectangle(right - widthInversePart, centerY - halfHeightPart, right, centerY + halfHeightPart);
        case "bottom center":
            return new Rectangle(centerX - halfWidthPart, bottom - heightPart, centerX + halfWidthPart, bottom);
        case "left center":
            return new Rectangle(left, centerY - halfHeightPart, left + widthPart, centerY + halfHeightPart);
        case "center":
            return new Rectangle(centerX - halfWidthPart, centerY - halfHeightPart, centerX + halfWidthPart, centerY + halfHeightPart);
        case "top":
            return new Rectangle(left, top, right, top + heightPart);
        case "right":
            return new Rectangle(right - widthInversePart, top, right, bottom);
        case "bottom":
            return new Rectangle(left, bottom - heightPart, right, bottom);
        case "left":
            return new Rectangle(left, top, left + widthPart, bottom);
        default:
            throw new Error("whichPart 参数错误");
    }
};

// --------------------------------------------------------------------------------
// # Utility methods

/**
 * 合并两个矩形，返回一个能够包含两个矩形的最小矩形。
 * @param {Rectangle} other - 要合并的另一个矩形。
 * @return {Rectangle} 合并后的矩形。
 */
Rectangle.prototype.union = function(other) {
    // 计算合并后的矩形的左上角和右下角坐标
    var minLeft = Math.min(this.left, other.left);
    var minTop = Math.min(this.top, other.top);
    var maxRight = Math.max(this.right, other.right);
    var maxBottom = Math.max(this.bottom, other.bottom);

    return new Rectangle(minLeft, minTop, maxRight, maxBottom);
};

Rectangle.fromElements = findBoundingRectangle;
Rectangle.fromTopLeft = wrapRectByTopLeft;
Rectangle.fromCenter = wrapRectByCenter;
Rectangle.fromVectors = function(vectors) {
    // 创建一个初始矩形
    var rect = new Rectangle(0, 0, 0, 0);

    // 遍历所有向量，更新矩形的边界
    for (var i = 0; i < vectors.length; i++) {
        var vector = vectors[i];

        // 在第一次迭代时初始化矩形的边界
        if (i === 0) {
            rect.left = vector.x;
            rect.top = vector.y;
            rect.right = vector.x;
            rect.bottom = vector.y;
        } else {
            // 更新矩形的边界
            rect.left = Math.min(rect.left, vector.x);
            rect.top = Math.min(rect.top, vector.y);
            rect.right = Math.max(rect.right, vector.x);
            rect.bottom = Math.max(rect.bottom, vector.y);
        }
    }
    return rect;
};

Rectangle.fromRects = function(rects) {
    // 创建一个初始矩形
    var rect = new Rectangle(0, 0, 0, 0);

    // 遍历所有矩形，更新矩形的边界
    for (var i = 0; i < rects.length; i++) {
        var r = rects[i];

        // 在第一次迭代时初始化矩形的边界
        if (i === 0) {
            rect.left = r.left;
            rect.top = r.top;
            rect.right = r.right;
            rect.bottom = r.bottom;
        } else {
            // 更新矩形的边界
            rect.left = Math.min(rect.left, r.left);
            rect.top = Math.min(rect.top, r.top);
            rect.right = Math.max(rect.right, r.right);
            rect.bottom = Math.max(rect.bottom, r.bottom);
        }
    }
    return rect;

};
/**
 * 旋转矩形
 * @param {number} angle 角度
 * @param {Corner} [whichCorner="center"] 哪个角点
 * @returns {Rectangle} 矩形
 */
Rectangle.prototype.rotate = function(angle, whichCorner) {
    // 默认旋转中心为矩形中心
    whichCorner = whichCorner || "center";

    // 将角度转换为弧度
    var radians = angle * (Math.PI / 180);

    // 获取旋转中心点的坐标
    var center = this.getCorner(whichCorner);

    // 获取矩形的四个顶点坐标
    var topLeft = this.getCorner("top left");
    var topRight = this.getCorner("top right");
    var bottomLeft = this.getCorner("bottom left");
    var bottomRight = this.getCorner("bottom right");

    function rotate(vector, radians, center) {
        return vector.sub(center).rotate(radians).add(center);
    }

    // 旋转每个顶点
    var rotatedTopLeft = rotate(topLeft, radians, center);
    var rotatedTopRight = rotate(topRight, radians, center);
    var rotatedBottomLeft = rotate(bottomLeft, radians, center);
    var rotatedBottomRight = rotate(bottomRight, radians, center);

    // 根据旋转后的顶点重新计算矩形的边界
    var newRect = Rectangle.fromVectors([rotatedTopLeft, rotatedTopRight, rotatedBottomRight, rotatedBottomLeft]);

    return newRect;
};

/**
 * 由左上角坐标和宽高创建矩形
 * @returns {Rectangle} 矩形对象
 */
function wrapRectByTopLeft() {
    // variables
    var args = arguments;
    switch (args.length) {
        // topLeft,size
        case 2:
            var topLeft = args[0];
            var size = args[1];
            return wrapRectByTopLeft(topLeft.x, topLeft.y, size.width, size.height);
            // eslint-disable-next-line no-unreachable
            break;
        case 4:
            var left = args[0];
            var top = args[1];
            var width = args[2];
            var height = args[3];
            return new Rectangle(left, top, left + width, top + height);
            // eslint-disable-next-line no-unreachable
            break;
        default:
            throw new Error("Invalid arguments");
    }

}

/**
 * 由中心点坐标和宽高创建矩形
 * @returns {Rectangle} 矩形对象
 */
function wrapRectByCenter() {
    var args = arguments;
    switch (args.length) {
        // center,size
        case 2:
            var center = args[0];
            var size = args[1];
            return wrapRectByCenter(center.x, center.y, size.width, size.height);
            // eslint-disable-next-line no-unreachable
            break;
        // centerX,centerY,width,height
        case 4:
            var centerX = args[0];
            var centerY = args[1];
            var width = args[2];
            var height = args[3];
            return new Rectangle(centerX - width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2);
            // eslint-disable-next-line no-unreachable
            break;
        default:
            throw new Error("Invalid arguments");
    }
}

/**
 * Finds the smallest rectangle that contains all the given points.
 *
 * @param {Array<Element>} elements - An array of Elements.
 * @return {Rectangle} The smallest rectangle that contains all the points.
 */
function findBoundingRectangle(elements) {
    if (!elements.length) {
        return null; // 如果数组为空，返回null
    }

    var top = elements[0].top;
    var left = elements[0].left;
    var right = elements[0].left + elements[0].width;
    var bottom = elements[0].top + elements[0].height;

    for (var i = 1; i < elements.length; i++) {
        var element = elements[i];
        var elementTop = element.top;
        var elementLeft = element.left;
        var elementRight = element.left + element.width;
        var elementBottom = element.top + element.height;

        if (elementTop < top) top = elementTop;
        if (elementLeft < left) left = elementLeft;
        if (elementRight > right) right = elementRight;
        if (elementBottom > bottom) bottom = elementBottom;
    }

    return new Rectangle(left, top, right, bottom);
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
 * @returns {Rectangle}
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

    var rect = new Rectangle(doc);
    var stageCenter = rect.getCenterVector();
    return stageCenter;
}

/**
 * 获取舞台矩形
 * @return {Rectangle} 矩形对象
 */
function getStageRect() {
    var doc = fl.getDocumentDOM();
    var rect = new Rectangle(doc);
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
 * @return {Rectangle} 矩形对象
 */
function getCameraRect(timeline, frameIndex) {
    const { width: stageWidth, height: stageHeight } = getStageSize();

    var cameraPos = wrapPosition(timeline.camera.getPosition(frameIndex));
    var cameraZoomRatio = timeline.camera.getZoom(frameIndex) / 100;
    // var stageWidth = doc.width;
    // var stageHeight = doc.height;
    var cameraRect = new Rectangle(-cameraPos.x, -cameraPos.y, -cameraPos.x + stageWidth / cameraZoomRatio, -cameraPos.y + stageHeight / cameraZoomRatio);
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


SAT_GLOBALS["wrapRectByTopLeft"] = wrapRectByTopLeft;
SAT_GLOBALS["wrapRectByCenter"] = wrapRectByCenter;
SAT_GLOBALS["findBoundingRectangle"] = findBoundingRectangle;

SAT_GLOBALS["getSymbolCenter"] = getSymbolCenter;
SAT_GLOBALS["getStageCenter"] = getStageCenter;

SAT_GLOBALS["getSymbolRect"] = getSymbolRect;
SAT_GLOBALS["getSymbolBounds"] = getSymbolBounds;

SAT_GLOBALS["getStageBounds"] = getStageBounds;
SAT_GLOBALS["getStageRect"] = getStageRect;

SAT_GLOBALS["getStageSize"] = getStageSize;

SAT_GLOBALS["getCameraRect"] = getCameraRect;
SAT_GLOBALS["getCameraBounds"] = getCameraBounds;

SAT_GLOBALS["getCameraCenter"] = getCameraCenter;


/**
 * 当前对象是否与 RectangleLike 对象相等
 * @param {Rectangle|RectangleLike} obj 矩形对象
 * @returns {boolean} 相等返回true，否则返回false
 * @private
 */
function IsRectangleLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.left === "number" && typeof obj.top === "number" && typeof obj.right === "number" && typeof obj.bottom === "number");
}

SAT_CHECk["IsRectangleLike"] = IsRectangleLike;
