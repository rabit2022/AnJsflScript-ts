(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SAT"] = factory();
	else
		root["SAT"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BoundsConverter: function() { return /* reexport */ BoundsConverter; },
  CHECK: function() { return /* reexport */ CHECK; },
  ENUM: function() { return /* reexport */ ENUM; },
  FLASH: function() { return /* binding */ FLASH; },
  SAT: function() { return /* binding */ SAT; },
  VectorConverter: function() { return /* reexport */ VectorConverter; }
});

;// ./src/check/boundsCheck.ts
function IsBoundsLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        typeof obj.left === "number" &&
        typeof obj.top === "number" &&
        typeof obj.right === "number" &&
        typeof obj.bottom === "number");
}

;// ./src/check/vectorCheck.ts
function IsVectorLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        'x' in obj && typeof obj.x === "number" &&
        'y' in obj && typeof obj.y === "number");
}

;// ./src/check/sizeCheck.ts
function IsSizeLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        'width' in obj && typeof obj.width === "number" &&
        'height' in obj && typeof obj.height === "number");
}

;// ./src/check/transformCheck.ts


function IsTransformLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        'rotation' in obj && typeof obj.rotation === "number" &&
        'scale' in obj && IsVectorLike(obj.scale) &&
        'position' in obj && IsVectorLike(obj.position) &&
        'size' in obj && IsSizeLike(obj.size) &&
        'skew' in obj && IsVectorLike(obj.skew));
}

;// ./src/check/framerangeCheck.ts
function IsFrameRangeLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        'layerIndex' in obj && typeof obj.layerIndex === "number" &&
        'startFrame' in obj && typeof obj.startFrame === "number" &&
        'endFrame' in obj && typeof obj.endFrame === "number");
}

;// ./src/check/elementboundsCheck.ts
function IsElementBoundsLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        typeof obj.left === "number" &&
        typeof obj.top === "number" &&
        typeof obj.width === "number" &&
        typeof obj.height === "number");
}

;// ./src/check/scaleCheck.ts
function IsScaleLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        'scaleX' in obj && typeof obj.scaleX === "number" &&
        'scaleY' in obj && typeof obj.scaleY === "number");
}

;// ./src/check/skewCheck.ts
function IsSkewLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        'skewX' in obj && typeof obj.skewX === "number" &&
        'skewY' in obj && typeof obj.skewY === "number");
}

;// ./src/check/linesegmentCheck.ts

function IsLineSegmentLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        'startPoint' in obj &&
        'endPoint' in obj &&
        IsVectorLike(obj.startPoint) &&
        IsVectorLike(obj.endPoint));
}

;// ./src/check/circleCheck.ts

function IsCircleLike(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        'pos' in obj && 'r' in obj &&
        IsVectorLike(obj.pos) &&
        typeof obj.r === "number");
}

;// ./src/check/index.ts










var CHECK;
(function (CHECK) {
    CHECK.IsBoundsLike = IsBoundsLike;
    CHECK.IsVectorLike = IsVectorLike;
    CHECK.IsSizeLike = IsSizeLike;
    CHECK.IsTransformLike = IsTransformLike;
    CHECK.IsFrameRangeLike = IsFrameRangeLike;
    CHECK.IsElementBoundsLike = IsElementBoundsLike;
    CHECK.IsScaleLike = IsScaleLike;
    CHECK.IsSkewLike = IsSkewLike;
    CHECK.IsLineSegmentLike = IsLineSegmentLike;
    CHECK.IsCircleLike = IsCircleLike;
})(CHECK || (CHECK = {}));

;// ./src/enum/vectorEnums.ts
var RelativePosition;
(function (RelativePosition) {
    RelativePosition["TopRight"] = "top right";
    RelativePosition["TopLeft"] = "top left";
    RelativePosition["BottomRight"] = "bottom right";
    RelativePosition["BottomLeft"] = "bottom left";
    RelativePosition["TopCenter"] = "top center";
    RelativePosition["RightCenter"] = "right center";
    RelativePosition["BottomCenter"] = "bottom center";
    RelativePosition["LeftCenter"] = "left center";
    RelativePosition["Center"] = "center";
})(RelativePosition || (RelativePosition = {}));

;// ./src/enum/linesegmentEnum.ts
var OrthogonalDirection;
(function (OrthogonalDirection) {
    OrthogonalDirection["Left"] = "left";
    OrthogonalDirection["Top"] = "top";
    OrthogonalDirection["Right"] = "right";
    OrthogonalDirection["Bottom"] = "bottom";
})(OrthogonalDirection || (OrthogonalDirection = {}));

;// ./src/enum/boundsEnum.ts
var RectangleSide;
(function (RectangleSide) {
    RectangleSide["Top"] = "top";
    RectangleSide["Right"] = "right";
    RectangleSide["Bottom"] = "bottom";
    RectangleSide["Left"] = "left";
})(RectangleSide || (RectangleSide = {}));
var RectanglePart;
(function (RectanglePart) {
    RectanglePart["Top"] = "top";
    RectanglePart["Right"] = "right";
    RectanglePart["Bottom"] = "bottom";
    RectanglePart["Left"] = "left";
    RectanglePart["TopRight"] = "top right";
    RectanglePart["TopLeft"] = "top left";
    RectanglePart["BottomRight"] = "bottom right";
    RectanglePart["BottomLeft"] = "bottom left";
    RectanglePart["TopCenter"] = "top center";
    RectanglePart["RightCenter"] = "right center";
    RectanglePart["BottomCenter"] = "bottom center";
    RectanglePart["LeftCenter"] = "left center";
    RectanglePart["Center"] = "center";
})(RectanglePart || (RectanglePart = {}));
var InsetDirection;
(function (InsetDirection) {
    InsetDirection["All"] = "all";
    InsetDirection["Left"] = "left";
    InsetDirection["Top"] = "top";
    InsetDirection["Right"] = "right";
    InsetDirection["Bottom"] = "bottom";
})(InsetDirection || (InsetDirection = {}));

;// ./src/enum/index.ts



var ENUM;
(function (ENUM) {
    ENUM.RelativePosition = RelativePosition;
    ENUM.OrthogonalDirection = OrthogonalDirection;
    ENUM.RectangleSide = RectangleSide;
    ENUM.RectanglePart = RectanglePart;
    ENUM.InsetDirection = InsetDirection;
})(ENUM || (ENUM = {}));

