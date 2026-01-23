(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@anjsfl/sat"));
	else if(typeof define === 'function' && define.amd)
		define(["@anjsfl/sat"], factory);
	else if(typeof exports === 'object')
		exports["more-element"] = factory(require("@anjsfl/sat"));
	else
		root["more-element"] = factory(root["@anjsfl/sat"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__957__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 957:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__957__;

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
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ArrangementMode: function() { return /* reexport */ ArrangementMode; },
  MoreElement: function() { return /* reexport */ MoreElement; },
  createMoreElement: function() { return /* reexport */ createMoreElement; }
});

;// ./src/strategies/ArrangementStrategy.ts
var ArrangementStrategy = (function () {
    function ArrangementStrategy(element, offset, basePosition, baseRect, moveDirection) {
        this.element = element;
        this.offset = offset;
        this.basePosition = basePosition;
        this.baseRect = baseRect;
        this.moveDirection = moveDirection;
    }
    return ArrangementStrategy;
}());


;// ./src/strategies/NeatArrangement.ts
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

var NeatArrangement = (function (_super) {
    __extends(NeatArrangement, _super);
    function NeatArrangement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NeatArrangement.prototype.calculate = function (x, y) {
        var baseOffset = this.offset.clone().scale(x, y);
        var position = this.basePosition.clone().add(baseOffset);
        var rect = this.baseRect.clone().addOffset(baseOffset);
        return { position: position, rect: rect };
    };
    return NeatArrangement;
}(ArrangementStrategy));


;// ./src/strategies/StaggeredArrangement.ts
var StaggeredArrangement_extends = (undefined && undefined.__extends) || (function () {
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

var StaggeredArrangement = (function (_super) {
    StaggeredArrangement_extends(StaggeredArrangement, _super);
    function StaggeredArrangement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaggeredArrangement.prototype.calculate = function (x, y) {
        var offset = this.offset.clone().scale(x, y);
        if (y % 2 !== 0) {
            offset.x += this.offset.x / 2;
        }
        var position = this.basePosition.clone().add(offset);
        var rect = this.baseRect.clone().addOffset(offset);
        return { position: position, rect: rect };
    };
    return StaggeredArrangement;
}(ArrangementStrategy));


// EXTERNAL MODULE: external "@anjsfl/sat"
var sat_ = __webpack_require__(957);
;// ./src/strategies/PerspectiveArrangement.ts
var PerspectiveArrangement_extends = (undefined && undefined.__extends) || (function () {
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


var Vector = sat_.SAT.Vector, Scale = sat_.SAT.Scale;
var PerspectiveArrangement = (function (_super) {
    PerspectiveArrangement_extends(PerspectiveArrangement, _super);
    function PerspectiveArrangement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PerspectiveArrangement.prototype.calculate = function (x, y, config) {
        if (!config || !config.horizontalCount) {
            throw new Error('Perspective arrangement requires horizontalCount in config');
        }
        var horizontalCount = config.horizontalCount;
        var baseOffset = this.offset.clone().scale(x, y);
        var position = this.basePosition.clone().add(baseOffset);
        var horizontalSpacing = this.moveDirection.x;
        var itemWidth = this.element.width;
        var offsetX = this.getOffset(horizontalCount, horizontalSpacing, itemWidth, x, y);
        var scaleFactor = this.getScaleFactor(horizontalCount, y);
        var scale = new Scale(scaleFactor, scaleFactor);
        var finalPosition = position.add(new Vector(offsetX, 0));
        var rect = this.baseRect.clone().addOffset(baseOffset);
        return {
            position: finalPosition,
            rect: rect,
            scale: scale
        };
    };
    PerspectiveArrangement.prototype.getScaleFactor = function (horizontalCount, verticalj) {
        return 1 + 0.015 * horizontalCount * verticalj;
    };
    PerspectiveArrangement.prototype.getOffset = function (horizontalCount, horizontalSpacing, itemWidth, i, j) {
        var Factor = 0.013;
        var relatedParam = horizontalCount * horizontalSpacing * itemWidth;
        var dynamicParam = (i - horizontalCount / 2) * j;
        return Factor * relatedParam * dynamicParam;
    };
    return PerspectiveArrangement;
}(ArrangementStrategy));


;// ./src/strategies/GridArrangement.ts
var GridArrangement_extends = (undefined && undefined.__extends) || (function () {
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


var vectorToScale = sat_.VectorConverter.vectorToScale;
var GridArrangement = (function (_super) {
    GridArrangement_extends(GridArrangement, _super);
    function GridArrangement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridArrangement.prototype.calculate = function (x, y) {
        var baseOffset = this.offset.clone().scale(x, y);
        var position = this.basePosition.clone().add(baseOffset);
        var v = this.moveDirection.signPow();
        var scale = vectorToScale(v);
        return {
            position: position,
            scale: scale
        };
    };
    GridArrangement.prototype.executeGridOperation = function () {
        var doc = (typeof fl !== 'undefined') ? fl.getDocumentDOM() : null;
        if (!doc) {
            console.error('FL document not available');
            return;
        }
        doc.duplicateSelection();
        doc.moveSelectionBy(this.offset);
        var v = this.moveDirection.signPow();
        var scale = vectorToScale(v);
        doc.scaleSelection(scale.scaleX, scale.scaleY);
    };
    return GridArrangement;
}(ArrangementStrategy));


;// ./src/strategies/index.ts






;// ./src/enums/ArrangementMode.ts
var ArrangementMode;
(function (ArrangementMode) {
    ArrangementMode["NEAT"] = "neat";
    ArrangementMode["STAGGERED"] = "staggered";
    ArrangementMode["RANDOM"] = "random";
    ArrangementMode["GRID"] = "grid";
    ArrangementMode["PERSPECTIVE"] = "perspective";
})(ArrangementMode || (ArrangementMode = {}));
/* harmony default export */ var enums_ArrangementMode = ((/* unused pure expression or super */ null && (ArrangementMode)));

;// ./src/MoreElement.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var MoreElement_Vector = sat_.SAT.Vector, Bounds = sat_.SAT.Bounds, Size = sat_.SAT.Size;
var MoreElement = (function () {
    function MoreElement(element, arg2, arg3) {
        this.element = element;
        this.position = new MoreElement_Vector(element.x, element.y);
        var horizontalSpacing = 1;
        var verticalSpacing = 1;
        if (arg2 === undefined && arg3 === undefined) {
            horizontalSpacing = 1;
            verticalSpacing = 1;
        }
        else if (arg2 instanceof MoreElement_Vector) {
            horizontalSpacing = arg2.x;
            verticalSpacing = arg2.y;
        }
        else if (typeof arg2 === 'number' && typeof arg3 === 'number') {
            horizontalSpacing = arg2;
            verticalSpacing = arg3;
        }
        this.moveDirection = new MoreElement_Vector(horizontalSpacing, verticalSpacing);
        var originSize = Size.fromElement(element);
        this.offset = new MoreElement_Vector(originSize.width * horizontalSpacing, originSize.height * verticalSpacing);
        this.baseRect = Bounds.fromElement(element);
        this.strategyMap = new Map();
        this.initializeStrategies();
    }
    MoreElement.prototype.initializeStrategies = function () {
        var strategyArgs = [
            this.element,
            this.offset,
            this.position,
            this.baseRect,
            this.moveDirection
        ];
        this.strategyMap.set(ArrangementMode.NEAT, new (NeatArrangement.bind.apply(NeatArrangement, __spreadArray([void 0], strategyArgs, false)))());
        this.strategyMap.set(ArrangementMode.STAGGERED, new (StaggeredArrangement.bind.apply(StaggeredArrangement, __spreadArray([void 0], strategyArgs, false)))());
        this.strategyMap.set(ArrangementMode.PERSPECTIVE, new (PerspectiveArrangement.bind.apply(PerspectiveArrangement, __spreadArray([void 0], strategyArgs, false)))());
        this.strategyMap.set(ArrangementMode.GRID, new (GridArrangement.bind.apply(GridArrangement, __spreadArray([void 0], strategyArgs, false)))());
    };
    MoreElement.prototype.arrange = function (x, y, mode, config) {
        if (mode === void 0) { mode = ArrangementMode.NEAT; }
        var strategy = this.strategyMap.get(mode);
        if (!strategy) {
            throw new Error("Unsupported arrangement mode: ".concat(mode));
        }
        return strategy.calculate(x, y, config);
    };
    MoreElement.prototype.neat = function (x, y) {
        return this.arrange(x, y, ArrangementMode.NEAT);
    };
    MoreElement.prototype.staggered = function (x, y) {
        return this.arrange(x, y, ArrangementMode.STAGGERED);
    };
    MoreElement.prototype.perspective = function (x, y, horizontalCount) {
        var config = { horizontalCount: horizontalCount };
        return this.arrange(x, y, ArrangementMode.PERSPECTIVE, config);
    };
    MoreElement.prototype.grid = function (x, y) {
        return this.arrange(x, y, ArrangementMode.GRID);
    };
    MoreElement.prototype.executeGridOperation = function () {
        var strategy = this.strategyMap.get(ArrangementMode.GRID);
        if (strategy && typeof strategy.executeGridOperation === 'function') {
            strategy.executeGridOperation();
        }
        else {
            console.warn('Grid operation is not available');
        }
    };
    MoreElement.prototype.getElementInfo = function () {
        return {
            element: this.element,
            position: this.position,
            offset: this.offset,
            rect: this.baseRect,
            moveDirection: this.moveDirection
        };
    };
    MoreElement.prototype.addStrategy = function (mode, strategy) {
        this.strategyMap.set(mode, strategy);
    };
    MoreElement.prototype.removeStrategy = function (mode) {
        return this.strategyMap.delete(mode);
    };
    MoreElement.prototype.hasStrategy = function (mode) {
        return this.strategyMap.has(mode);
    };
    MoreElement.prototype.toString = function () {
        return "MoreElement(element=".concat(this.element, ", position=").concat(this.position, ", offset=").concat(this.offset, ", baseRect=").concat(this.baseRect, ")");
    };
    MoreElement.toString = function () {
        return "[object MoreElement]";
    };
    MoreElement.MODES = ArrangementMode;
    return MoreElement;
}());

function createMoreElement(element, arg2, arg3) {
    console.log('Creating MoreElement with arguments:', element, arg2, arg3);
    if (arg2 === undefined && arg3 === undefined) {
        return new MoreElement(element);
    }
    else if (arg2 instanceof MoreElement_Vector) {
        return new MoreElement(element, arg2);
    }
    else if (typeof arg2 === 'number' && typeof arg3 === 'number') {
        return new MoreElement(element, arg2, arg3);
    }
    return new MoreElement(element);
}
/* harmony default export */ var src_MoreElement = ((/* unused pure expression or super */ null && (MoreElement)));

;// ./src/index.ts



/******/ 	return __webpack_exports__;
/******/ })()
;
});