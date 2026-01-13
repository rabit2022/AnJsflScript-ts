
// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______     ______     __         ______
// /\  ___\   /\  ___\   /\  __ \   /\ \       /\  ___\
// \ \___  \  \ \ \____  \ \  __ \  \ \ \____  \ \  __\
//  \/\_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_____\
//   \/_____/   \/_____/   \/_/\/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// Scale
function Scale(scaleX, scaleY) {
    SObject.apply(this, arguments);

    this.scaleX = scaleX;
    this.scaleY = scaleY;
}

SAT["Scale"] = Scale;
SAT["SC"] = Scale;

INHERIT_MACRO(Scale, SObject);


Scale.prototype.toVector = function() {
    return new Vector(this.scaleX, this.scaleY);
};
Scale.from = wrapScale;

function IsScaleLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.scaleX === "number" && typeof obj.scaleY === "number");
}

SAT_CHECk["IsScaleLike"] = IsScaleLike;

/**
 * 转换为Scale对象
 * @param {ScaleLike|Element|Scale} element 缩放对象
 * @return {Scale}
 */
function wrapScale(element) {
    return new Scale(element.scaleX, element.scaleY);
}