;// ./src/base/SObject.ts
var SObject = (function () {
    function SObject() {
    }
    SObject.prototype.copy = function (other) {
        for (var prop in other) {
            if (Object.prototype.hasOwnProperty.call(other, prop) &&
                prop in this) {
                var key = prop;
                if (typeof other[key] !== "function") {
                    this[key] = other[key];
                }
            }
        }
        return this;
    };
    SObject.prototype.assign = function (props) {
        for (var key in props) {
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                this[key] = props[key];
            }
        }
        return this;
    };
    SObject.prototype.clone = function () {
        var Constructor = this.constructor;
        var cloned = new Constructor();
        cloned.copy(this);
        return cloned;
    };
    SObject.prototype.toString = function () {
        var props = [];
        for (var prop in this) {
            if (Object.prototype.hasOwnProperty.call(this, prop) &&
                typeof this[prop] !== "function") {
                props.push("".concat(prop, "=").concat(this[prop]));
            }
        }
        return "".concat(this.constructor.name, "(").concat(props.join(", "), ")");
    };
    SObject.prototype.toObj = function () {
        var obj = {};
        for (var prop in this) {
            if (Object.prototype.hasOwnProperty.call(this, prop) &&
                typeof this[prop] !== "function") {
                obj[prop] = this[prop];
            }
        }
        return obj;
    };
    SObject.toString = function () {
        return "[class ".concat(this.name, "]");
    };
    return SObject;
}());


;// ./src/core/Rectangle/XYWHRect.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var XYWHRect = (function (_super) {
    __extends(XYWHRect, _super);
    function XYWHRect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 0;
        _this.y = 0;
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    return XYWHRect;
}(SObject));


;// ./src/core/Vector.ts
var Vector_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;


var Vector = (function (_super) {
    Vector_extends(Vector, _super);
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Vector.prototype.perp = function () {
        var x = this["x"];
        this["x"] = this["y"];
        this["y"] = -x;
        return this;
    };
    Vector.prototype.rotate = function (angle) {
        var x = this["x"];
        var y = this["y"];
        this["x"] = x * Math.cos(angle) - y * Math.sin(angle);
        this["y"] = x * Math.sin(angle) + y * Math.cos(angle);
        return this;
    };
    Vector.prototype.reverse = function () {
        this["x"] = -this["x"];
        this["y"] = -this["y"];
        return this;
    };
    Vector.prototype.invert = function () {
        if (this.x === 0 || this.y === 0) {
            throw new Error("x and y must not be zero");
        }
        return new Vector(1 / this.x, 1 / this.y);
    };
    Vector.prototype.normalize = function () {
        var d = this.len();
        if (d > 0) {
            this["x"] = this["x"] / d;
            this["y"] = this["y"] / d;
        }
        return this;
    };
    Vector.prototype.add = function (other) {
        this["x"] += other["x"];
        this["y"] += other["y"];
        return this;
    };
    Vector.prototype.sub = function (other) {
        this["x"] -= other["x"];
        this["y"] -= other["y"];
        return this;
    };
    Vector.prototype.scale = function (x, y) {
        this["x"] *= x;
        this["y"] *= typeof y !== "undefined" ? y : x;
        return this;
    };
    Vector.prototype.project = function (other) {
        var amt = this.dot(other) / other.len2();
        this["x"] = amt * other["x"];
        this["y"] = amt * other["y"];
        return this;
    };
    Vector.prototype.projectN = function (other) {
        var amt = this.dot(other);
        this["x"] = amt * other["x"];
        this["y"] = amt * other["y"];
        return this;
    };
    Vector.prototype.reflect = function (axis) {
        var x = this["x"];
        var y = this["y"];
        this.project(axis).scale(2);
        this["x"] -= x;
        this["y"] -= y;
        return this;
    };
    Vector.prototype.reflectN = function (axis) {
        var x = this["x"];
        var y = this["y"];
        this.projectN(axis).scale(2);
        this["x"] -= x;
        this["y"] -= y;
        return this;
    };
    Vector.prototype.dot = function (other) {
        return this["x"] * other["x"] + this["y"] * other["y"];
    };
    Vector.prototype.len2 = function () {
        return this.dot(this);
    };
    Vector.prototype.len = function () {
        return Math.sqrt(this.len2());
    };
    Vector.prototype.halfSize = function () {
        return new Vector(this.x / 2, this.y / 2);
    };
    Vector.prototype.midpointTo = function (other) {
        return new Vector((this.x + other.x) / 2, (this.y + other.y) / 2);
    };
    Vector.prototype.angleTo = function (other) {
        var dot = this.dot(other);
        var len1 = this.len();
        var len2 = other.len();
        var angle = Math.acos(dot / (len1 * len2));
        return angle;
    };
    Vector.prototype.distanceTo = function (other) {
        var x = this.x - other.x;
        var y = this.y - other.y;
        return Math.sqrt(x * x + y * y);
    };
    Vector.prototype.abs = function () {
        return new Vector(Math.abs(this.x), Math.abs(this.y));
    };
    Vector.prototype.min = function (other) {
        return new Vector(Math.min(this.x, other.x), Math.min(this.y, other.y));
    };
    Vector.prototype.max = function (other) {
        return new Vector(Math.max(this.x, other.x), Math.max(this.y, other.y));
    };
    Vector.prototype.cross = function (other) {
        return this.x * other.y - this.y * other.x;
    };
    Vector.prototype.angle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector.prototype.multiply = function (other) {
        return this.scale(other);
    };
    Vector.prototype.round = function () {
        this["x"] = Math.round(this["x"]);
        this["y"] = Math.round(this["y"]);
        return this;
    };
    Vector.prototype.noZero = function () {
        this["x"] = this["x"] ? this["x"] : 1;
        this["y"] = this["y"] ? this["y"] : 1;
        return this;
    };
    Vector.prototype.equals = function (other) {
        return this.x === other.x && this.y === other.y;
    };
    Vector.prototype.orbit = function (pt, arcWidth, arcHeight, degrees) {
        var radians = degrees * (Math.PI / 180);
        this.x = pt.x + arcWidth * Math.cos(radians);
        this.y = pt.y + arcHeight * Math.sin(radians);
        return this;
    };
    Vector.prototype.interpolate = function (other, f) {
        f = typeof f === "undefined" ? 1 : f;
        return new Vector((this.x + other.x) * f, (this.y + other.y) * f);
    };
    Vector.prototype.isInRegionRelativeTo = function (referencePoint, region) {
        var dx = this.x - referencePoint.x;
        var dy = this.y - referencePoint.y;
        return Vector.REGION_CHECKS[region](dx, dy);
    };
    Vector.prototype.toSignVector = function () {
        var x = Math.sign(this.x);
        var y = Math.sign(this.y);
        return new Vector(x, y);
    };
    Vector.prototype.signPow = function () {
        this.x = Math.abs(this.x) & 1 ? -1 : 1;
        this.y = Math.abs(this.y) & 1 ? -1 : 1;
        return this;
    };
    Vector.interpolate = function (pt1, pt2, f) {
        f = typeof f === "undefined" ? 1 : f;
        return new Vector((pt1.x + pt2.x) * f, (pt1.y + pt2.y) * f);
    };
    Vector.polar = function (length, angle) {
        return new Vector(length * Math.sin(angle), length * Math.cos(angle));
    };
    Vector.distance = function (pt1, pt2) {
        var x = pt1.x - pt2.x;
        var y = pt1.y - pt2.y;
        return Math.sqrt(x * x + y * y);
    };
    Vector.fromAngle = function (angleRadians) {
        return new Vector(Math.cos(angleRadians), Math.sin(angleRadians));
    };
    Vector.fromElement = function (element) {
        return new Vector(element.x, element.y);
    };
    Vector.REGION_CHECKS = (_a = {},
        _a[RelativePosition.TopRight] = function (dx, dy) { return dx > 0 && dy < 0; },
        _a[RelativePosition.TopLeft] = function (dx, dy) { return dx < 0 && dy < 0; },
        _a[RelativePosition.BottomRight] = function (dx, dy) { return dx > 0 && dy > 0; },
        _a[RelativePosition.BottomLeft] = function (dx, dy) { return dx < 0 && dy > 0; },
        _a[RelativePosition.TopCenter] = function (_dx, dy) { return dy < 0; },
        _a[RelativePosition.BottomCenter] = function (_dx, dy) { return dy > 0; },
        _a[RelativePosition.LeftCenter] = function (dx, _dy) { return dx < 0; },
        _a[RelativePosition.RightCenter] = function (dx, _dy) { return dx > 0; },
        _a[RelativePosition.Center] = function (dx, dy) { return dx === 0 && dy === 0; },
        _a);
    Vector.ZERO = new Vector(0, 0);
    Vector.ONE = new Vector(1, 1);
    Vector.LEFT = new Vector(-1, 0);
    Vector.RIGHT = new Vector(1, 0);
    Vector.UP = new Vector(0, -1);
    Vector.DOWN = new Vector(0, 1);
    return Vector;
}(SObject));


