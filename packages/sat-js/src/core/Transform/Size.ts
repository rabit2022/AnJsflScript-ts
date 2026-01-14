
// ------------------------------------------------------------------------------------------------------------------------
//  ______     __     ______     ______
// /\  ___\   /\ \   /\___  \   /\  ___\
// \ \___  \  \ \ \  \/_/  /__  \ \  __\
//  \/\_____\  \ \_\   /\_____\  \ \_____\
//   \/_____/   \/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// Size
//
// Represents a size with `width` and `height` properties.

/**
 * 尺寸
 * @param {number} width 宽度
 * @param {number} height 高度
 * @constructor
 * @class {Size} Size
 */
function Size(width, height) {
    SObject.apply(this, arguments);

    this.width = width;
    this.height = height;
}

SAT["Size"] = Size;
SAT["S"] = Size;

INHERIT_MACRO(Size, SObject);

Object.defineProperty(Size.prototype, "ratio", {
    get: function() {
        return this.width / this.height;
    }
});
Object.defineProperty(Size.prototype, "max_size", {
    get: function() {
        return Math.max(this.width, this.height);
    }
});
Object.defineProperty(Size.prototype, "min_size", {
    get: function() {
        return Math.min(this.width, this.height);
    }
});


/**
 * 相加两个尺寸
 * @param {Size} size 尺寸
 * @returns {Size} 尺寸
 */
Size.prototype.add = function(size) {
    return new Size(this.width + size.width, this.height + size.height);
};
/**
 * 相减两个尺寸
 * @param {Size} size 尺寸
 * @returns {Size} 尺寸
 */
Size.prototype.sub = function(size) {
    return new Size(this.width - size.width, this.height - size.height);
};

Size.prototype.getRatioWidth = function(nowHeight) {
    return this.ratio * nowHeight;
};

Size.prototype.getRatioHeight = function(nowWidth) {
    return nowWidth / this.ratio;
};

Size.prototype.toVector = function() {
    return new Vector(this.width, this.height);
};
Size.from = wrapSize;

function wrapSize(element) {
    return new Size(element.width, element.height);
}

SAT_GLOBALS["wrapSize"] = wrapSize;

function IsSizeLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.width === "number" && typeof obj.height === "number");
}

SAT_CHECk["IsSizeLike"] = IsSizeLike;
