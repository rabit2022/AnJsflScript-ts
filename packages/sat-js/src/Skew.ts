
// ------------------------------------------------------------------------------------------------------------------------
//  ______     __  __     ______     __     __
// /\  ___\   /\ \/ /    /\  ___\   /\ \  _ \ \
// \ \___  \  \ \  _"-.  \ \  __\   \ \ \/ ".\ \
//  \/\_____\  \ \_\ \_\  \ \_____\  \ \__/".~\_\
//   \/_____/   \/_/\/_/   \/_____/   \/_/   \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// Skew
function Skew(skewX, skewY) {
    this.skewX = skewX;
    this.skewY = skewY;
}

SAT["Skew"] = Skew;
SAT["SK"] = Skew;

INHERIT_MACRO(Scale, SObject);

Skew.prototype.toVector = function() {
    return new Vector(this.skewX, this.skewY);
};

function IsSkewLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.skewX === "number" && typeof obj.skewY === "number");
}

SAT_CHECk["IsSkewLike"] = IsSkewLike;

/**
 * 转换为Skew对象
 * @param {Element|Skew|SkewLike} element 斜切对象
 * @return {Skew}
 */
function wrapSkew(element) {
    return new Skew(element.skewX, element.skewY);
}
