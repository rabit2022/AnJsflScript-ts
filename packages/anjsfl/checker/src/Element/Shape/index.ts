

/**
 * 判断是否是 组
 */
export function IsGroup(element: FlashElement | Shape): boolean {
    return (element as Shape)?.isGroup ?? false;
}
/**
 * 判断是否是 形状
 */
export function IsShape(element:FlashElement|Shape):element is Shape {
    var isShape =  element.elementType === "shape";
    return isShape;
}


/**
 * 判断是否是 绘制对象
 */
export function IsDrawingObject(element:FlashElement|Shape):element is Shape {
    return (
        !IsGroup(element) &&
        (element.elementType === "shapeObj" && (element as Shape).isDrawingObject)
    );
}

export function IsOvalObject(element:FlashElement|Shape|OvalObject):element is OvalObject {
    return !IsGroup(element) && (element as Shape).isOvalObject;
}

export function IsRectangleObject(element:FlashElement|Shape|RectangleObject):element is RectangleObject {
    return !IsGroup(element) && (element as Shape).isRectangleObject;
}

