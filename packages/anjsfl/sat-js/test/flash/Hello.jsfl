require(function() { return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(821)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vectorCheck_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsLineSegmentLike = IsLineSegmentLike;
    function IsLineSegmentLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            'startPoint' in obj &&
            'endPoint' in obj &&
            (0, vectorCheck_1.IsVectorLike)(obj.startPoint) &&
            (0, vectorCheck_1.IsVectorLike)(obj.endPoint));
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(526), __webpack_require__(591)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, FrameRange_1, SObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.FrameRangeList = void 0;
    var FrameRangeList = (function (_super) {
        tslib_1.__extends(FrameRangeList, _super);
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
                return r instanceof FrameRange_1.FrameRange
                    ? r
                    : new FrameRange_1.FrameRange(r.layerIndex, r.startFrame, r.endFrame);
            }));
        };
        return FrameRangeList;
    }(SObject_1.SObject));
    exports.FrameRangeList = FrameRangeList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591), __webpack_require__(412), __webpack_require__(880)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1, Vector_1, Bounds_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Circle = void 0;
    var Circle = (function (_super) {
        tslib_1.__extends(Circle, _super);
        function Circle(pos, r) {
            var _this = _super.call(this) || this;
            _this.pos = Vector_1.Vector.ZERO;
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
                return new Bounds_1.Bounds(left, top, right, bottom);
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
    }(SObject_1.SObject));
    exports.Circle = Circle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsElementBoundsLike = IsElementBoundsLike;
    function IsElementBoundsLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            typeof obj.left === "number" &&
            typeof obj.top === "number" &&
            typeof obj.width === "number" &&
            typeof obj.height === "number");
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(821)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vectorCheck_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsCircleLike = IsCircleLike;
    function IsCircleLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            'pos' in obj && 'r' in obj &&
            (0, vectorCheck_1.IsVectorLike)(obj.pos) &&
            typeof obj.r === "number");
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(667), __webpack_require__(862), __webpack_require__(584), __webpack_require__(412), __webpack_require__(880)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, XYWHRect_1, CornerRect_1, Box_1, Vector_1, Bounds_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.BoundsConverter = void 0;
    var BoundsConverter;
    (function (BoundsConverter) {
        function toXYWH(bounds) {
            var rect = new XYWHRect_1.XYWHRect();
            rect.x = bounds.left;
            rect.y = bounds.top;
            rect.width = bounds.right - bounds.left;
            rect.height = bounds.bottom - bounds.top;
            return rect;
        }
        BoundsConverter.toXYWH = toXYWH;
        function toCorner(bounds) {
            var rect = new CornerRect_1.CornerRect();
            rect.topLeft = new Vector_1.Vector(bounds.left, bounds.top);
            rect.bottomRight = new Vector_1.Vector(bounds.right, bounds.bottom);
            return rect;
        }
        BoundsConverter.toCorner = toCorner;
        function toBox(bounds) {
            var box = new Box_1.Box();
            box.pos = new Vector_1.Vector(bounds.left, bounds.bottom);
            box.width = bounds.right - bounds.left;
            box.height = bounds.bottom - bounds.top;
            return box;
        }
        BoundsConverter.toBox = toBox;
        function fromXYWH(rect) {
            var bounds = new Bounds_1.Bounds();
            bounds.left = rect.x;
            bounds.top = rect.y;
            bounds.right = rect.x + rect.width;
            bounds.bottom = rect.y + rect.height;
            return bounds;
        }
        BoundsConverter.fromXYWH = fromXYWH;
        function fromCorner(rect) {
            var bounds = new Bounds_1.Bounds();
            bounds.left = rect.topLeft.x;
            bounds.top = rect.topLeft.y;
            bounds.right = rect.bottomRight.x;
            bounds.bottom = rect.bottomRight.y;
            return bounds;
        }
        BoundsConverter.fromCorner = fromCorner;
        function fromBox(box) {
            var bounds = new Bounds_1.Bounds();
            bounds.left = box.pos.x;
            bounds.bottom = box.pos.y;
            bounds.right = box.pos.x + box.width;
            bounds.top = box.pos.y - box.height;
            return bounds;
        }
        BoundsConverter.fromBox = fromBox;
    })(BoundsConverter || (exports.BoundsConverter = BoundsConverter = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Skew = void 0;
    var Skew = (function (_super) {
        tslib_1.__extends(Skew, _super);
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
    }(SObject_1.SObject));
    exports.Skew = Skew;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(880), __webpack_require__(412), __webpack_require__(745)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Bounds_1, Vector_1, FlashStageWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.FlashCameraWrapper = void 0;
    var FlashCameraWrapper = (function () {
        function FlashCameraWrapper(timeline, frameIndex) {
            this.doc = fl.getDocumentDOM();
            this.timeline = this.doc.getTimeline();
            this.frameIndex = 0;
            this.stage = new FlashStageWrapper_1.FlashStageWrapper();
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
                var cameraPos = Vector_1.Vector.fromElement(timeline.camera.getPosition(frameIndex));
                var cameraZoomRatio = timeline.camera.getZoom(frameIndex) / 100;
                var cameraRect = new Bounds_1.Bounds(-cameraPos.x, -cameraPos.y, -cameraPos.x + stageWidth / cameraZoomRatio, -cameraPos.y + stageHeight / cameraZoomRatio);
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
    exports.FlashCameraWrapper = FlashCameraWrapper;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsSkewLike = IsSkewLike;
    function IsSkewLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            'skewX' in obj && typeof obj.skewX === "number" &&
            'skewY' in obj && typeof obj.skewY === "number");
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(962), __webpack_require__(431), __webpack_require__(273)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vectorEnums_1, linesegmentEnum_1, boundsEnum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ENUM = void 0;
    var ENUM;
    (function (ENUM) {
        ENUM.RelativePosition = vectorEnums_1.RelativePosition;
        ENUM.OrthogonalDirection = linesegmentEnum_1.OrthogonalDirection;
        ENUM.RectangleSide = boundsEnum_1.RectangleSide;
        ENUM.RectanglePart = boundsEnum_1.RectanglePart;
        ENUM.InsetDirection = boundsEnum_1.InsetDirection;
    })(ENUM || (exports.ENUM = ENUM = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.InsetDirection = exports.RectanglePart = exports.RectangleSide = void 0;
    var RectangleSide;
    (function (RectangleSide) {
        RectangleSide["Top"] = "top";
        RectangleSide["Right"] = "right";
        RectangleSide["Bottom"] = "bottom";
        RectangleSide["Left"] = "left";
    })(RectangleSide || (exports.RectangleSide = RectangleSide = {}));
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
    })(RectanglePart || (exports.RectanglePart = RectanglePart = {}));
    var InsetDirection;
    (function (InsetDirection) {
        InsetDirection["All"] = "all";
        InsetDirection["Left"] = "left";
        InsetDirection["Top"] = "top";
        InsetDirection["Right"] = "right";
        InsetDirection["Bottom"] = "bottom";
    })(InsetDirection || (exports.InsetDirection = InsetDirection = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(751)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    var Bounds = sat_1.SAT.Bounds;
    var b = new Bounds(0, 0, 4, 2);
    var r = b.rotate(90);
    console.log(r);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591), __webpack_require__(611), __webpack_require__(160), __webpack_require__(994), __webpack_require__(821), __webpack_require__(912), __webpack_require__(246), __webpack_require__(775), __webpack_require__(412)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1, Size_1, Skew_1, Scale_1, vectorCheck_1, scaleCheck_1, skewCheck_1, sizeCheck_1, Vector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Transform = void 0;
    var Transform = (function (_super) {
        tslib_1.__extends(Transform, _super);
        function Transform(element) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.rotation = element.rotation;
            _this.scale = new Scale_1.Scale(element.scaleX, element.scaleY);
            _this.position = new Vector_1.Vector(element.x, element.y);
            _this.size = new Size_1.Size(element.width, element.height);
            _this.skew = new Skew_1.Skew(element.skewX, element.skewY);
            return _this;
        }
        Transform.prototype.setRotation = function (rotation) {
            this.element.rotation = rotation;
            this.rotation = rotation;
            return this;
        };
        Transform.prototype.setScale = function (scale) {
            var finalScale;
            if (scale instanceof Scale_1.Scale) {
                finalScale = scale;
            }
            else if ((0, vectorCheck_1.IsVectorLike)(scale)) {
                finalScale = new Scale_1.Scale(scale.x, scale.y);
            }
            else if ((0, scaleCheck_1.IsScaleLike)(scale)) {
                finalScale = new Scale_1.Scale(scale.scaleX, scale.scaleY);
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
            if (position instanceof Vector_1.Vector) {
                finalPosition = position;
            }
            else if ((0, vectorCheck_1.IsVectorLike)(position)) {
                finalPosition = new Vector_1.Vector(position.x, position.y);
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
            if (size instanceof Size_1.Size) {
                finalSize = size;
            }
            else if ((0, vectorCheck_1.IsVectorLike)(size)) {
                finalSize = new Size_1.Size(size.x, size.y);
            }
            else if ((0, sizeCheck_1.IsSizeLike)(size)) {
                finalSize = new Size_1.Size(size.width, size.height);
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
            if (skew instanceof Skew_1.Skew) {
                finalSkew = skew;
            }
            else if ((0, vectorCheck_1.IsVectorLike)(skew)) {
                finalSkew = new Skew_1.Skew(skew.x, skew.y);
            }
            else if ((0, skewCheck_1.IsSkewLike)(skew)) {
                finalSkew = new Skew_1.Skew(skew.skewX, skew.skewY);
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
    }(SObject_1.SObject));
    exports.Transform = Transform;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591), __webpack_require__(962)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1, vectorEnums_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Vector = void 0;
    var Vector = (function (_super) {
        tslib_1.__extends(Vector, _super);
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
            _a[vectorEnums_1.RelativePosition.TopRight] = function (dx, dy) { return dx > 0 && dy < 0; },
            _a[vectorEnums_1.RelativePosition.TopLeft] = function (dx, dy) { return dx < 0 && dy < 0; },
            _a[vectorEnums_1.RelativePosition.BottomRight] = function (dx, dy) { return dx > 0 && dy > 0; },
            _a[vectorEnums_1.RelativePosition.BottomLeft] = function (dx, dy) { return dx < 0 && dy > 0; },
            _a[vectorEnums_1.RelativePosition.TopCenter] = function (_dx, dy) { return dy < 0; },
            _a[vectorEnums_1.RelativePosition.BottomCenter] = function (_dx, dy) { return dy > 0; },
            _a[vectorEnums_1.RelativePosition.LeftCenter] = function (dx, _dy) { return dx < 0; },
            _a[vectorEnums_1.RelativePosition.RightCenter] = function (dx, _dy) { return dx > 0; },
            _a[vectorEnums_1.RelativePosition.Center] = function (dx, dy) { return dx === 0 && dy === 0; },
            _a);
        Vector.ZERO = new Vector(0, 0);
        Vector.ONE = new Vector(1, 1);
        Vector.LEFT = new Vector(-1, 0);
        Vector.RIGHT = new Vector(1, 0);
        Vector.UP = new Vector(0, -1);
        Vector.DOWN = new Vector(0, 1);
        return Vector;
    }(SObject_1.SObject));
    exports.Vector = Vector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.OrthogonalDirection = void 0;
    var OrthogonalDirection;
    (function (OrthogonalDirection) {
        OrthogonalDirection["Left"] = "left";
        OrthogonalDirection["Top"] = "top";
        OrthogonalDirection["Right"] = "right";
        OrthogonalDirection["Bottom"] = "bottom";
    })(OrthogonalDirection || (exports.OrthogonalDirection = OrthogonalDirection = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(821), __webpack_require__(775)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vectorCheck_1, sizeCheck_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsTransformLike = IsTransformLike;
    function IsTransformLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            'rotation' in obj && typeof obj.rotation === "number" &&
            'scale' in obj && (0, vectorCheck_1.IsVectorLike)(obj.scale) &&
            'position' in obj && (0, vectorCheck_1.IsVectorLike)(obj.position) &&
            'size' in obj && (0, sizeCheck_1.IsSizeLike)(obj.size) &&
            'skew' in obj && (0, vectorCheck_1.IsVectorLike)(obj.skew));
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsBoundsLike = IsBoundsLike;
    function IsBoundsLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            typeof obj.left === "number" &&
            typeof obj.top === "number" &&
            typeof obj.right === "number" &&
            typeof obj.bottom === "number");
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591), __webpack_require__(632)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1, check_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.FrameRange = void 0;
    var IsFrameRangeLike = check_1.CHECK.IsFrameRangeLike;
    var FrameRange = (function (_super) {
        tslib_1.__extends(FrameRange, _super);
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
            if (IsFrameRangeLike(arg)) {
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
    }(SObject_1.SObject));
    exports.FrameRange = FrameRange;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591), __webpack_require__(412)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1, Vector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Box = void 0;
    var Box = (function (_super) {
        tslib_1.__extends(Box, _super);
        function Box() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pos = Vector_1.Vector.ZERO;
            _this.width = 0;
            _this.height = 0;
            return _this;
        }
        return Box;
    }(SObject_1.SObject));
    exports.Box = Box;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(412), __webpack_require__(880), __webpack_require__(591), __webpack_require__(431)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Vector_1, Bounds_1, SObject_1, linesegmentEnum_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.LineSegment = void 0;
    var LineSegment = (function (_super) {
        tslib_1.__extends(LineSegment, _super);
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
                return new Bounds_1.Bounds(left, top, right, bottom);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LineSegment.prototype, "center", {
            get: function () {
                var x = (this.startPoint.x + this.endPoint.x) / 2;
                var y = (this.startPoint.y + this.endPoint.y) / 2;
                return new Vector_1.Vector(x, y);
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
                var normal = new Vector_1.Vector(-dy / length, dx / length);
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
            return new Vector_1.Vector(x, y);
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
            return new Vector_1.Vector(dx, dy);
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
    }(SObject_1.SObject));
    exports.LineSegment = LineSegment;
    var DIRECTION_OFFSETS = (_a = {},
        _a[linesegmentEnum_1.OrthogonalDirection.Left] = new Vector_1.Vector(-1, 0),
        _a[linesegmentEnum_1.OrthogonalDirection.Top] = new Vector_1.Vector(0, -1),
        _a[linesegmentEnum_1.OrthogonalDirection.Right] = new Vector_1.Vector(1, 0),
        _a[linesegmentEnum_1.OrthogonalDirection.Bottom] = new Vector_1.Vector(0, 1),
        _a);
    function getDirectionOffset(direction) {
        var offset = DIRECTION_OFFSETS[direction];
        if (!offset) {
            throw new Error("Unsupported direction: ".concat(direction));
        }
        return offset;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.SObject = void 0;
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
    exports.SObject = SObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Size = void 0;
    var Size = (function (_super) {
        tslib_1.__extends(Size, _super);
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
    }(SObject_1.SObject));
    exports.Size = Size;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(515), __webpack_require__(821), __webpack_require__(775), __webpack_require__(450), __webpack_require__(690), __webpack_require__(101), __webpack_require__(912), __webpack_require__(246), __webpack_require__(47), __webpack_require__(112)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, boundsCheck_1, vectorCheck_1, sizeCheck_1, transformCheck_1, framerangeCheck_1, elementboundsCheck_1, scaleCheck_1, skewCheck_1, linesegmentCheck_1, circleCheck_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.CHECK = void 0;
    var CHECK;
    (function (CHECK) {
        CHECK.IsBoundsLike = boundsCheck_1.IsBoundsLike;
        CHECK.IsVectorLike = vectorCheck_1.IsVectorLike;
        CHECK.IsSizeLike = sizeCheck_1.IsSizeLike;
        CHECK.IsTransformLike = transformCheck_1.IsTransformLike;
        CHECK.IsFrameRangeLike = framerangeCheck_1.IsFrameRangeLike;
        CHECK.IsElementBoundsLike = elementboundsCheck_1.IsElementBoundsLike;
        CHECK.IsScaleLike = scaleCheck_1.IsScaleLike;
        CHECK.IsSkewLike = skewCheck_1.IsSkewLike;
        CHECK.IsLineSegmentLike = linesegmentCheck_1.IsLineSegmentLike;
        CHECK.IsCircleLike = circleCheck_1.IsCircleLike;
    })(CHECK || (exports.CHECK = CHECK = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(412), __webpack_require__(994), __webpack_require__(611), __webpack_require__(160)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Vector_1, Scale_1, Size_1, Skew_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.VectorConverter = void 0;
    var VectorConverter;
    (function (VectorConverter) {
        function vectorToScale(v) {
            return new Scale_1.Scale(v.x, v.y);
        }
        VectorConverter.vectorToScale = vectorToScale;
        function vectorToSize(v) {
            return new Size_1.Size(v.x, v.y);
        }
        VectorConverter.vectorToSize = vectorToSize;
        function vectorToSkew(v) {
            return new Skew_1.Skew(v.x, v.y);
        }
        VectorConverter.vectorToSkew = vectorToSkew;
        function scaleToVector(s) {
            return new Vector_1.Vector(s.scaleX, s.scaleY);
        }
        VectorConverter.scaleToVector = scaleToVector;
        function scaleToSize(s) {
            return new Size_1.Size(s.scaleX, s.scaleY);
        }
        VectorConverter.scaleToSize = scaleToSize;
        function scaleToSkew(s) {
            return new Skew_1.Skew(s.scaleX, s.scaleY);
        }
        VectorConverter.scaleToSkew = scaleToSkew;
        function sizeToVector(s) {
            return new Vector_1.Vector(s.width, s.height);
        }
        VectorConverter.sizeToVector = sizeToVector;
        function sizeToScale(s) {
            return new Scale_1.Scale(s.width, s.height);
        }
        VectorConverter.sizeToScale = sizeToScale;
        function sizeToSkew(s) {
            return new Skew_1.Skew(s.width, s.height);
        }
        VectorConverter.sizeToSkew = sizeToSkew;
        function skewToVector(s) {
            return new Vector_1.Vector(s.skewX, s.skewY);
        }
        VectorConverter.skewToVector = skewToVector;
        function skewToScale(s) {
            return new Scale_1.Scale(s.skewX, s.skewY);
        }
        VectorConverter.skewToScale = skewToScale;
        function skewToSize(s) {
            return new Size_1.Size(s.skewX, s.skewY);
        }
        VectorConverter.skewToSize = skewToSize;
        function toVector(obj) {
            if ("x" in obj && "y" in obj) {
                return new Vector_1.Vector(obj.x, obj.y);
            }
            else if ("width" in obj && "height" in obj) {
                return new Vector_1.Vector(obj.width, obj.height);
            }
            else if ("scaleX" in obj && "scaleY" in obj) {
                return new Vector_1.Vector(obj.scaleX, obj.scaleY);
            }
            else if ("skewX" in obj && "skewY" in obj) {
                return new Vector_1.Vector(obj.skewX, obj.skewY);
            }
            else {
                throw new Error("Unsupported object structure for Vector conversion");
            }
        }
        VectorConverter.toVector = toVector;
    })(VectorConverter || (exports.VectorConverter = VectorConverter = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XYWHRect = void 0;
    var XYWHRect = (function (_super) {
        tslib_1.__extends(XYWHRect, _super);
        function XYWHRect() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.x = 0;
            _this.y = 0;
            _this.width = 0;
            _this.height = 0;
            return _this;
        }
        return XYWHRect;
    }(SObject_1.SObject));
    exports.XYWHRect = XYWHRect;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsFrameRangeLike = IsFrameRangeLike;
    function IsFrameRangeLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            'layerIndex' in obj && typeof obj.layerIndex === "number" &&
            'startFrame' in obj && typeof obj.startFrame === "number" &&
            'endFrame' in obj && typeof obj.endFrame === "number");
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(880), __webpack_require__(611)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Bounds_1, Size_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.FlashStageWrapper = void 0;
    var FlashStageWrapper = (function () {
        function FlashStageWrapper() {
            this.doc = fl.getDocumentDOM();
        }
        Object.defineProperty(FlashStageWrapper.prototype, "center", {
            get: function () {
                var rect = new Bounds_1.Bounds(this.doc);
                var stageCenter = rect.center;
                return stageCenter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlashStageWrapper.prototype, "bounds", {
            get: function () {
                var rect = new Bounds_1.Bounds(this.doc);
                return rect;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlashStageWrapper.prototype, "size", {
            get: function () {
                return Size_1.Size.fromElement(this.doc);
            },
            enumerable: false,
            configurable: true
        });
        return FlashStageWrapper;
    }());
    exports.FlashStageWrapper = FlashStageWrapper;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(632), __webpack_require__(251), __webpack_require__(154), __webpack_require__(654), __webpack_require__(412), __webpack_require__(994), __webpack_require__(611), __webpack_require__(160), __webpack_require__(388), __webpack_require__(584), __webpack_require__(862), __webpack_require__(667), __webpack_require__(880), __webpack_require__(71), __webpack_require__(588), __webpack_require__(526), __webpack_require__(62), __webpack_require__(867), __webpack_require__(745), __webpack_require__(212)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, check_1, enum_1, BoundsConverter_1, VectorConverter_1, Vector_1, Scale_1, Size_1, Skew_1, Transform_1, Box_1, CornerRect_1, XYWHRect_1, Bounds_1, Circle_1, LineSegment_1, FrameRange_1, FrameRangeList_1, FlashElementWrapper_1, FlashStageWrapper_1, FlashCameraWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.FLASH = exports.SAT = exports.VectorConverter = exports.BoundsConverter = exports.ENUM = exports.CHECK = void 0;
    Object.defineProperty(exports, "CHECK", ({ enumerable: true, get: function () { return check_1.CHECK; } }));
    Object.defineProperty(exports, "ENUM", ({ enumerable: true, get: function () { return enum_1.ENUM; } }));
    Object.defineProperty(exports, "BoundsConverter", ({ enumerable: true, get: function () { return BoundsConverter_1.BoundsConverter; } }));
    Object.defineProperty(exports, "VectorConverter", ({ enumerable: true, get: function () { return VectorConverter_1.VectorConverter; } }));
    var SAT;
    (function (SAT) {
        SAT.Vector = Vector_1.Vector;
        SAT.Scale = Scale_1.Scale;
        SAT.Size = Size_1.Size;
        SAT.Skew = Skew_1.Skew;
        SAT.Transform = Transform_1.Transform;
        SAT.Box = Box_1.Box;
        SAT.CornerRect = CornerRect_1.CornerRect;
        SAT.XYWHRect = XYWHRect_1.XYWHRect;
        SAT.Bounds = Bounds_1.Bounds;
        SAT.LTRBRect = Bounds_1.Bounds;
        SAT.Circle = Circle_1.Circle;
        SAT.LineSegment = LineSegment_1.LineSegment;
        SAT.FrameRange = FrameRange_1.FrameRange;
        SAT.FrameRangeList = FrameRangeList_1.FrameRangeList;
        SAT.V = Vector_1.Vector;
        SAT.B = Bounds_1.Bounds;
        SAT.S = Size_1.Size;
        SAT.TR = Transform_1.Transform;
        SAT.FR = FrameRange_1.FrameRange;
        SAT.FRL = FrameRangeList_1.FrameRangeList;
        SAT.SC = Scale_1.Scale;
        SAT.SK = Skew_1.Skew;
        SAT.LS = LineSegment_1.LineSegment;
        SAT.C = Circle_1.Circle;
    })(SAT || (exports.SAT = SAT = {}));
    var FLASH;
    (function (FLASH) {
        FLASH.FlashElementWrapper = FlashElementWrapper_1.FlashElementWrapper;
        FLASH.FlashStageWrapper = FlashStageWrapper_1.FlashStageWrapper;
        FLASH.FlashCameraWrapper = FlashCameraWrapper_1.FlashCameraWrapper;
    })(FLASH || (exports.FLASH = FLASH = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsSizeLike = IsSizeLike;
    function IsSizeLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            'width' in obj && typeof obj.width === "number" &&
            'height' in obj && typeof obj.height === "number");
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsVectorLike = IsVectorLike;
    function IsVectorLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            'x' in obj && typeof obj.x === "number" &&
            'y' in obj && typeof obj.y === "number");
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 823:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: function() { return /* binding */ __addDisposableResource; },
/* harmony export */   __assign: function() { return /* binding */ __assign; },
/* harmony export */   __asyncDelegator: function() { return /* binding */ __asyncDelegator; },
/* harmony export */   __asyncGenerator: function() { return /* binding */ __asyncGenerator; },
/* harmony export */   __asyncValues: function() { return /* binding */ __asyncValues; },
/* harmony export */   __await: function() { return /* binding */ __await; },
/* harmony export */   __awaiter: function() { return /* binding */ __awaiter; },
/* harmony export */   __classPrivateFieldGet: function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   __classPrivateFieldIn: function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   __classPrivateFieldSet: function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   __createBinding: function() { return /* binding */ __createBinding; },
/* harmony export */   __decorate: function() { return /* binding */ __decorate; },
/* harmony export */   __disposeResources: function() { return /* binding */ __disposeResources; },
/* harmony export */   __esDecorate: function() { return /* binding */ __esDecorate; },
/* harmony export */   __exportStar: function() { return /* binding */ __exportStar; },
/* harmony export */   __extends: function() { return /* binding */ __extends; },
/* harmony export */   __generator: function() { return /* binding */ __generator; },
/* harmony export */   __importDefault: function() { return /* binding */ __importDefault; },
/* harmony export */   __importStar: function() { return /* binding */ __importStar; },
/* harmony export */   __makeTemplateObject: function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   __metadata: function() { return /* binding */ __metadata; },
/* harmony export */   __param: function() { return /* binding */ __param; },
/* harmony export */   __propKey: function() { return /* binding */ __propKey; },
/* harmony export */   __read: function() { return /* binding */ __read; },
/* harmony export */   __rest: function() { return /* binding */ __rest; },
/* harmony export */   __rewriteRelativeImportExtension: function() { return /* binding */ __rewriteRelativeImportExtension; },
/* harmony export */   __runInitializers: function() { return /* binding */ __runInitializers; },
/* harmony export */   __setFunctionName: function() { return /* binding */ __setFunctionName; },
/* harmony export */   __spread: function() { return /* binding */ __spread; },
/* harmony export */   __spreadArray: function() { return /* binding */ __spreadArray; },
/* harmony export */   __spreadArrays: function() { return /* binding */ __spreadArrays; },
/* harmony export */   __values: function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591), __webpack_require__(412)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1, Vector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.CornerRect = void 0;
    var CornerRect = (function (_super) {
        tslib_1.__extends(CornerRect, _super);
        function CornerRect() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.topLeft = Vector_1.Vector.ZERO;
            _this.bottomRight = Vector_1.Vector.ZERO;
            return _this;
        }
        return CornerRect;
    }(SObject_1.SObject));
    exports.CornerRect = CornerRect;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(412), __webpack_require__(611), __webpack_require__(880)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Vector_1, Size_1, Bounds_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.FlashElementWrapper = void 0;
    var FlashElementWrapper = (function () {
        function FlashElementWrapper(element) {
            this.element = element;
        }
        Object.defineProperty(FlashElementWrapper.prototype, "topLeft", {
            get: function () {
                var _a = this.element, _b = _a.left, left = _b === void 0 ? 0 : _b, _c = _a.top, top = _c === void 0 ? 0 : _c;
                return new Vector_1.Vector(left, top);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlashElementWrapper.prototype, "size", {
            get: function () {
                return Size_1.Size.fromElement(this.element);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlashElementWrapper.prototype, "bounds", {
            get: function () {
                return Bounds_1.Bounds.fromTopLeft(this.topLeft, this.size);
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
    exports.FlashElementWrapper = FlashElementWrapper;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591), __webpack_require__(412), __webpack_require__(962), __webpack_require__(273), __webpack_require__(515), __webpack_require__(611), __webpack_require__(821)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1, Vector_1, vectorEnums_1, boundsEnum_1, boundsCheck_1, Size_1, vectorCheck_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Bounds = void 0;
    var Bounds = (function (_super) {
        tslib_1.__extends(Bounds, _super);
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
                    else if ((0, boundsCheck_1.IsBoundsLike)(arg)) {
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
                return new Vector_1.Vector((this.left + this.right) / 2, (this.top + this.bottom) / 2);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Bounds.prototype, "size", {
            get: function () {
                return new Size_1.Size(this.width, this.height);
            },
            enumerable: false,
            configurable: true
        });
        Bounds.prototype.addOffset = function (offset) {
            if (typeof offset === "number") {
                offset = new Bounds(offset, offset, offset, offset);
            }
            else if ((0, vectorCheck_1.IsVectorLike)(offset)) {
                offset = new Bounds(offset.x, offset.y, offset.x, offset.y);
            }
            return new Bounds(this.left + offset.left, this.top + offset.top, this.right + offset.right, this.bottom + offset.bottom);
        };
        Bounds.prototype.subOffset = function (offset) {
            if (typeof offset === "number") {
                offset = new Bounds(offset, offset, offset, offset);
            }
            else if (offset instanceof Vector_1.Vector) {
                offset = new Bounds(offset.x, offset.y, offset.x, offset.y);
            }
            return new Bounds(this.left - offset.left, this.top - offset.top, this.right - offset.right, this.bottom - offset.bottom);
        };
        Bounds.createDirectionalOffset = function (size, direction) {
            var offset = new Bounds(0, 0, 0, 0);
            switch (direction) {
                case boundsEnum_1.InsetDirection.Left:
                    offset.left = -size;
                    break;
                case boundsEnum_1.InsetDirection.Top:
                    offset.top = -size;
                    break;
                case boundsEnum_1.InsetDirection.Right:
                    offset.right = size;
                    break;
                case boundsEnum_1.InsetDirection.Bottom:
                    offset.bottom = size;
                    break;
                case boundsEnum_1.InsetDirection.All:
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
            if (whichDirection === void 0) { whichDirection = boundsEnum_1.InsetDirection.All; }
            var offset = Bounds.createDirectionalOffset(size, whichDirection);
            return this.addOffset(offset);
        };
        Bounds.prototype.shrink = function (size, whichDirection) {
            if (whichDirection === void 0) { whichDirection = boundsEnum_1.InsetDirection.All; }
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
                case vectorEnums_1.RelativePosition.TopRight:
                    return new Vector_1.Vector(right, top);
                case vectorEnums_1.RelativePosition.TopLeft:
                    return new Vector_1.Vector(left, top);
                case vectorEnums_1.RelativePosition.BottomRight:
                    return new Vector_1.Vector(right, bottom);
                case vectorEnums_1.RelativePosition.BottomLeft:
                    return new Vector_1.Vector(left, bottom);
                case vectorEnums_1.RelativePosition.TopCenter:
                    return new Vector_1.Vector(centerX, top);
                case vectorEnums_1.RelativePosition.RightCenter:
                    return new Vector_1.Vector(right, centerY);
                case vectorEnums_1.RelativePosition.BottomCenter:
                    return new Vector_1.Vector(centerX, bottom);
                case vectorEnums_1.RelativePosition.LeftCenter:
                    return new Vector_1.Vector(left, centerY);
                case vectorEnums_1.RelativePosition.Center:
                    return new Vector_1.Vector(centerX, centerY);
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
                case boundsEnum_1.RectanglePart.TopRight:
                    return new Bounds(right - invWidth, top, right, top + partHeight);
                case boundsEnum_1.RectanglePart.TopLeft:
                    return new Bounds(left, top, left + partWidth, top + partHeight);
                case boundsEnum_1.RectanglePart.BottomRight:
                    return new Bounds(right - invWidth, bottom - invHeight, right, bottom);
                case boundsEnum_1.RectanglePart.BottomLeft:
                    return new Bounds(left, bottom - invHeight, left + partWidth, bottom);
                case boundsEnum_1.RectanglePart.TopCenter:
                    return new Bounds(centerX - halfW, top, centerX + halfW, top + partHeight);
                case boundsEnum_1.RectanglePart.RightCenter:
                    return new Bounds(right - invWidth, centerY - halfH, right, centerY + halfH);
                case boundsEnum_1.RectanglePart.BottomCenter:
                    return new Bounds(centerX - halfW, bottom - partHeight, centerX + halfW, bottom);
                case boundsEnum_1.RectanglePart.LeftCenter:
                    return new Bounds(left, centerY - halfH, left + partWidth, centerY + halfH);
                case boundsEnum_1.RectanglePart.Center:
                    return new Bounds(centerX - halfW, centerY - halfH, centerX + halfW, centerY + halfH);
                case boundsEnum_1.RectanglePart.Top:
                    return new Bounds(left, top, right, top + partHeight);
                case boundsEnum_1.RectanglePart.Right:
                    return new Bounds(right - invWidth, top, right, bottom);
                case boundsEnum_1.RectanglePart.Bottom:
                    return new Bounds(left, bottom - partHeight, right, bottom);
                case boundsEnum_1.RectanglePart.Left:
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
            if (whichCorner === void 0) { whichCorner = vectorEnums_1.RelativePosition.Center; }
            var radians = angle * (Math.PI / 180);
            var center = this.getCorner(whichCorner);
            var topLeft = this.getCorner(vectorEnums_1.RelativePosition.TopLeft);
            var topRight = this.getCorner(vectorEnums_1.RelativePosition.TopRight);
            var bottomLeft = this.getCorner(vectorEnums_1.RelativePosition.BottomLeft);
            var bottomRight = this.getCorner(vectorEnums_1.RelativePosition.BottomRight);
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
    }(SObject_1.SObject));
    exports.Bounds = Bounds;
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
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsScaleLike = IsScaleLike;
    function IsScaleLike(obj) {
        return (obj !== null &&
            typeof obj === "object" &&
            'scaleX' in obj && typeof obj.scaleX === "number" &&
            'scaleY' in obj && typeof obj.scaleY === "number");
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.RelativePosition = void 0;
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
    })(RelativePosition || (exports.RelativePosition = RelativePosition = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(823), __webpack_require__(591)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Scale = void 0;
    var Scale = (function (_super) {
        tslib_1.__extends(Scale, _super);
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
    }(SObject_1.SObject));
    exports.Scale = Scale;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(382);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;