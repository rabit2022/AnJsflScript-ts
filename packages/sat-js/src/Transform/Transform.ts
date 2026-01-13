
// ------------------------------------------------------------------------------------------------------------------------
//  ______   ______     ______     __   __     ______     ______   ______
// /\__  _\ /\  == \   /\  __ \   /\ "-.\ \   /\  ___\   /\  ___\ /\  __ \
// \/_/\ \/ \ \  __<   \ \  __ \  \ \ \-.  \  \ \___  \  \ \  __\ \ \ \/\ \
//    \ \_\  \ \_\ \_\  \ \_\ \_\  \ \_\\"\_\  \/\_____\  \ \_\    \ \_____\
//     \/_/   \/_/ /_/   \/_/\/_/   \/_/ \/_/   \/_____/   \/_/     \/_____/
//
//  ______     __    __
// /\  == \   /\ "-./  \
// \ \  __<   \ \ \-./\ \
//  \ \_\ \_\  \ \_\ \ \_\
//   \/_/ /_/   \/_/  \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// Transform
//
// Represents a transform with `rotation`, `scale`, `position`, `size`, and `skew` properties.

/**
 * 转换对象
 * @param element 要转换的对象
 * @constructor
 * @class Transform
 */
function Transform(element) {
    SObject.apply(this, arguments);

    this.element = element;
    // 旋转
    this.rotation = element.rotation;
    // 缩放
    this.scale = new Vector(element.scaleX, element.scaleY);
    // 位置
    this.position = new Vector(element.x, element.y);
    // 宽高
    this.size = new Size(element.width, element.height);
    // 倾斜
    this.skew = new Vector(element.skewX, element.skewY);
}

SAT["Transform"] = Transform;
SAT["TR"] = Transform;

INHERIT_MACRO(Scale, SObject);

Transform.prototype.setRotation = function(rotation) {
    this.element.rotation = rotation;
    this.rotation = rotation;
    return this;
};

// moveSelectionBy
Transform.prototype.moveSelectionBy = function(distanceToMove) {
    this.element.x += distanceToMove.x;
    this.element.y += distanceToMove.y;
    this.position = this.position.clone().add(distanceToMove);
    return this;
};
/**
 * 设置缩放
 * @param {Vector|Scale} scale 缩放比例
 * @return {Transform} Transform
 */
Transform.prototype.setScale = function(scale) {
    // 兼容性处理
    if (IsVectorLike(scale)) scale = scale.toScale();

    this.element.scaleX = scale.scaleX;
    this.element.scaleY = scale.scaleY;
    this.scale = scale;
    return this;
};
Transform.prototype.setPosition = function(position) {
    this.element.x = position.x;
    this.element.y = position.y;
    this.position = position;
    return this;
};
Transform.prototype.setSize = function(size) {
    this.element.width = size.width;
    this.element.height = size.height;
    this.size = size;
    return this;
};
/**
 * 设置倾斜
 * @param {Vector|Skew} skew 倾斜角度
 * @return {Transform} Transform
 */
Transform.prototype.setSkew = function(skew) {
    // 兼容性处理
    if (IsVectorLike(skew)) skew = skew.toSkew();

    this.element.skewX = skew.skewX;
    this.element.skewY = skew.skewY;
    this.skew = skew;
    return this;
};
Transform.from = wrapTransform;

/**
 * 包装一个对象为Transform对象
 * @param {Element} element 要包装的对象
 * @return {Transform} Transform
 */
function wrapTransform(element) {
    return new Transform(element);
}

SAT_GLOBALS["wrapTransform"] = wrapTransform;

function IsTransformLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.rotation === "number" && IsVectorLike(obj.scale) && IsVectorLike(obj.position) && IsSizeLike(obj.size) && IsVectorLike(obj.skew));
}

SAT_CHECk["IsTransformLike"] = IsTransformLike;