;// ./src/core/Rectangle/CornerRect.ts
var CornerRect_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CornerRect = (function (_super) {
    CornerRect_extends(CornerRect, _super);
    function CornerRect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topLeft = Vector.ZERO;
        _this.bottomRight = Vector.ZERO;
        return _this;
    }
    return CornerRect;
}(SObject));


;// ./src/core/Rectangle/Box.ts
var Box_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Box = (function (_super) {
    Box_extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pos = Vector.ZERO;
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    return Box;
}(SObject));


;// ./src/core/Transform/Size.ts
var Size_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Size = (function (_super) {
    Size_extends(Size, _super);
    function Size(width, height) {
        var _this = _super.call(this) || this;
        _this.width = 0;
        _this.height = 0;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Size.prototype, "ratio", {
        get: function () {
            return this.width / this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "max_size", {
        get: function () {
            return Math.max(this.width, this.height);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "min_size", {
        get: function () {
            return Math.min(this.width, this.height);
        },
        enumerable: false,
        configurable: true
    });
    Size.prototype.add = function (size) {
        return new Size(this.width + size.width, this.height + size.height);
    };
    Size.prototype.sub = function (size) {
        return new Size(this.width - size.width, this.height - size.height);
    };
    Size.prototype.getRatioWidth = function (nowHeight) {
        return this.ratio * nowHeight;
    };
    Size.prototype.getRatioHeight = function (nowWidth) {
        return nowWidth / this.ratio;
    };
    Size.fromElement = function (element) {
        return new Size(element.width, element.height);
    };
    return Size;
}(SObject));


;// ./src/core/Rectangle/Bounds.ts
var Bounds_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Bounds = (function (_super) {
    Bounds_extends(Bounds, _super);
    function Bounds() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.left = 0;
        _this.top = 0;
        _this.right = 0;
        _this.bottom = 0;
        var $dom = fl.getDocumentDOM();
        if (!$dom) {
            throw new Error("No document is open in Flash.");
        }
        switch (args.length) {
            case 0:
                _this.left = 0;
                _this.top = 0;
                _this.right = $dom.width;
                _this.bottom = $dom.height;
                break;
            case 1: {
                var arg = args[0];
                if (arg instanceof Bounds) {
                    _this.copy(arg);
                }
                else if (IsBoundsLike(arg)) {
                    _this.assign(arg);
                }
                else if (typeof arg === "number") {
                    _this.left = -arg;
                    _this.top = -arg;
                    _this.right = arg;
                    _this.bottom = arg;
                }
                else if (Array.isArray(arg)) {
                    var rect = findBoundingRectangle(arg);
                    _this.copy(rect);
                }
                else if (typeof arg === "object") {
                    if (arg === null) {
                        throw new Error("Invalid argument 1");
                    }
                    else if ("width" in arg && "left" in arg) {
                        _this.left = arg.left;
                        _this.top = arg.top;
                        _this.right = arg.left + arg.width;
                        _this.bottom = arg.top + arg.height;
                    }
                    else if ("width" in arg && "height" in arg) {
                        _this.left = 0;
                        _this.top = 0;
                        _this.right = arg.width;
                        _this.bottom = arg.height;
                    }
                    else {
                        throw new Error("Invalid argument 1");
                    }
                }
                else {
                    throw new Error("Invalid argument 1");
                }
                break;
            }
            case 2: {
                var a = args[0], b = args[1];
                if (typeof a === "number" && typeof b === "number") {
                    _this.left = 0;
                    _this.top = 0;
                    _this.right = a;
                    _this.bottom = b;
                }
                else if (a.x !== undefined && typeof b === "number") {
                    var radiusRect = new Bounds(b);
                    var finalRect = radiusRect.addOffset(a);
                    _this.copy(finalRect);
                }
                else {
                    throw new Error("Invalid arguments for 2-arg constructor");
                }
                break;
            }
            case 4: {
                _this.left = args[0];
                _this.top = args[1];
                _this.right = args[2];
                _this.bottom = args[3];
                break;
            }
            default:
                throw new Error("Unsupported number of arguments: ".concat(args.length));
        }
        return _this;
    }
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "center", {
        get: function () {
            return new Vector((this.left + this.right) / 2, (this.top + this.bottom) / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "size", {
        get: function () {
            return new Size(this.width, this.height);
        },
        enumerable: false,
        configurable: true
    });
    Bounds.prototype.addOffset = function (offset) {
        if (typeof offset === "number") {
            offset = new Bounds(offset, offset, offset, offset);
        }
        else if (IsVectorLike(offset)) {
            offset = new Bounds(offset.x, offset.y, offset.x, offset.y);
        }
        return new Bounds(this.left + offset.left, this.top + offset.top, this.right + offset.right, this.bottom + offset.bottom);
    };
    Bounds.prototype.subOffset = function (offset) {
        if (typeof offset === "number") {
            offset = new Bounds(offset, offset, offset, offset);
        }
        else if (offset instanceof Vector) {
            offset = new Bounds(offset.x, offset.y, offset.x, offset.y);
        }
        return new Bounds(this.left - offset.left, this.top - offset.top, this.right - offset.right, this.bottom - offset.bottom);
    };
    Bounds.createDirectionalOffset = function (size, direction) {
        var offset = new Bounds(0, 0, 0, 0);
        switch (direction) {
            case InsetDirection.Left:
                offset.left = -size;
                break;
            case InsetDirection.Top:
                offset.top = -size;
                break;
            case InsetDirection.Right:
                offset.right = size;
                break;
            case InsetDirection.Bottom:
                offset.bottom = size;
                break;
            case InsetDirection.All:
                offset.left = -size;
                offset.top = -size;
                offset.right = size;
                offset.bottom = size;
                break;
            default:
                throw new Error("Invalid direction: ".concat(direction));
        }
        return offset;
    };
    Bounds.prototype.expand = function (size, whichDirection) {
        if (whichDirection === void 0) { whichDirection = InsetDirection.All; }
        var offset = Bounds.createDirectionalOffset(size, whichDirection);
        return this.addOffset(offset);
    };
    Bounds.prototype.shrink = function (size, whichDirection) {
        if (whichDirection === void 0) { whichDirection = InsetDirection.All; }
        var offset = Bounds.createDirectionalOffset(size, whichDirection);
        return this.subOffset(offset);
    };
    Bounds.prototype.contains = function (rect) {
        return (this.left <= rect.left &&
            this.top <= rect.top &&
            this.right >= rect.right &&
            this.bottom >= rect.bottom);
    };
    Bounds.prototype.getCorner = function (whichCorner) {
        var _a = this, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
        var centerX = (left + right) / 2;
        var centerY = (top + bottom) / 2;
        switch (whichCorner) {
            case RelativePosition.TopRight:
                return new Vector(right, top);
            case RelativePosition.TopLeft:
                return new Vector(left, top);
            case RelativePosition.BottomRight:
                return new Vector(right, bottom);
            case RelativePosition.BottomLeft:
                return new Vector(left, bottom);
            case RelativePosition.TopCenter:
                return new Vector(centerX, top);
            case RelativePosition.RightCenter:
                return new Vector(right, centerY);
            case RelativePosition.BottomCenter:
                return new Vector(centerX, bottom);
            case RelativePosition.LeftCenter:
                return new Vector(left, centerY);
            case RelativePosition.Center:
                return new Vector(centerX, centerY);
            default:
                throw new Error("Invalid RelativePosition: ".concat(whichCorner));
        }
    };
    Bounds.prototype.getPart = function (whichPart, widthRatio, heightRatio) {
        if (widthRatio === void 0) { widthRatio = 0.5; }
        if (heightRatio === void 0) { heightRatio = widthRatio; }
        var _a = this, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, width = _a.width, height = _a.height;
        var centerX = (left + right) / 2;
        var centerY = (top + bottom) / 2;
        var partWidth = width * widthRatio;
        var partHeight = height * heightRatio;
        var invWidth = width - partWidth;
        var invHeight = height - partHeight;
        var halfW = partWidth / 2;
        var halfH = partHeight / 2;
        switch (whichPart) {
            case RectanglePart.TopRight:
                return new Bounds(right - invWidth, top, right, top + partHeight);
            case RectanglePart.TopLeft:
                return new Bounds(left, top, left + partWidth, top + partHeight);
            case RectanglePart.BottomRight:
                return new Bounds(right - invWidth, bottom - invHeight, right, bottom);
            case RectanglePart.BottomLeft:
                return new Bounds(left, bottom - invHeight, left + partWidth, bottom);
            case RectanglePart.TopCenter:
                return new Bounds(centerX - halfW, top, centerX + halfW, top + partHeight);
            case RectanglePart.RightCenter:
                return new Bounds(right - invWidth, centerY - halfH, right, centerY + halfH);
            case RectanglePart.BottomCenter:
                return new Bounds(centerX - halfW, bottom - partHeight, centerX + halfW, bottom);
            case RectanglePart.LeftCenter:
                return new Bounds(left, centerY - halfH, left + partWidth, centerY + halfH);
            case RectanglePart.Center:
                return new Bounds(centerX - halfW, centerY - halfH, centerX + halfW, centerY + halfH);
            case RectanglePart.Top:
                return new Bounds(left, top, right, top + partHeight);
            case RectanglePart.Right:
                return new Bounds(right - invWidth, top, right, bottom);
            case RectanglePart.Bottom:
                return new Bounds(left, bottom - partHeight, right, bottom);
            case RectanglePart.Left:
                return new Bounds(left, top, left + partWidth, bottom);
            default:
                throw new Error("Invalid RectanglePart: ".concat(whichPart));
        }
    };
    Bounds.prototype.union = function (other) {
        var minLeft = Math.min(this.left, other.left);
        var minTop = Math.min(this.top, other.top);
        var maxRight = Math.max(this.right, other.right);
        var maxBottom = Math.max(this.bottom, other.bottom);
        return new Bounds(minLeft, minTop, maxRight, maxBottom);
    };
    Bounds.prototype.rotate = function (angle, whichCorner) {
        if (whichCorner === void 0) { whichCorner = RelativePosition.Center; }
        var radians = angle * (Math.PI / 180);
        var center = this.getCorner(whichCorner);
        var topLeft = this.getCorner(RelativePosition.TopLeft);
        var topRight = this.getCorner(RelativePosition.TopRight);
        var bottomLeft = this.getCorner(RelativePosition.BottomLeft);
        var bottomRight = this.getCorner(RelativePosition.BottomRight);
        var rotatePoint = function (point) {
            return point.sub(center).rotate(radians).add(center);
        };
        var points = [
            rotatePoint(topLeft),
            rotatePoint(topRight),
            rotatePoint(bottomRight),
            rotatePoint(bottomLeft)
        ];
        return Bounds.fromVectors(points);
    };
    Bounds.fromTopLeft = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        switch (args.length) {
            case 2:
                var topLeft = args[0];
                var size = args[1];
                return this.fromTopLeft(topLeft.x, topLeft.y, size.width, size.height);
                // removed by dead control flow

            case 4:
                var left = args[0];
                var top = args[1];
                var width = args[2];
                var height = args[3];
                return new Bounds(left, top, left + width, top + height);
                // removed by dead control flow

            default:
                throw new Error("Invalid arguments");
        }
    };
    Bounds.fromCenter = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        switch (args.length) {
            case 2:
                var center = args[0];
                var size = args[1];
                return this.fromCenter(center.x, center.y, size.width, size.height);
            case 4:
                var centerX = args[0];
                var centerY = args[1];
                var width = args[2];
                var height = args[3];
                return new Bounds(centerX - width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2);
            default:
                throw new Error("Invalid arguments");
        }
    };
    Bounds.fromVectors = function (vectors) {
        var rect = new Bounds(0, 0, 0, 0);
        for (var i = 0; i < vectors.length; i++) {
            var vector = vectors[i];
            if (i === 0) {
                rect.left = vector.x;
                rect.top = vector.y;
                rect.right = vector.x;
                rect.bottom = vector.y;
            }
            else {
                rect.left = Math.min(rect.left, vector.x);
                rect.top = Math.min(rect.top, vector.y);
                rect.right = Math.max(rect.right, vector.x);
                rect.bottom = Math.max(rect.bottom, vector.y);
            }
        }
        return rect;
    };
    Bounds.fromRects = function (rects) {
        var rect = new Bounds(0, 0, 0, 0);
        for (var i = 0; i < rects.length; i++) {
            var r = rects[i];
            if (i === 0) {
                rect.left = r.left;
                rect.top = r.top;
                rect.right = r.right;
                rect.bottom = r.bottom;
            }
            else {
                rect.left = Math.min(rect.left, r.left);
                rect.top = Math.min(rect.top, r.top);
                rect.right = Math.max(rect.right, r.right);
                rect.bottom = Math.max(rect.bottom, r.bottom);
            }
        }
        return rect;
    };
    Bounds.fromElements = function (elements) {
        return findBoundingRectangle(elements);
    };
    return Bounds;
}(SObject));

function findBoundingRectangle(elements) {
    if (!elements.length) {
        throw new Error("findBoundingRectangle: elements array is empty");
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
        if (elementTop < top)
            top = elementTop;
        if (elementLeft < left)
            left = elementLeft;
        if (elementRight > right)
            right = elementRight;
        if (elementBottom > bottom)
            bottom = elementBottom;
    }
    return new Bounds(left, top, right, bottom);
}

;// ./src/core/Rectangle/BoundsConverter.ts





var BoundsConverter;
(function (BoundsConverter) {
    function toXYWH(bounds) {
        var rect = new XYWHRect();
        rect.x = bounds.left;
        rect.y = bounds.top;
        rect.width = bounds.right - bounds.left;
        rect.height = bounds.bottom - bounds.top;
        return rect;
    }
    BoundsConverter.toXYWH = toXYWH;
    function toCorner(bounds) {
        var rect = new CornerRect();
        rect.topLeft = new Vector(bounds.left, bounds.top);
        rect.bottomRight = new Vector(bounds.right, bounds.bottom);
        return rect;
    }
    BoundsConverter.toCorner = toCorner;
    function toBox(bounds) {
        var box = new Box();
        box.pos = new Vector(bounds.left, bounds.bottom);
        box.width = bounds.right - bounds.left;
        box.height = bounds.bottom - bounds.top;
        return box;
    }
    BoundsConverter.toBox = toBox;
    function fromXYWH(rect) {
        var bounds = new Bounds();
        bounds.left = rect.x;
        bounds.top = rect.y;
        bounds.right = rect.x + rect.width;
        bounds.bottom = rect.y + rect.height;
        return bounds;
    }
    BoundsConverter.fromXYWH = fromXYWH;
    function fromCorner(rect) {
        var bounds = new Bounds();
        bounds.left = rect.topLeft.x;
        bounds.top = rect.topLeft.y;
        bounds.right = rect.bottomRight.x;
        bounds.bottom = rect.bottomRight.y;
        return bounds;
    }
    BoundsConverter.fromCorner = fromCorner;
    function fromBox(box) {
        var bounds = new Bounds();
        bounds.left = box.pos.x;
        bounds.bottom = box.pos.y;
        bounds.right = box.pos.x + box.width;
        bounds.top = box.pos.y - box.height;
        return bounds;
    }
    BoundsConverter.fromBox = fromBox;
})(BoundsConverter || (BoundsConverter = {}));

;// ./src/core/Transform/Scale.ts
var Scale_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Scale = (function (_super) {
    Scale_extends(Scale, _super);
    function Scale(scaleX, scaleY) {
        var _this = _super.call(this) || this;
        _this.scaleX = scaleX;
        _this.scaleY = scaleY;
        return _this;
    }
    Scale.fromElement = function (element) {
        return new Scale(element.scaleX, element.scaleY);
    };
    return Scale;
}(SObject));


;// ./src/core/Transform/Skew.ts
var Skew_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Skew = (function (_super) {
    Skew_extends(Skew, _super);
    function Skew(skewX, skewY) {
        var _this = _super.call(this) || this;
        _this.skewX = 0;
        _this.skewY = 0;
        _this.skewX = skewX;
        _this.skewY = skewY;
        return _this;
    }
    Skew.fromElement = function (element) {
        return new Skew(element.skewX, element.skewY);
    };
    return Skew;
}(SObject));


;// ./src/core/VectorConverter.ts




var VectorConverter;
(function (VectorConverter) {
    function vectorToScale(v) {
        return new Scale(v.x, v.y);
    }
    VectorConverter.vectorToScale = vectorToScale;
    function vectorToSize(v) {
        return new Size(v.x, v.y);
    }
    VectorConverter.vectorToSize = vectorToSize;
    function vectorToSkew(v) {
        return new Skew(v.x, v.y);
    }
    VectorConverter.vectorToSkew = vectorToSkew;
    function scaleToVector(s) {
        return new Vector(s.scaleX, s.scaleY);
    }
    VectorConverter.scaleToVector = scaleToVector;
    function scaleToSize(s) {
        return new Size(s.scaleX, s.scaleY);
    }
    VectorConverter.scaleToSize = scaleToSize;
    function scaleToSkew(s) {
        return new Skew(s.scaleX, s.scaleY);
    }
    VectorConverter.scaleToSkew = scaleToSkew;
    function sizeToVector(s) {
        return new Vector(s.width, s.height);
    }
    VectorConverter.sizeToVector = sizeToVector;
    function sizeToScale(s) {
        return new Scale(s.width, s.height);
    }
    VectorConverter.sizeToScale = sizeToScale;
    function sizeToSkew(s) {
        return new Skew(s.width, s.height);
    }
    VectorConverter.sizeToSkew = sizeToSkew;
    function skewToVector(s) {
        return new Vector(s.skewX, s.skewY);
    }
    VectorConverter.skewToVector = skewToVector;
    function skewToScale(s) {
        return new Scale(s.skewX, s.skewY);
    }
    VectorConverter.skewToScale = skewToScale;
    function skewToSize(s) {
        return new Size(s.skewX, s.skewY);
    }
    VectorConverter.skewToSize = skewToSize;
    function toVector(obj) {
        if ("x" in obj && "y" in obj) {
            return new Vector(obj.x, obj.y);
        }
        else if ("width" in obj && "height" in obj) {
            return new Vector(obj.width, obj.height);
        }
        else if ("scaleX" in obj && "scaleY" in obj) {
            return new Vector(obj.scaleX, obj.scaleY);
        }
        else if ("skewX" in obj && "skewY" in obj) {
            return new Vector(obj.skewX, obj.skewY);
        }
        else {
            throw new Error("Unsupported object structure for Vector conversion");
        }
    }
    VectorConverter.toVector = toVector;
})(VectorConverter || (VectorConverter = {}));

;// ./src/core/Transform/Transform.ts
var Transform_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var Transform = (function (_super) {
    Transform_extends(Transform, _super);
    function Transform(element) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.rotation = element.rotation;
        _this.scale = new Scale(element.scaleX, element.scaleY);
        _this.position = new Vector(element.x, element.y);
        _this.size = new Size(element.width, element.height);
        _this.skew = new Skew(element.skewX, element.skewY);
        return _this;
    }
    Transform.prototype.setRotation = function (rotation) {
        this.element.rotation = rotation;
        this.rotation = rotation;
        return this;
    };
    Transform.prototype.setScale = function (scale) {
        var finalScale;
        if (scale instanceof Scale) {
            finalScale = scale;
        }
        else if (IsVectorLike(scale)) {
            finalScale = new Scale(scale.x, scale.y);
        }
        else if (IsScaleLike(scale)) {
            finalScale = new Scale(scale.scaleX, scale.scaleY);
        }
        else {
            throw new Error("Invalid scale input: must be Scale, ScaleLike, or VectorLike");
        }
        this.element.scaleX = finalScale.scaleX;
        this.element.scaleY = finalScale.scaleY;
        this.scale = finalScale;
        return this;
    };
    Transform.prototype.setPosition = function (position) {
        var finalPosition;
        if (position instanceof Vector) {
            finalPosition = position;
        }
        else if (IsVectorLike(position)) {
            finalPosition = new Vector(position.x, position.y);
        }
        else {
            throw new Error("Invalid position input: must be VectorLike");
        }
        this.element.x = finalPosition.x;
        this.element.y = finalPosition.y;
        this.position = finalPosition;
        return this;
    };
    Transform.prototype.setSize = function (size) {
        var finalSize;
        if (size instanceof Size) {
            finalSize = size;
        }
        else if (IsVectorLike(size)) {
            finalSize = new Size(size.x, size.y);
        }
        else if (IsSizeLike(size)) {
            finalSize = new Size(size.width, size.height);
        }
        else {
            throw new Error("Invalid size input: must be VectorLike");
        }
        this.element.width = finalSize.width;
        this.element.height = finalSize.height;
        this.size = finalSize;
        return this;
    };
    Transform.prototype.setSkew = function (skew) {
        var finalSkew;
        if (skew instanceof Skew) {
            finalSkew = skew;
        }
        else if (IsVectorLike(skew)) {
            finalSkew = new Skew(skew.x, skew.y);
        }
        else if (IsSkewLike(skew)) {
            finalSkew = new Skew(skew.skewX, skew.skewY);
        }
        else {
            throw new Error("Invalid skew input");
        }
        this.element.skewX = finalSkew.skewX;
        this.element.skewY = finalSkew.skewY;
        this.skew = finalSkew;
        return this;
    };
    Transform.prototype.moveSelectionBy = function (distanceToMove) {
        this.element.x += distanceToMove.x;
        this.element.y += distanceToMove.y;
        this.position = this.position.clone().add(distanceToMove);
        return this;
    };
    Transform.fromElement = function (element) {
        return new Transform(element);
    };
    return Transform;
}(SObject));


;// ./src/core/Circle.ts
var Circle_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Circle = (function (_super) {
    Circle_extends(Circle, _super);
    function Circle(pos, r) {
        var _this = _super.call(this) || this;
        _this.pos = Vector.ZERO;
        _this.r = 0;
        if (pos !== undefined) {
            _this.pos = pos;
        }
        if (r !== undefined) {
            _this.r = r;
        }
        return _this;
    }
    Object.defineProperty(Circle.prototype, "d", {
        get: function () {
            return 2 * this.r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "bounds", {
        get: function () {
            var left = this.pos.x - this.r;
            var top = this.pos.y - this.r;
            var right = this.pos.x + this.r;
            var bottom = this.pos.y + this.r;
            return new Bounds(left, top, right, bottom);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return Math.PI * this.r * this.r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "centroid", {
        get: function () {
            return this.pos.clone();
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.distanceTo = function (point) {
        var dx = this.pos.x - point.x;
        var dy = this.pos.y - point.y;
        return Math.sqrt(dx * dx + dy * dy) - this.r;
    };
    Circle.prototype.distanceToSegment = function (segment) {
        var nearestPoint = segment.closestPointTo(this.pos);
        return this.distanceTo(nearestPoint);
    };
    Circle.prototype.contains = function (point) {
        var dx = this.pos.x - point.x;
        var dy = this.pos.y - point.y;
        return dx * dx + dy * dy <= this.r * this.r;
    };
    Circle.prototype.toVector = function () {
        return this.pos.clone();
    };
    return Circle;
}(SObject));


;// ./src/core/LineSegment.ts
var LineSegment_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LineSegment_a;




var LineSegment = (function (_super) {
    LineSegment_extends(LineSegment, _super);
    function LineSegment(startPoint, endPoint) {
        var _this = _super.call(this) || this;
        _this.startPoint = startPoint;
        _this.endPoint = endPoint;
        return _this;
    }
    Object.defineProperty(LineSegment.prototype, "bounds", {
        get: function () {
            var left = Math.min(this.startPoint.x, this.endPoint.x);
            var top = Math.min(this.startPoint.y, this.endPoint.y);
            var right = Math.max(this.startPoint.x, this.endPoint.x);
            var bottom = Math.max(this.startPoint.y, this.endPoint.y);
            return new Bounds(left, top, right, bottom);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineSegment.prototype, "center", {
        get: function () {
            var x = (this.startPoint.x + this.endPoint.x) / 2;
            var y = (this.startPoint.y + this.endPoint.y) / 2;
            return new Vector(x, y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineSegment.prototype, "length", {
        get: function () {
            var dx = this.endPoint.x - this.startPoint.x;
            var dy = this.endPoint.y - this.startPoint.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineSegment.prototype, "angle", {
        get: function () {
            var dx = this.endPoint.x - this.startPoint.x;
            var dy = this.endPoint.y - this.startPoint.y;
            return Math.atan2(dy, dx);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineSegment.prototype, "normal", {
        get: function () {
            var dx = this.endPoint.x - this.startPoint.x;
            var dy = this.endPoint.y - this.startPoint.y;
            var length = Math.sqrt(dx * dx + dy * dy);
            var normal = new Vector(-dy / length, dx / length);
            return normal;
        },
        enumerable: false,
        configurable: true
    });
    LineSegment.prototype.pointAt = function (t) {
        var vector = this.endPoint.clone().sub(this.startPoint);
        return this.startPoint.clone().add(vector.clone().multiply(t));
    };
    LineSegment.prototype.closestPointTo = function (point) {
        var dx = this.endPoint.x - this.startPoint.x;
        var dy = this.endPoint.y - this.startPoint.y;
        var a = dx * dx + dy * dy;
        var b = 2 * (dx * (this.startPoint.x - point.x) + dy * (this.startPoint.y - point.y));
        var c = (this.startPoint.x - point.x) * (this.startPoint.x - point.x) +
            (this.startPoint.y - point.y) * (this.startPoint.y - point.y) -
            1;
        var t = Math.max(0, Math.min(1, (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)));
        var x = this.startPoint.x + (this.endPoint.x - this.startPoint.x) * t;
        var y = this.startPoint.y + (this.endPoint.y - this.startPoint.y) * t;
        return new Vector(x, y);
    };
    LineSegment.prototype.distanceTo = function (point) {
        var nearestPoint = this.closestPointTo(point);
        var dx = nearestPoint.x - point.x;
        var dy = nearestPoint.y - point.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    LineSegment.prototype.toVector = function () {
        var dx = this.endPoint.x - this.startPoint.x;
        var dy = this.endPoint.y - this.startPoint.y;
        return new Vector(dx, dy);
    };
    LineSegment.from = function (startPoint, direction, distance) {
        if (distance < 0) {
            throw new Error("Distance must be non-negative");
        }
        var offset = getDirectionOffset(direction).clone().multiply(distance);
        var endPoint = startPoint.clone().add(offset);
        return new LineSegment(startPoint, endPoint);
    };
    return LineSegment;
}(SObject));

var DIRECTION_OFFSETS = (LineSegment_a = {},
    LineSegment_a[OrthogonalDirection.Left] = new Vector(-1, 0),
    LineSegment_a[OrthogonalDirection.Top] = new Vector(0, -1),
    LineSegment_a[OrthogonalDirection.Right] = new Vector(1, 0),
    LineSegment_a[OrthogonalDirection.Bottom] = new Vector(0, 1),
    LineSegment_a);
function getDirectionOffset(direction) {
    var offset = DIRECTION_OFFSETS[direction];
    if (!offset) {
        throw new Error("Unsupported direction: ".concat(direction));
    }
    return offset;
}

;// ./src/core/FrameRange/FrameRange.ts
var FrameRange_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FrameRange_IsFrameRangeLike = CHECK.IsFrameRangeLike;
var FrameRange = (function (_super) {
    FrameRange_extends(FrameRange, _super);
    function FrameRange(layerIndex, startFrame, endFrame) {
        var _this = _super.call(this) || this;
        _this.layerIndex = layerIndex;
        _this.startFrame = startFrame;
        _this.endFrame = endFrame || startFrame + 1;
        return _this;
    }
    Object.defineProperty(FrameRange.prototype, "duration", {
        get: function () {
            return this.endFrame - this.startFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FrameRange.prototype, "firstFrame", {
        get: function () {
            var fr = this.clone();
            fr.endFrame = fr.startFrame + 1;
            return fr;
        },
        enumerable: false,
        configurable: true
    });
    FrameRange.prototype.intersects = function (other) {
        return this.startFrame <= other.endFrame && other.startFrame <= this.endFrame;
    };
    FrameRange.prototype.contain = function (arg) {
        if (typeof arg === "number") {
            return this.startFrame <= arg && arg < this.endFrame;
        }
        if (FrameRange_IsFrameRangeLike(arg)) {
            if (this.layerIndex !== arg.layerIndex) {
                return false;
            }
            return this.startFrame <= arg.startFrame && this.endFrame >= arg.endFrame;
        }
        throw new Error("Invalid argument type: ".concat(typeof arg));
    };
    FrameRange.prototype.toArray = function () {
        return [this.layerIndex, this.startFrame, this.endFrame];
    };
    return FrameRange;
}(SObject));


;// ./src/core/FrameRange/FrameRangeList.ts
var FrameRangeList_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FrameRangeList = (function (_super) {
    FrameRangeList_extends(FrameRangeList, _super);
    function FrameRangeList(items) {
        if (items === void 0) { items = []; }
        var _this = _super.call(this) || this;
        _this._items = [];
        _this._cachedFirstSlFrameIndex = null;
        _this._cachedFirstSlLayerIndex = null;
        _this._cachedFirstSlLayer = null;
        _this._cachedFirstSlFrame = null;
        _this._items = Array.from(items);
        return _this;
    }
    Object.defineProperty(FrameRangeList.prototype, "length", {
        get: function () {
            return this._items.length;
        },
        enumerable: false,
        configurable: true
    });
    FrameRangeList.prototype[Symbol.iterator] = function () {
        return this._items[Symbol.iterator]();
    };
    FrameRangeList.prototype.at = function (index) {
        if (index < 0) {
            index = this._items.length + index;
        }
        return this._items[index];
    };
    FrameRangeList.prototype.forEach = function (callback) {
        var _this = this;
        this._items.forEach(function (item, i) { return callback(item, i, _this); });
    };
    FrameRangeList.prototype.map = function (callback) {
        return this._items.map(callback);
    };
    Object.defineProperty(FrameRangeList.prototype, "firstSlFrameIndex", {
        get: function () {
            if (this._items.length === 0)
                return null;
            if (this._cachedFirstSlFrameIndex === null) {
                this._cachedFirstSlFrameIndex = this._items[0].startFrame;
            }
            return this._cachedFirstSlFrameIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FrameRangeList.prototype, "firstSlLayerIndex", {
        get: function () {
            if (this._items.length === 0)
                return null;
            if (this._cachedFirstSlLayerIndex === null) {
                this._cachedFirstSlLayerIndex = this._items[0].layerIndex;
            }
            return this._cachedFirstSlLayerIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FrameRangeList.prototype, "firstSlLayer", {
        get: function () {
            if (this._items.length === 0)
                return null;
            if (this._cachedFirstSlLayer === null) {
                var doc = fl.getDocumentDOM();
                if (!doc) {
                    throw new Error("No document is open in Flash.");
                }
                var timeline = doc.getTimeline();
                var layers = timeline.layers;
                var layerIndex = this.firstSlLayerIndex;
                this._cachedFirstSlLayer = layerIndex !== null ? layers[layerIndex] : null;
            }
            return this._cachedFirstSlLayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FrameRangeList.prototype, "firstSlFrame", {
        get: function () {
            if (this._items.length === 0)
                return null;
            if (this._cachedFirstSlFrame === null) {
                var doc = fl.getDocumentDOM();
                if (!doc) {
                    throw new Error("No document is open in Flash.");
                }
                var timeline = doc.getTimeline();
                var curLayerIndex = timeline.currentLayer;
                var curLayer = timeline.layers[curLayerIndex];
                var frameIndex = this.firstSlFrameIndex;
                this._cachedFirstSlFrame =
                    frameIndex !== null ? curLayer.frames[frameIndex] : null;
            }
            return this._cachedFirstSlFrame;
        },
        enumerable: false,
        configurable: true
    });
    FrameRangeList.fromFrameRanges = function (ranges) {
        return new FrameRangeList(ranges.map(function (r) {
            return r instanceof FrameRange
                ? r
                : new FrameRange(r.layerIndex, r.startFrame, r.endFrame);
        }));
    };
    return FrameRangeList;
}(SObject));


;// ./src/flash/FlashElementWrapper.ts



var FlashElementWrapper = (function () {
    function FlashElementWrapper(element) {
        this.element = element;
    }
    Object.defineProperty(FlashElementWrapper.prototype, "topLeft", {
        get: function () {
            var _a = this.element, _b = _a.left, left = _b === void 0 ? 0 : _b, _c = _a.top, top = _c === void 0 ? 0 : _c;
            return new Vector(left, top);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlashElementWrapper.prototype, "size", {
        get: function () {
            return Size.fromElement(this.element);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlashElementWrapper.prototype, "bounds", {
        get: function () {
            return Bounds.fromTopLeft(this.topLeft, this.size);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlashElementWrapper.prototype, "center", {
        get: function () {
            return this.bounds.center;
        },
        enumerable: false,
        configurable: true
    });
    return FlashElementWrapper;
}());


;// ./src/flash/FlashStageWrapper.ts


var FlashStageWrapper = (function () {
    function FlashStageWrapper() {
        this.doc = fl.getDocumentDOM();
    }
    Object.defineProperty(FlashStageWrapper.prototype, "center", {
        get: function () {
            var rect = new Bounds(this.doc);
            var stageCenter = rect.center;
            return stageCenter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlashStageWrapper.prototype, "bounds", {
        get: function () {
            var rect = new Bounds(this.doc);
            return rect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlashStageWrapper.prototype, "size", {
        get: function () {
            return Size.fromElement(this.doc);
        },
        enumerable: false,
        configurable: true
    });
    return FlashStageWrapper;
}());


;// ./src/flash/FlashCameraWrapper.ts



var FlashCameraWrapper = (function () {
    function FlashCameraWrapper(timeline, frameIndex) {
        this.doc = fl.getDocumentDOM();
        this.timeline = this.doc.getTimeline();
        this.frameIndex = 0;
        this.stage = new FlashStageWrapper();
        if (timeline) {
            this.timeline = timeline;
        }
        if (frameIndex) {
            this.frameIndex = frameIndex;
        }
    }
    Object.defineProperty(FlashCameraWrapper.prototype, "bounds", {
        get: function () {
            var _a = this.stage.size, stageWidth = _a.width, stageHeight = _a.height;
            var timeline = this.timeline;
            var frameIndex = this.frameIndex;
            var cameraPos = Vector.fromElement(timeline.camera.getPosition(frameIndex));
            var cameraZoomRatio = timeline.camera.getZoom(frameIndex) / 100;
            var cameraRect = new Bounds(-cameraPos.x, -cameraPos.y, -cameraPos.x + stageWidth / cameraZoomRatio, -cameraPos.y + stageHeight / cameraZoomRatio);
            return cameraRect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlashCameraWrapper.prototype, "center", {
        get: function () {
            return this.bounds.center;
        },
        enumerable: false,
        configurable: true
    });
    return FlashCameraWrapper;
}());


;// ./src/index.ts





















var SAT;
(function (SAT) {
    SAT.Vector = Vector;
    SAT.Scale = Scale;
    SAT.Size = Size;
    SAT.Skew = Skew;
    SAT.Transform = Transform;
    SAT.Box = Box;
    SAT.CornerRect = CornerRect;
    SAT.XYWHRect = XYWHRect;
    SAT.Bounds = Bounds;
    SAT.LTRBRect = Bounds;
    SAT.Circle = Circle;
    SAT.LineSegment = LineSegment;
    SAT.FrameRange = FrameRange;
    SAT.FrameRangeList = FrameRangeList;
    SAT.V = Vector;
    SAT.B = Bounds;
    SAT.S = Size;
    SAT.TR = Transform;
    SAT.FR = FrameRange;
    SAT.FRL = FrameRangeList;
    SAT.SC = Scale;
    SAT.SK = Skew;
    SAT.LS = LineSegment;
    SAT.C = Circle;
})(SAT || (SAT = {}));



var FLASH;
(function (FLASH) {
    FLASH.FlashElementWrapper = FlashElementWrapper;
    FLASH.FlashStageWrapper = FlashStageWrapper;
    FLASH.FlashCameraWrapper = FlashCameraWrapper;
})(FLASH || (FLASH = {}));

/******/ 	return __webpack_exports__;
/******/ })()
;
});