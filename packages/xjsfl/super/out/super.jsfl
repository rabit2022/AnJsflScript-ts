(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chroma-js"));
	else if(typeof define === 'function' && define.amd)
		define(["chroma-js"], factory);
	else if(typeof exports === 'object')
		exports["super"] = factory(require("chroma-js"));
	else
		root["super"] = factory(root["chroma-js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__534__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 534:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__534__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
  AdvancedColorTransform: function() { return /* reexport */ AdvancedColorTransform; },
  AdvancedColorTransformBuilder: function() { return /* reexport */ AdvancedColorTransformBuilder; },
  AlphaColorTransform: function() { return /* reexport */ AlphaColorTransform; },
  AlphaColorTransformBuilder: function() { return /* reexport */ AlphaColorTransformBuilder; },
  BaseColorTransform: function() { return /* reexport */ BaseColorTransform; },
  BaseColorTransformBuilder: function() { return /* reexport */ BaseColorTransformBuilder; },
  BrightnessColorTransform: function() { return /* reexport */ BrightnessColorTransform; },
  BrightnessColorTransformBuilder: function() { return /* reexport */ BrightnessColorTransformBuilder; },
  COLOR_TRANSFORMS: function() { return /* reexport */ COLOR_TRANSFORMS; },
  COLOR_TRANSFORM_BUILDERS: function() { return /* reexport */ COLOR_TRANSFORM_BUILDERS; },
  COLOR_TRANSFORM_INSTANCES: function() { return /* reexport */ COLOR_TRANSFORM_INSTANCES; },
  FILLS: function() { return /* reexport */ FILLS; },
  FILL_BUILDERS: function() { return /* reexport */ FILL_BUILDERS; },
  NoneColorTransform: function() { return /* reexport */ NoneColorTransform; },
  STROKES: function() { return /* reexport */ STROKES; },
  STROKE_BUILDERS: function() { return /* reexport */ STROKE_BUILDERS; },
  Superdoc: function() { return /* reexport */ Superdoc; },
  TintColorTransform: function() { return /* reexport */ TintColorTransform; },
  TintColorTransformBuilder: function() { return /* reexport */ TintColorTransformBuilder; },
  createColorTransform: function() { return /* reexport */ createColorTransform; },
  createColorTransformBuilder: function() { return /* reexport */ createColorTransformBuilder; },
  createFill: function() { return /* reexport */ createFill; },
  createFillBuilder: function() { return /* reexport */ createFillBuilder; },
  createStroke: function() { return /* reexport */ createStroke; },
  createStrokeBuilder: function() { return /* reexport */ createStrokeBuilder; },
  hexToRgb: function() { return /* binding */ hexToRgb; },
  parseColor: function() { return /* binding */ parseColor; },
  rgbToHex: function() { return /* binding */ rgbToHex; },
  setAlpha: function() { return /* binding */ setAlpha; },
  setInstanceAdvancedColor: function() { return /* reexport */ setInstanceAdvancedColor; },
  setInstanceAlpha: function() { return /* reexport */ setInstanceAlpha; },
  setInstanceBrightness: function() { return /* reexport */ setInstanceBrightness; },
  setInstanceNone: function() { return /* reexport */ setInstanceNone; },
  setInstanceTint: function() { return /* reexport */ setInstanceTint; },
  setInstanceTintRGB: function() { return /* reexport */ setInstanceTintRGB; }
});

;// ./src/Superdoc.ts
var Superdoc = {
    appearance: {
        fill: {
            color: function (color) {
                document.setFillColor(color);
            },
            set toolbar(fill) {
                document.setCustomFill(fill);
            },
            get toolbar() {
                return document.getCustomFill('toolbar');
            },
            set selection(fill) {
                document.setCustomFill(fill);
            },
            get selection() {
                return document.getCustomFill('selection');
            },
            swapWithStroke: function () {
                document.swapStrokeAndFill();
            }
        },
        stroke: {
            set color(color) {
                document.setStrokeColor(color);
            },
            set custom(stroke) {
                document.setCustomStroke(stroke);
            },
            get selection() {
                return document.getCustomStroke('selection');
            },
            get toolbar() {
                return document.getCustomStroke('toolbar');
            },
            set size(size) {
                document.setStrokeSize(size);
            },
            set style(strokeType) {
                document.setStrokeStyle(strokeType);
            },
            set: function (color, size, strokeType) {
                document.setStroke(color, size, strokeType);
            },
            swapWithFill: function () {
                document.swapStrokeAndFill();
            }
        },
        properties: {
            get width() {
                return document.width;
            },
            set width(value) {
                document.width = value;
            },
            get height() {
                return document.height;
            },
            set height(value) {
                document.height = value;
            },
            set size(value) {
                document.width = value[0];
                document.height = value[1];
            },
            get size() {
                return [document.width, document.height];
            },
            get frameRate() {
                return document.frameRate;
            },
            set frameRate(value) {
                document.frameRate = value;
            },
            get backgroundColor() {
                return document.backgroundColor;
            },
            set backgroundColor(value) {
                document.backgroundColor = value;
            },
            get id() {
                return document.id;
            },
            set id(value) {
                document.id = value;
            }
        },
        view: {
            get livePreview() {
                return document.livePreview;
            },
            set livePreview(value) {
                document.livePreview = value;
            },
            get matrix() {
                return document.viewMatrix;
            },
            set matrix(value) {
                document.viewMatrix = value;
            },
            set vanishingPoint(point) {
                document.setStageVanishingPoint(point);
            },
            set viewAngle(angle) {
                document.setStageViewAngle(angle);
            },
            get zoom() {
                return document.zoomFactor;
            },
            set zoom(value) {
                document.zoomFactor = value;
            }
        }
    },
    containers: {
        timeline: {
            get all() {
                return document.timelines;
            },
            get current() {
                return document.currentTimeline;
            },
            set current(value) {
                document.currentTimeline = value;
            },
            edit: function (editMode) {
                document.enterEditMode(editMode);
            },
            exit: function () {
                document.exitEditMode();
            },
            get: function () {
                return document.getTimeline();
            }
        },
        scene: {
            add: function (name) {
                return document.addNewScene(name);
            },
            remove: function () {
                return document.deleteScene();
            },
            duplicate: function () {
                return document.duplicateScene();
            },
            edit: function (index) {
                document.editScene(index);
            },
            rename: function (name) {
                return document.renameScene(name);
            },
            reorder: function (sceneToMove, sceneToPutItBefore) {
                document.reorderScene(sceneToMove, sceneToPutItBefore);
            }
        },
        screens: {
            get allow() {
                return document.allowScreens();
            },
            get outline() {
                if (!document.canTestScene()) {
                    return document.screenOutline;
                }
            }
        },
        panel: {
            get library() {
                return document.library;
            },
            xml: function (fileURI) {
                return document.xmlPanel(fileURI);
            }
        }
    },
    data: {
        set: function (name, type, data) {
            document.addDataToDocument(name, type, data);
        },
        get: function (name) {
            document.getDataFromDocument(name);
        },
        set meta(strMetadata) {
            document.setMetadata(strMetadata);
        },
        get meta() {
            return document.getMetadata();
        }
    },
    elements: {
        accessibility: {
            get autoLabel() {
                return document.autoLabel;
            },
            set autoLabel(value) {
                document.autoLabel = value;
            },
            get description() {
                return document.description;
            },
            set description(value) {
                document.description = value;
            },
            get forceSimple() {
                return document.forceSimple;
            },
            set forceSimple(value) {
                document.forceSimple = value;
            },
            get name() {
                return document.accName;
            },
            set name(value) {
                document.accName = value;
            },
            get silent() {
                return document.silent;
            },
            set silent(value) {
                document.silent = value;
            }
        },
        add: {
            item: function (position, item) {
                return document.addItem(position, item);
            },
            line: function (startPoint, endpoint) {
                document.addNewLine(startPoint, endpoint);
            },
            oval: function (boundingRectangle, bSuppressFill, bSuppressStroke) {
                document.addNewOval(boundingRectangle, bSuppressFill, bSuppressStroke);
            },
            primitiveOval: function (boundingRectangle, bSpupressFill, bSuppressStroke) {
                document.addNewPrimitiveOval(boundingRectangle, bSpupressFill, bSuppressStroke);
            },
            primitiveRectangle: function (boundingRectangle, roundness, bSuppressFill, bSuppressStroke) {
                document.addNewPrimitiveRectangle(boundingRectangle, roundness, bSuppressFill, bSuppressStroke);
            },
            rectangle: function (boundingRectangle, roundness, bSuppressFill, bSuppressStroke) {
                document.addNewRectangle(boundingRectangle, roundness, bSuppressFill, bSuppressStroke);
            },
            text: function (boundingRectangle, text) {
                document.addNewText(boundingRectangle, text);
            }
        },
        filter: {
            add: function (filterName) {
                document.addFilter(filterName);
            },
            remove: function (filterIndex) {
                document.removeFilter(filterIndex);
            },
            setProperty: function (property, filterIndex, value) {
                document.setFilterProperty(property, filterIndex, value);
            },
            changeOrder: function (oldIndex, newIndex) {
                document.changeFilterOrder(oldIndex, newIndex);
            },
            enable: function (filterIndex) {
                document.enableFilter(filterIndex);
            },
            disable: function (filterIndex) {
                document.disableFilter(filterIndex);
            },
            disableOther: function (enabledFilterIndex) {
                document.disableOtherFilters(enabledFilterIndex);
            }
        },
        filters: {
            set: function (filterArray) {
                document.setFilters(filterArray);
            },
            get: function () {
                return document.getFilters();
            },
            remove: function () {
                document.removeAllFilters();
            },
            disable: function () {
                document.disableAllFilters();
            },
            enable: function () {
                document.enableAllFilters();
            }
        },
        properties: {
            set alpha(opacity) {
                document.setInstanceAlpha(opacity);
            },
            set blendMode(mode) {
                document.setBlendMode(mode);
            },
            get blendMode() {
                return document.getBlendMode();
            },
            set brightness(brightness) {
                document.setInstanceBrightness(brightness);
            },
            setProperty: function (property, value) {
                document.setElementProperty(property, value);
            },
            getProperty: function (propertyName) {
                return document.getElementProperty(propertyName);
            },
            resetTransform: function () {
                document.resetTransformation();
            },
            setTint: function (color, strength) {
                document.setInstanceTint(color, strength);
            },
            unlock: function () {
                document.unlockAllElements();
            }
        },
        text: {
            setAttributes: function (attrName, attrValue, startIndex, endIndex) {
                document.setElementTextAttr(attrName, attrValue, startIndex, endIndex);
            },
            getAttributes: function (attrName, startIndex, endIndex) {
                return document.getElementTextAttr(attrName, startIndex, endIndex);
            },
            set rectangle(boundingRectangle) {
                document.setTextRectangle(boundingRectangle);
            },
            setSelection: function (startIndex, endIndex) {
                document.setTextSelection(startIndex, endIndex);
            },
            setString: function (text, startIndex, endIndex) {
                document.setTextString(text, startIndex, endIndex);
            },
            getString: function (startIndex, endIndex) {
                return document.getTextString(startIndex, endIndex);
            }
        }
    },
    file: {
        properties: {
            get name() {
                return document.name;
            },
            set name(value) {
                document.name = value;
            },
            get path() {
                return document.path;
            },
            set path(value) {
                document.path = value;
            },
            get uri() {
                return document.pathURI;
            },
            set uri(value) {
                document.pathURI = value;
            }
        },
        operations: {
            close: function (bPromptToSaveChanges) {
                document.close(bPromptToSaveChanges);
            },
            revert: function () {
                document.revert();
            },
            revertToLastVersion: function () {
                return document.revertToLastVersion();
            },
            save: function (bOkToSaveAs) {
                return document.save(bOkToSaveAs);
            },
            saveAndCompact: function (bOkToSaveAs) {
                return document.saveAndCompact(bOkToSaveAs);
            },
            saveAVersion: function () {
                return document.saveAVersion();
            },
            synchronizeWithHeadVersion: function () {
                return document.synchronizeWithHeadVersion();
            }
        },
        imports: {
            file: function (fileURI, importToLibrary) {
                document.importFile(fileURI, importToLibrary);
            },
            swf: function (fileURI) {
                document.importSWF(fileURI);
            }
        },
        exports: {
            png: function (fileURI, bCurrentPNGSettings, bCurrentFrame) {
                return document.exportPNG(fileURI, bCurrentPNGSettings, bCurrentFrame);
            },
            swf: function (fileURI, bCurrentSettings) {
                document.exportSWF(fileURI, bCurrentSettings);
            }
        },
        can: {
            revert: function () {
                return document.canRevert();
            },
            saveAVersion: function () {
                return document.canSaveAVersion();
            },
            testMovie: function () {
                return document.canTestMovie();
            },
            testScene: function () {
                return document.canTestScene();
            }
        },
        test: {
            movie: function () {
                document.testMovie();
            },
            scene: function () {
                document.testScene();
            }
        },
        publish: function () {
            document.publish();
        }
    },
    operations: {
        clipboard: {
            copy: function () {
                document.clipCopy();
            },
            cut: function () {
                document.clipCut();
            },
            paste: function (bInPlace) {
                document.clipPaste(bInPlace);
            }
        },
        mouse: {
            click: function (position, bToggleSel, bShiftSel) {
                document.mouseClick(position, bToggleSel, bShiftSel);
            },
            dblClk: function (position, bAltDown, bShiftDown, bShiftSelect) {
                document.mouseDblClk(position, bAltDown, bShiftDown, bShiftSelect);
            }
        },
        tools: {
            resetOval: function () {
                document.resetOvalObject();
            },
            resetRectangle: function () {
                document.resetRectangleObject();
            },
            setOvalProperty: function (propertyName, value) {
                document.setOvalObjectProperty(propertyName, value);
            },
            setRectangleProperty: function (propertyName, value) {
                document.setRectangleObjectProperty(propertyName, value);
            }
        }
    },
    selection: {
        get elements() {
            return document.selection;
        },
        set elements(value) {
            document.selection = value;
        },
        arrange: {
            align: function (alignmode, bUseDocumentBounds) {
                document.align(alignmode, bUseDocumentBounds);
            },
            arrange: function (arrangeMode) {
                document.arrange(arrangeMode);
            },
            distribute: function (distributemode, bUseDocumentBounds) {
                document.distribute(distributemode, bUseDocumentBounds);
            },
            match: function (bWidth, bHeight, bUseDocumentBounds) {
                document.match(bWidth, bHeight, bUseDocumentBounds);
            },
            space: function (direction, bUseDocumentBounds) {
                document.space(direction, bUseDocumentBounds);
            },
            set toDocument(bToStage) {
                document.setAlignToDocument(bToStage);
            },
            get toDocument() {
                return document.getAlignToDocument();
            }
        },
        setData: function (name, type, data) {
            document.addDataToSelection(name, type, data);
        },
        edit: {
            breakApart: function () {
                document.breakApart();
            },
            canEditSymbol: function () {
                return document.canEditSymbol();
            },
            convertLinesToFills: function () {
                document.convertLinesToFills();
            },
            convertToSymbol: function (type, name, registrationPoint) {
                return document.convertToSymbol(type, name, registrationPoint);
            },
            remove: function () {
                document.deleteSelection();
            },
            distributeToLayers: function () {
                document.distributeToLayers();
            },
            duplicate: function () {
                document.duplicateSelection();
            },
            enter: function (newWindow) {
                fl.getDocumentDOM().enterEditMode(newWindow ? 'newWindow' : 'inPlace');
            },
            exit: function () {
                fl.getDocumentDOM().exitEditMode();
            },
            group: function () {
                document.group();
            },
            swapElement: function (name) {
                document.swapElement(name);
            },
            traceBitmap: function (threshold, minimumArea, curveFit, cornerThreshold) {
                document.traceBitmap(threshold, minimumArea, curveFit, cornerThreshold);
            },
            unGroup: function () {
                document.unGroup();
            }
        },
        select: {
            all: function () {
                document.selectAll();
            },
            none: function () {
                document.selectNone();
            }
        },
        transform: {
            setBounds: function (boundingRectangle, bContactSensitiveSelection) {
                document.setSelectionBounds(boundingRectangle, bContactSensitiveSelection);
            },
            set center(transformationPoint) {
                document.setTransformationPoint(transformationPoint);
            },
            get center() {
                return document.getTransformationPoint();
            },
            moveBy: function (distanceToMove) {
                document.moveSelectionBy(distanceToMove);
            },
            setRect: function (rect, bReplaceCurrentSelection, bContactSensitiveSelection) {
                document.setSelectionRect(rect, bReplaceCurrentSelection, bContactSensitiveSelection);
            },
            getRect: function () {
                return document.getSelectionRect();
            },
            rotate: function (angle, rotationPoint) {
                document.rotateSelection(angle, rotationPoint);
            },
            scale: function (xScale, yScale, whichCorner) {
                document.scaleSelection(xScale, yScale, whichCorner);
            },
            skew: function (xSkew, ySkew, whichEdge) {
                document.skewSelection(xSkew, ySkew, whichEdge);
            },
            transform: function (a, b, c, d) {
                document.transformSelection(a, b, c, d);
            }
        },
        transform3D: {
            rotate: function (xyzCoordinate, bGlobalTransform) {
                document.rotate3DSelection(xyzCoordinate, bGlobalTransform);
            },
            translateCenter: function (xyzCoordinate) {
                document.translate3DCenter(xyzCoordinate);
            },
            translate: function (xyzCoordinate, bGlobalTransform) {
                document.translate3DSelection(xyzCoordinate, bGlobalTransform);
            }
        }
    },
    settings: {
        as3: {
            get autoDeclare() {
                return document.as3AutoDeclare;
            },
            set autoDeclare(value) {
                document.as3AutoDeclare = value;
            },
            get dialect() {
                return document.as3Dialect;
            },
            set dialect(value) {
                document.as3Dialect = value;
            },
            get docClass() {
                return document.docClass;
            },
            set docClass(value) {
                document.docClass = value;
            },
            get exportFrame() {
                return document.as3ExportFrame;
            },
            set exportFrame(value) {
                document.as3ExportFrame = value;
            },
            get externalLibraryPath() {
                return document.externalLibraryPath;
            },
            set externalLibraryPath(value) {
                document.externalLibraryPath = value;
            },
            get libraryPath() {
                return document.libraryPath;
            },
            set libraryPath(value) {
                document.libraryPath = value;
            },
            get sourcePath() {
                return document.sourcePath;
            },
            set sourcePath(value) {
                document.sourcePath = value;
            },
            get strictMode() {
                return document.as3StrictMode;
            },
            set strictMode(value) {
                document.as3StrictMode = value;
            },
            get version() {
                return document.asVersion;
            },
            set version(value) {
                document.asVersion = value;
            },
            get warningsMode() {
                return document.as3WarningsMode;
            },
            set warningsMode(value) {
                document.as3WarningsMode = value;
            }
        },
        set mobile(xmlString) {
            document.setMobileSettings(xmlString);
        },
        get mobile() {
            return document.getMobileSettings();
        },
        set playerVersion(version) {
            document.setPlayerVersion(version);
        },
        get playerVersion() {
            return document.getPlayerVersion();
        },
        publishProfile: {
            get current() {
                return document.currentPublishProfile;
            },
            set current(value) {
                document.currentPublishProfile = value;
            },
            get all() {
                return document.publishProfiles;
            },
            set all(value) {
                document.publishProfiles = value;
            },
            add: function (profileName) {
                return document.addNewPublishProfile(profileName);
            },
            remove: function () {
                return document.deletePublishProfile();
            },
            rename: function (profileNewName) {
                return document.renamePublishProfile(profileNewName);
            },
            duplicate: function (profileName) {
                return document.duplicatePublishProfile(profileName);
            },
            importProfile: function (fileURI) {
                return document.importPublishProfile(fileURI);
            },
            importString: function (xmlString) {
                return document.importPublishProfileString(xmlString);
            },
            exportProfile: function (fileURI) {
                document.exportPublishProfile(fileURI);
            },
            exportString: function (profileName) {
                return document.exportPublishProfileString(profileName);
            }
        }
    },
    shapes: {
        outlines: {
            moveSelectedPointsBy: function (delta) {
                document.moveSelectedBezierPointsBy(delta);
            },
            optimize: function (smoothing, bUseMultiplePasses) {
                document.optimizeCurves(smoothing, bUseMultiplePasses);
            },
            smooth: function () {
                document.smoothSelection();
            },
            straighten: function () {
                document.straightenSelection();
            }
        },
        operations: {
            crop: function () {
                return document.crop();
            },
            deleteEnvelope: function () {
                return document.deleteEnvelope();
            },
            intersect: function () {
                return document.intersect();
            },
            punch: function () {
                return document.punch();
            },
            union: function () {
                return document.union();
            }
        }
    },
    toString: function () {
        return '[class Superdoc]';
    }
};

// EXTERNAL MODULE: external "chroma-js"
var external_chroma_js_ = __webpack_require__(534);
var external_chroma_js_default = /*#__PURE__*/__webpack_require__.n(external_chroma_js_);
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


;// ./src/stroke/base/BaseStrokeBuilder.ts
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


var BaseStrokeBuilder = (function (_super) {
    __extends(BaseStrokeBuilder, _super);
    function BaseStrokeBuilder(stroke) {
        var _this = _super.call(this) || this;
        _this.stroke = stroke;
        return _this;
    }
    BaseStrokeBuilder.prototype.setBreakAtCorners = function (breakAtCorners) {
        this.stroke.breakAtCorners = breakAtCorners;
        return this;
    };
    BaseStrokeBuilder.prototype.setCapType = function (capType) {
        this.stroke.capType = capType;
        return this;
    };
    BaseStrokeBuilder.prototype.setStrokeHinting = function (strokeHinting) {
        this.stroke.strokeHinting = strokeHinting;
        return this;
    };
    BaseStrokeBuilder.prototype.setStyle = function (style) {
        this.stroke.style = style;
        this.stroke.shapeFill.style = style;
        return this;
    };
    BaseStrokeBuilder.prototype.setThickness = function (thickness) {
        this.stroke.thickness = thickness;
        return this;
    };
    BaseStrokeBuilder.prototype.setColor = function (color) {
        var hexColor = external_chroma_js_default()(color).hex();
        this.stroke.color = hexColor;
        this.stroke.shapeFill.color = hexColor;
        return this;
    };
    BaseStrokeBuilder.prototype.setAlpha = function (alpha) {
        var color = external_chroma_js_default()(this.stroke.color).alpha(alpha).hex();
        this.stroke.color = color;
        this.stroke.shapeFill.color = color;
        return this;
    };
    BaseStrokeBuilder.prototype.setShapeFill = function (shapeFill) {
        this.stroke.shapeFill = shapeFill;
        return this;
    };
    BaseStrokeBuilder.prototype.setScaleType = function (scaleType) {
        this.stroke.scaleType = scaleType;
        return this;
    };
    BaseStrokeBuilder.prototype.setJoinType = function (joinType) {
        this.stroke.joinType = joinType;
        return this;
    };
    BaseStrokeBuilder.prototype.setMiterLimit = function (miterLimit) {
        this.stroke.miterLimit = miterLimit;
        return this;
    };
    BaseStrokeBuilder.prototype.build = function () {
        return this.stroke;
    };
    return BaseStrokeBuilder;
}(SObject));


;// ./src/stroke/base/BaseStroke.ts
var BaseStroke_extends = (undefined && undefined.__extends) || (function () {
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

var BaseStroke = (function (_super) {
    BaseStroke_extends(BaseStroke, _super);
    function BaseStroke(style) {
        var _this = _super.call(this) || this;
        _this.breakAtCorners = false;
        _this.capType = 'none';
        _this.strokeHinting = false;
        _this.thickness = 1;
        _this.color = '#000000';
        _this.scaleType = 'normal';
        _this.joinType = 'miter';
        _this.miterLimit = 4;
        _this.style = style || 'solid';
        _this.shapeFill = {
            tag: 0,
            color: '#000000',
            style: style || 'solid',
            matrix: {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                tx: 0,
                ty: 0
            }
        };
        return _this;
    }
    BaseStroke.fromProps = function (props) {
        var stroke = new BaseStroke(props.style);
        Object.assign(stroke, props);
        return stroke;
    };
    return BaseStroke;
}(SObject));


;// ./src/stroke/strokes/NoStroke.ts
var NoStroke_extends = (undefined && undefined.__extends) || (function () {
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

var NoStroke = (function (_super) {
    NoStroke_extends(NoStroke, _super);
    function NoStroke() {
        return _super.call(this, 'noStroke') || this;
    }
    return NoStroke;
}(BaseStroke));


;// ./src/stroke/builders/NoStrokeBuilder.ts
var NoStrokeBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var NoStrokeBuilder = (function (_super) {
    NoStrokeBuilder_extends(NoStrokeBuilder, _super);
    function NoStrokeBuilder() {
        return _super.call(this, new NoStroke()) || this;
    }
    return NoStrokeBuilder;
}(BaseStrokeBuilder));


;// ./src/stroke/strokes/SolidStroke.ts
var SolidStroke_extends = (undefined && undefined.__extends) || (function () {
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

var SolidStroke = (function (_super) {
    SolidStroke_extends(SolidStroke, _super);
    function SolidStroke() {
        return _super.call(this, 'solid') || this;
    }
    return SolidStroke;
}(BaseStroke));


;// ./src/stroke/builders/SolidStrokeBuilder.ts
var SolidStrokeBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var SolidStrokeBuilder = (function (_super) {
    SolidStrokeBuilder_extends(SolidStrokeBuilder, _super);
    function SolidStrokeBuilder() {
        return _super.call(this, new SolidStroke()) || this;
    }
    return SolidStrokeBuilder;
}(BaseStrokeBuilder));


;// ./src/stroke/strokes/DashedStroke.ts
var DashedStroke_extends = (undefined && undefined.__extends) || (function () {
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

var DashedStroke = (function (_super) {
    DashedStroke_extends(DashedStroke, _super);
    function DashedStroke() {
        var _this = _super.call(this, 'dashed') || this;
        _this.dash1 = 1;
        _this.dash2 = 1;
        return _this;
    }
    return DashedStroke;
}(BaseStroke));


;// ./src/stroke/builders/DashedStrokeBuilder.ts
var DashedStrokeBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var DashedStrokeBuilder = (function (_super) {
    DashedStrokeBuilder_extends(DashedStrokeBuilder, _super);
    function DashedStrokeBuilder() {
        return _super.call(this, new DashedStroke()) || this;
    }
    DashedStrokeBuilder.prototype.setDash1 = function (dash1) {
        this.stroke.dash1 = dash1;
        return this;
    };
    DashedStrokeBuilder.prototype.setDash2 = function (dash2) {
        this.stroke.dash2 = dash2;
        return this;
    };
    return DashedStrokeBuilder;
}(BaseStrokeBuilder));


;// ./src/stroke/strokes/DottedStroke.ts
var DottedStroke_extends = (undefined && undefined.__extends) || (function () {
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

var DottedStroke = (function (_super) {
    DottedStroke_extends(DottedStroke, _super);
    function DottedStroke() {
        var _this = _super.call(this, 'dotted') || this;
        _this.dotSpace = 1;
        return _this;
    }
    return DottedStroke;
}(BaseStroke));


;// ./src/stroke/builders/DottedStrokeBuilder.ts
var DottedStrokeBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var DottedStrokeBuilder = (function (_super) {
    DottedStrokeBuilder_extends(DottedStrokeBuilder, _super);
    function DottedStrokeBuilder() {
        return _super.call(this, new DottedStroke()) || this;
    }
    DottedStrokeBuilder.prototype.setDotSpace = function (dotSpace) {
        this.stroke.dotSpace = dotSpace;
        return this;
    };
    return DottedStrokeBuilder;
}(BaseStrokeBuilder));


;// ./src/stroke/strokes/RaggedStroke.ts
var RaggedStroke_extends = (undefined && undefined.__extends) || (function () {
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

var RaggedStroke = (function (_super) {
    RaggedStroke_extends(RaggedStroke, _super);
    function RaggedStroke() {
        var _this = _super.call(this, 'ragged') || this;
        _this.pattern = 'solid';
        _this.waveHeight = 'flat';
        _this.waveLength = 'short';
        return _this;
    }
    return RaggedStroke;
}(BaseStroke));


;// ./src/stroke/builders/RaggedStrokeBuilder.ts
var RaggedStrokeBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var RaggedStrokeBuilder = (function (_super) {
    RaggedStrokeBuilder_extends(RaggedStrokeBuilder, _super);
    function RaggedStrokeBuilder() {
        return _super.call(this, new RaggedStroke()) || this;
    }
    RaggedStrokeBuilder.prototype.setPattern = function (pattern) {
        this.stroke.pattern = pattern;
        return this;
    };
    RaggedStrokeBuilder.prototype.setWaveHeight = function (waveHeight) {
        this.stroke.waveHeight = waveHeight;
        return this;
    };
    RaggedStrokeBuilder.prototype.setWaveLength = function (waveLength) {
        this.stroke.waveLength = waveLength;
        return this;
    };
    return RaggedStrokeBuilder;
}(BaseStrokeBuilder));


;// ./src/stroke/strokes/StippleStroke.ts
var StippleStroke_extends = (undefined && undefined.__extends) || (function () {
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

var StippleStroke = (function (_super) {
    StippleStroke_extends(StippleStroke, _super);
    function StippleStroke() {
        var _this = _super.call(this, 'stipple') || this;
        _this.dotSize = 'tiny';
        _this.variation = 'one size';
        _this.density = 'dense';
        return _this;
    }
    return StippleStroke;
}(BaseStroke));


;// ./src/stroke/builders/StippleStrokeBuilder.ts
var StippleStrokeBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var StippleStrokeBuilder = (function (_super) {
    StippleStrokeBuilder_extends(StippleStrokeBuilder, _super);
    function StippleStrokeBuilder() {
        return _super.call(this, new StippleStroke()) || this;
    }
    StippleStrokeBuilder.prototype.setDotSize = function (dotSize) {
        this.stroke.dotSize = dotSize;
        return this;
    };
    StippleStrokeBuilder.prototype.setVariation = function (variation) {
        this.stroke.variation = variation;
        return this;
    };
    StippleStrokeBuilder.prototype.setDenensity = function (density) {
        this.stroke.density = density;
        return this;
    };
    return StippleStrokeBuilder;
}(BaseStrokeBuilder));


;// ./src/stroke/strokes/HatchedStroke.ts
var HatchedStroke_extends = (undefined && undefined.__extends) || (function () {
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

var HatchedStroke = (function (_super) {
    HatchedStroke_extends(HatchedStroke, _super);
    function HatchedStroke() {
        var _this = _super.call(this, 'hatched') || this;
        _this.curve = 'straight';
        _this.hatchThickness = 'thin';
        _this.jiggle = 'none';
        _this.rotate = 'none';
        _this.length = 'equal';
        _this.space = 'close';
        return _this;
    }
    return HatchedStroke;
}(BaseStroke));


;// ./src/stroke/builders/HatchedStrokeBuilder.ts
var HatchedStrokeBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var HatchedStrokeBuilder = (function (_super) {
    HatchedStrokeBuilder_extends(HatchedStrokeBuilder, _super);
    function HatchedStrokeBuilder() {
        return _super.call(this, new HatchedStroke()) || this;
    }
    HatchedStrokeBuilder.prototype.setCurve = function (curve) {
        this.stroke.curve = curve;
        return this;
    };
    HatchedStrokeBuilder.prototype.setHatchThickness = function (hatchThickness) {
        this.stroke.hatchThickness = hatchThickness;
        return this;
    };
    HatchedStrokeBuilder.prototype.setJiggle = function (jiggle) {
        this.stroke.jiggle = jiggle;
        return this;
    };
    HatchedStrokeBuilder.prototype.setRotate = function (rotate) {
        this.stroke.rotate = rotate;
        return this;
    };
    HatchedStrokeBuilder.prototype.setLength = function (length) {
        this.stroke.length = length;
        return this;
    };
    HatchedStrokeBuilder.prototype.setSpace = function (space) {
        this.stroke.space = space;
        return this;
    };
    return HatchedStrokeBuilder;
}(BaseStrokeBuilder));


;// ./src/stroke/builders/index.ts








;// ./src/stroke/strokes/index.ts








;// ./src/stroke/index.ts



var STROKES_MAP = {
    NoStroke: NoStroke,
    SolidStroke: SolidStroke,
    DashedStroke: DashedStroke,
    DottedStroke: DottedStroke,
    RaggedStroke: RaggedStroke,
    StippleStroke: StippleStroke,
    HatchedStroke: HatchedStroke
};
var STROKE_BUILDERS_MAP = {
    NoStrokeBuilder: NoStrokeBuilder,
    SolidStrokeBuilder: SolidStrokeBuilder,
    DashedStrokeBuilder: DashedStrokeBuilder,
    DottedStrokeBuilder: DottedStrokeBuilder,
    RaggedStrokeBuilder: RaggedStrokeBuilder,
    StippleStrokeBuilder: StippleStrokeBuilder,
    HatchedStrokeBuilder: HatchedStrokeBuilder
};
var STROKES = {
    get NoStroke() {
        return NoStroke;
    },
    get SolidStroke() {
        return SolidStroke;
    },
    get DashedStroke() {
        return DashedStroke;
    },
    get DottedStroke() {
        return DottedStroke;
    },
    get RaggedStroke() {
        return RaggedStroke;
    },
    get StippleStroke() {
        return StippleStroke;
    },
    get HatchedStroke() {
        return HatchedStroke;
    },
    get: function (type) {
        return STROKES_MAP[type];
    }
};
var STROKE_BUILDERS = {
    get NoStrokeBuilder() {
        return NoStrokeBuilder;
    },
    get SolidStrokeBuilder() {
        return SolidStrokeBuilder;
    },
    get DashedStrokeBuilder() {
        return DashedStrokeBuilder;
    },
    get DottedStrokeBuilder() {
        return DottedStrokeBuilder;
    },
    get RaggedStrokeBuilder() {
        return RaggedStrokeBuilder;
    },
    get StippleStrokeBuilder() {
        return StippleStrokeBuilder;
    },
    get HatchedStrokeBuilder() {
        return HatchedStrokeBuilder;
    },
    get: function (type) {
        return STROKE_BUILDERS_MAP[type];
    }
};
function createStroke(type, config) {
    var StrokeClass = STROKES_MAP[type];
    if (!StrokeClass) {
        throw new Error("Unknown stroke type: ".concat(type));
    }
    var stroke = new StrokeClass();
    if (config) {
        Object.assign(stroke, config);
    }
    return stroke;
}
function createStrokeBuilder(type) {
    var BuilderClass = STROKE_BUILDERS_MAP[type];
    if (!BuilderClass) {
        throw new Error("Unknown stroke builder type: ".concat(type));
    }
    return new BuilderClass();
}

;// ./src/fill/base/BaseFill.ts
var BaseFill_extends = (undefined && undefined.__extends) || (function () {
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

var BaseFill = (function (_super) {
    BaseFill_extends(BaseFill, _super);
    function BaseFill(style) {
        var _this = _super.call(this) || this;
        _this.style = style;
        return _this;
    }
    BaseFill.fromProps = function (props) {
        throw new Error('Method must be implemented by subclass');
    };
    return BaseFill;
}(SObject));


;// ./src/fill/fills/NoFill.ts
var NoFill_extends = (undefined && undefined.__extends) || (function () {
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

var NoFill = (function (_super) {
    NoFill_extends(NoFill, _super);
    function NoFill() {
        return _super.call(this, 'noFill') || this;
    }
    return NoFill;
}(BaseFill));


;// ./src/fill/fills/SolidFill.ts
var SolidFill_extends = (undefined && undefined.__extends) || (function () {
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

var SolidFill = (function (_super) {
    SolidFill_extends(SolidFill, _super);
    function SolidFill() {
        var _this = _super.call(this, 'solid') || this;
        _this.color = '#000000';
        return _this;
    }
    return SolidFill;
}(BaseFill));


;// ./src/fill/fills/LinearGradientFill.ts
var LinearGradientFill_extends = (undefined && undefined.__extends) || (function () {
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

var LinearGradientFill = (function (_super) {
    LinearGradientFill_extends(LinearGradientFill, _super);
    function LinearGradientFill() {
        var _this = _super.call(this, 'linearGradient') || this;
        _this.colorArray = [];
        _this.posArray = [];
        _this.matrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: 0,
            ty: 0
        };
        _this.linearRGB = false;
        _this.overflow = 'extend';
        return _this;
    }
    LinearGradientFill.prototype.toString = function () {
        return '[class LinearGradientFill]';
    };
    return LinearGradientFill;
}(BaseFill));


;// ./src/fill/fills/RadialGradientFill.ts
var RadialGradientFill_extends = (undefined && undefined.__extends) || (function () {
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

var RadialGradientFill = (function (_super) {
    RadialGradientFill_extends(RadialGradientFill, _super);
    function RadialGradientFill() {
        var _this = _super.call(this, 'radialGradient') || this;
        _this.colorArray = [];
        _this.posArray = [];
        _this.matrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: 0,
            ty: 0
        };
        _this.focalPoint = 0;
        _this.linearRGB = false;
        _this.overflow = 'extend';
        return _this;
    }
    RadialGradientFill.prototype.toString = function () {
        return '[class RadialGradientFill]';
    };
    return RadialGradientFill;
}(BaseFill));


;// ./src/fill/fills/BitmapFill.ts
var BitmapFill_extends = (undefined && undefined.__extends) || (function () {
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

var BitmapFill = (function (_super) {
    BitmapFill_extends(BitmapFill, _super);
    function BitmapFill() {
        var _this = _super.call(this, 'bitmap') || this;
        _this.bitmapPath = '';
        _this.bitmapIsClipped = false;
        return _this;
    }
    BitmapFill.prototype.toString = function () {
        return '[class BitmapFill]';
    };
    return BitmapFill;
}(BaseFill));


;// ./src/fill/fills/index.ts






;// ./src/fill/base/BaseFillBuilder.ts
var BaseFillBuilder_extends = (undefined && undefined.__extends) || (function () {
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

var BaseFillBuilder = (function (_super) {
    BaseFillBuilder_extends(BaseFillBuilder, _super);
    function BaseFillBuilder(fill) {
        var _this = _super.call(this) || this;
        _this.fill = fill;
        return _this;
    }
    BaseFillBuilder.prototype.setStyle = function (style) {
        this.fill.style = style;
        return this;
    };
    BaseFillBuilder.prototype.build = function () {
        return this.fill;
    };
    return BaseFillBuilder;
}(SObject));


;// ./src/fill/builders/SolidFillBuilder.ts
var SolidFillBuilder_extends = (undefined && undefined.__extends) || (function () {
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



var SolidFillBuilder = (function (_super) {
    SolidFillBuilder_extends(SolidFillBuilder, _super);
    function SolidFillBuilder() {
        return _super.call(this, new SolidFill()) || this;
    }
    SolidFillBuilder.prototype.setColor = function (color) {
        try {
            var hexColor = external_chroma_js_default()(color).hex();
            this.fill.color = hexColor;
        }
        catch (error) {
            this.fill.color = color.toString();
        }
        return this;
    };
    SolidFillBuilder.prototype.setAlpha = function (alpha) {
        try {
            this.fill.color = external_chroma_js_default()(this.fill.color).alpha(alpha).hex();
        }
        catch (error) {
        }
        return this;
    };
    return SolidFillBuilder;
}(BaseFillBuilder));


;// ./src/fill/builders/LinearGradientFillBuilder.ts
var LinearGradientFillBuilder_extends = (undefined && undefined.__extends) || (function () {
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var LinearGradientFillBuilder = (function (_super) {
    LinearGradientFillBuilder_extends(LinearGradientFillBuilder, _super);
    function LinearGradientFillBuilder() {
        return _super.call(this, new LinearGradientFill()) || this;
    }
    LinearGradientFillBuilder.prototype.addColorStop = function (pos, color) {
        try {
            var hexColor = external_chroma_js_default()(color).hex();
            this.fill.colorArray.push(hexColor);
        }
        catch (error) {
            this.fill.colorArray.push(color);
        }
        this.fill.posArray.push(pos);
        return this;
    };
    LinearGradientFillBuilder.prototype.setMatrix = function (a, b, c, d, tx, ty) {
        this.fill.matrix = { a: a, b: b, c: c, d: d, tx: tx, ty: ty };
        return this;
    };
    LinearGradientFillBuilder.prototype.setMatrixObject = function (matrix) {
        this.fill.matrix = __assign({}, matrix);
        return this;
    };
    LinearGradientFillBuilder.prototype.setLinearRGB = function (linearRGB) {
        this.fill.linearRGB = linearRGB;
        return this;
    };
    LinearGradientFillBuilder.prototype.setOverflow = function (overflow) {
        this.fill.overflow = overflow;
        return this;
    };
    return LinearGradientFillBuilder;
}(BaseFillBuilder));


;// ./src/fill/builders/RadialGradientFillBuilder.ts
var RadialGradientFillBuilder_extends = (undefined && undefined.__extends) || (function () {
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
var RadialGradientFillBuilder_assign = (undefined && undefined.__assign) || function () {
    RadialGradientFillBuilder_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return RadialGradientFillBuilder_assign.apply(this, arguments);
};



var RadialGradientFillBuilder = (function (_super) {
    RadialGradientFillBuilder_extends(RadialGradientFillBuilder, _super);
    function RadialGradientFillBuilder() {
        return _super.call(this, new RadialGradientFill()) || this;
    }
    RadialGradientFillBuilder.prototype.addColorStop = function (pos, color) {
        try {
            var hexColor = external_chroma_js_default()(color).hex();
            this.fill.colorArray.push(hexColor);
        }
        catch (error) {
            this.fill.colorArray.push(color);
        }
        this.fill.posArray.push(pos);
        return this;
    };
    RadialGradientFillBuilder.prototype.setMatrix = function (a, b, c, d, tx, ty) {
        this.fill.matrix = { a: a, b: b, c: c, d: d, tx: tx, ty: ty };
        return this;
    };
    RadialGradientFillBuilder.prototype.setMatrixObject = function (matrix) {
        this.fill.matrix = RadialGradientFillBuilder_assign({}, matrix);
        return this;
    };
    RadialGradientFillBuilder.prototype.setFocalPoint = function (focalPoint) {
        this.fill.focalPoint = focalPoint;
        return this;
    };
    RadialGradientFillBuilder.prototype.setLinearRGB = function (linearRGB) {
        this.fill.linearRGB = linearRGB;
        return this;
    };
    RadialGradientFillBuilder.prototype.setOverflow = function (overflow) {
        this.fill.overflow = overflow;
        return this;
    };
    return RadialGradientFillBuilder;
}(BaseFillBuilder));


;// ./src/fill/builders/BitmapFillBuilder.ts
var BitmapFillBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var BitmapFillBuilder = (function (_super) {
    BitmapFillBuilder_extends(BitmapFillBuilder, _super);
    function BitmapFillBuilder() {
        return _super.call(this, new BitmapFill()) || this;
    }
    BitmapFillBuilder.prototype.setBitmap = function (bitmapPath) {
        this.fill.bitmapPath = bitmapPath;
        return this;
    };
    BitmapFillBuilder.prototype.setBitmapIsClipped = function (bitmapIsClipped) {
        this.fill.bitmapIsClipped = bitmapIsClipped;
        return this;
    };
    return BitmapFillBuilder;
}(BaseFillBuilder));


;// ./src/fill/builders/index.ts





;// ./src/fill/index.ts



var FILLS_MAP = {
    NoFill: NoFill,
    SolidFill: SolidFill,
    LinearGradientFill: LinearGradientFill,
    RadialGradientFill: RadialGradientFill,
    BitmapFill: BitmapFill
};
var FILL_BUILDERS_MAP = {
    SolidFillBuilder: SolidFillBuilder,
    LinearGradientFillBuilder: LinearGradientFillBuilder,
    RadialGradientFillBuilder: RadialGradientFillBuilder,
    BitmapFillBuilder: BitmapFillBuilder
};
var FILLS = {
    get NoFill() {
        return NoFill;
    },
    get SolidFill() {
        return SolidFill;
    },
    get LinearGradientFill() {
        return LinearGradientFill;
    },
    get RadialGradientFill() {
        return RadialGradientFill;
    },
    get BitmapFill() {
        return BitmapFill;
    },
    get: function (type) {
        return FILLS_MAP[type];
    }
};
var FILL_BUILDERS = {
    get SolidFillBuilder() {
        return SolidFillBuilder;
    },
    get LinearGradientFillBuilder() {
        return LinearGradientFillBuilder;
    },
    get RadialGradientFillBuilder() {
        return RadialGradientFillBuilder;
    },
    get BitmapFillBuilder() {
        return BitmapFillBuilder;
    },
    get: function (type) {
        return FILL_BUILDERS_MAP[type];
    }
};
function createFill(type, config) {
    var FillClass = FILLS_MAP[type];
    if (!FillClass) {
        throw new Error("Unknown fill type: ".concat(type));
    }
    var fill = new FillClass();
    if (config) {
        Object.assign(fill, config);
    }
    return fill;
}
function createFillBuilder(type) {
    var BuilderClass = FILL_BUILDERS_MAP[type];
    if (!BuilderClass) {
        throw new Error("Unknown fill builder type: ".concat(type));
    }
    return new BuilderClass();
}

;// ./src/color-transform/base/BaseColorTransform.ts
var BaseColorTransform_extends = (undefined && undefined.__extends) || (function () {
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

var BaseColorTransform = (function (_super) {
    BaseColorTransform_extends(BaseColorTransform, _super);
    function BaseColorTransform(mode) {
        var _this = _super.call(this) || this;
        _this.mode = mode;
        return _this;
    }
    return BaseColorTransform;
}(SObject));


;// ./src/color-transform/transforms/NoneColorTransform.ts
var NoneColorTransform_extends = (undefined && undefined.__extends) || (function () {
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

var NoneColorTransform = (function (_super) {
    NoneColorTransform_extends(NoneColorTransform, _super);
    function NoneColorTransform() {
        var _this = _super.call(this, 'none') || this;
        _this.mode = 'none';
        _this.colorAlphaAmount = 0;
        _this.colorAlphaPercent = 100;
        _this.colorRedAmount = 0;
        _this.colorRedPercent = 100;
        _this.colorGreenAmount = 0;
        _this.colorGreenPercent = 100;
        _this.colorBlueAmount = 0;
        _this.colorBluePercent = 100;
        return _this;
    }
    return NoneColorTransform;
}(BaseColorTransform));


;// ./src/color-transform/transforms/BrightnessColorTransform.ts
var BrightnessColorTransform_extends = (undefined && undefined.__extends) || (function () {
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

var BrightnessColorTransform = (function (_super) {
    BrightnessColorTransform_extends(BrightnessColorTransform, _super);
    function BrightnessColorTransform() {
        var _this = _super.call(this, 'brightness') || this;
        _this.mode = 'brightness';
        _this.brightnessPercent = 0;
        return _this;
    }
    return BrightnessColorTransform;
}(BaseColorTransform));


;// ./src/color-transform/transforms/TintColorTransform.ts
var TintColorTransform_extends = (undefined && undefined.__extends) || (function () {
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

var TintColorTransform = (function (_super) {
    TintColorTransform_extends(TintColorTransform, _super);
    function TintColorTransform() {
        var _this = _super.call(this, 'tint') || this;
        _this.mode = 'tint';
        _this.tintPercent = 0;
        _this.tintRed = 0;
        _this.tintGreen = 0;
        _this.tintBlue = 0;
        return _this;
    }
    return TintColorTransform;
}(BaseColorTransform));


;// ./src/color-transform/transforms/AdvancedColorTransform.ts
var AdvancedColorTransform_extends = (undefined && undefined.__extends) || (function () {
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

var AdvancedColorTransform = (function (_super) {
    AdvancedColorTransform_extends(AdvancedColorTransform, _super);
    function AdvancedColorTransform() {
        var _this = _super.call(this, 'advanced') || this;
        _this.mode = 'advanced';
        _this.colorAlphaAmount = 0;
        _this.colorAlphaPercent = 100;
        _this.colorRedAmount = 0;
        _this.colorRedPercent = 100;
        _this.colorGreenAmount = 0;
        _this.colorGreenPercent = 100;
        _this.colorBlueAmount = 0;
        _this.colorBluePercent = 100;
        return _this;
    }
    return AdvancedColorTransform;
}(BaseColorTransform));


;// ./src/color-transform/transforms/AlphaColorTransform.ts
var AlphaColorTransform_extends = (undefined && undefined.__extends) || (function () {
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

var AlphaColorTransform = (function (_super) {
    AlphaColorTransform_extends(AlphaColorTransform, _super);
    function AlphaColorTransform() {
        var _this = _super.call(this, 'alpha') || this;
        _this.mode = 'alpha';
        _this.alphaPercent = 100;
        return _this;
    }
    return AlphaColorTransform;
}(BaseColorTransform));


;// ./src/color-transform/base/BaseColorTransformBuilder.ts
var BaseColorTransformBuilder_extends = (undefined && undefined.__extends) || (function () {
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

var BaseColorTransformBuilder = (function (_super) {
    BaseColorTransformBuilder_extends(BaseColorTransformBuilder, _super);
    function BaseColorTransformBuilder(colorTransform) {
        var _this = _super.call(this) || this;
        _this.colorTransform = colorTransform;
        return _this;
    }
    BaseColorTransformBuilder.prototype.build = function () {
        return this.colorTransform;
    };
    return BaseColorTransformBuilder;
}(SObject));


;// ./src/color-transform/builders/BrightnessColorTransformBuilder.ts
var BrightnessColorTransformBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var BrightnessColorTransformBuilder = (function (_super) {
    BrightnessColorTransformBuilder_extends(BrightnessColorTransformBuilder, _super);
    function BrightnessColorTransformBuilder() {
        return _super.call(this, new BrightnessColorTransform()) || this;
    }
    BrightnessColorTransformBuilder.prototype.setBrightnessPercent = function (brightnessPercent) {
        this.colorTransform.brightnessPercent = brightnessPercent;
        return this;
    };
    return BrightnessColorTransformBuilder;
}(BaseColorTransformBuilder));


;// ./src/color-transform/builders/TintColorTransformBuilder.ts
var TintColorTransformBuilder_extends = (undefined && undefined.__extends) || (function () {
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



var TintColorTransformBuilder = (function (_super) {
    TintColorTransformBuilder_extends(TintColorTransformBuilder, _super);
    function TintColorTransformBuilder() {
        return _super.call(this, new TintColorTransform()) || this;
    }
    TintColorTransformBuilder.prototype.setTintPercent = function (tintPercent) {
        this.colorTransform.tintPercent = tintPercent;
        return this;
    };
    TintColorTransformBuilder.prototype.setTintRed = function (tintRed) {
        this.colorTransform.tintRed = tintRed;
        return this;
    };
    TintColorTransformBuilder.prototype.setTintGreen = function (tintGreen) {
        this.colorTransform.tintGreen = tintGreen;
        return this;
    };
    TintColorTransformBuilder.prototype.setTintBlue = function (tintBlue) {
        this.colorTransform.tintBlue = tintBlue;
        return this;
    };
    TintColorTransformBuilder.prototype.setInstanceTint = function (color, strength) {
        var rgb = external_chroma_js_default()(color).rgb();
        this.colorTransform.tintRed = rgb[0];
        this.colorTransform.tintGreen = rgb[1];
        this.colorTransform.tintBlue = rgb[2];
        this.colorTransform.tintPercent = strength;
        return this;
    };
    return TintColorTransformBuilder;
}(BaseColorTransformBuilder));


;// ./src/color-transform/builders/AdvancedColorTransformBuilder.ts
var AdvancedColorTransformBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var AdvancedColorTransformBuilder = (function (_super) {
    AdvancedColorTransformBuilder_extends(AdvancedColorTransformBuilder, _super);
    function AdvancedColorTransformBuilder() {
        return _super.call(this, new AdvancedColorTransform()) || this;
    }
    AdvancedColorTransformBuilder.prototype.setColorAlphaAmount = function (colorAlphaAmount) {
        this.colorTransform.colorAlphaAmount = colorAlphaAmount;
        return this;
    };
    AdvancedColorTransformBuilder.prototype.setColorAlphaPercent = function (colorAlphaPercent) {
        this.colorTransform.colorAlphaPercent = colorAlphaPercent;
        return this;
    };
    AdvancedColorTransformBuilder.prototype.setColorRedAmount = function (colorRedAmount) {
        this.colorTransform.colorRedAmount = colorRedAmount;
        return this;
    };
    AdvancedColorTransformBuilder.prototype.setColorRedPercent = function (colorRedPercent) {
        this.colorTransform.colorRedPercent = colorRedPercent;
        return this;
    };
    AdvancedColorTransformBuilder.prototype.setColorGreenAmount = function (colorGreenAmount) {
        this.colorTransform.colorGreenAmount = colorGreenAmount;
        return this;
    };
    AdvancedColorTransformBuilder.prototype.setColorGreenPercent = function (colorGreenPercent) {
        this.colorTransform.colorGreenPercent = colorGreenPercent;
        return this;
    };
    AdvancedColorTransformBuilder.prototype.setColorBlueAmount = function (colorBlueAmount) {
        this.colorTransform.colorBlueAmount = colorBlueAmount;
        return this;
    };
    AdvancedColorTransformBuilder.prototype.setColorBluePercent = function (colorBluePercent) {
        this.colorTransform.colorBluePercent = colorBluePercent;
        return this;
    };
    return AdvancedColorTransformBuilder;
}(BaseColorTransformBuilder));


;// ./src/color-transform/builders/AlphaColorTransformBuilder.ts
var AlphaColorTransformBuilder_extends = (undefined && undefined.__extends) || (function () {
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


var AlphaColorTransformBuilder = (function (_super) {
    AlphaColorTransformBuilder_extends(AlphaColorTransformBuilder, _super);
    function AlphaColorTransformBuilder() {
        return _super.call(this, new AlphaColorTransform()) || this;
    }
    AlphaColorTransformBuilder.prototype.setAlphaPercent = function (alphaPercent) {
        this.colorTransform.alphaPercent = alphaPercent;
        return this;
    };
    return AlphaColorTransformBuilder;
}(BaseColorTransformBuilder));


;// ./src/color-transform/instances/setInstanceNone.ts
function setInstanceNone(elements) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    elements.forEach(function (element) {
        element.colorMode = "none";
    });
}

;// ./src/color-transform/instances/utils.ts
function SelectAll(elements) {
    console.log('Selecting all elements:', elements);
}

;// ./src/color-transform/instances/setInstanceBrightness.ts

function setInstanceBrightness(elements, brightness) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    SelectAll(elements);
    var doc = fl.getDocumentDOM();
    doc.setInstanceBrightness(brightness);
}

;// ./src/color-transform/instances/setInstanceTint.ts


function setInstanceTint(elements, color, strength) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    SelectAll(elements);
    var doc = fl.getDocumentDOM();
    doc.setInstanceTint(color, strength);
}
function setInstanceTintRGB(elements, tintPercent, tintRed, tintGreen, tintBlue) {
    var color = external_chroma_js_default().rgb(tintRed, tintGreen, tintBlue).hex();
    setInstanceTint(elements, color, tintPercent);
}

;// ./src/color-transform/instances/setInstanceAdvancedColor.ts

function setInstanceAdvancedColor(elements, advancedColorTransform) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    SelectAll(elements);
    elements.forEach(function (element) {
        element.colorMode = "advanced";
        element.colorAlphaAmount = advancedColorTransform.colorAlphaAmount;
        element.colorAlphaPercent = advancedColorTransform.colorAlphaPercent;
        element.colorRedAmount = advancedColorTransform.colorRedAmount;
        element.colorRedPercent = advancedColorTransform.colorRedPercent;
        element.colorGreenAmount = advancedColorTransform.colorGreenAmount;
        element.colorGreenPercent = advancedColorTransform.colorGreenPercent;
        element.colorBlueAmount = advancedColorTransform.colorBlueAmount;
        element.colorBluePercent = advancedColorTransform.colorBluePercent;
    });
}

;// ./src/color-transform/instances/setInstanceAlpha.ts

function setInstanceAlpha(elements, alphaPercent) {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    SelectAll(elements);
    var doc = fl.getDocumentDOM();
    doc.setInstanceAlpha(alphaPercent);
}

;// ./src/color-transform/index.ts

















var COLOR_TRANSFORMS_MAP = {
    NoneColorTransform: NoneColorTransform,
    BrightnessColorTransform: BrightnessColorTransform,
    TintColorTransform: TintColorTransform,
    AdvancedColorTransform: AdvancedColorTransform,
    AlphaColorTransform: AlphaColorTransform
};
var COLOR_TRANSFORM_BUILDERS_MAP = {
    BrightnessColorTransformBuilder: BrightnessColorTransformBuilder,
    TintColorTransformBuilder: TintColorTransformBuilder,
    AdvancedColorTransformBuilder: AdvancedColorTransformBuilder,
    AlphaColorTransformBuilder: AlphaColorTransformBuilder
};
var COLOR_TRANSFORM_INSTANCES_MAP = {
    setInstanceNone: setInstanceNone,
    setInstanceBrightness: setInstanceBrightness,
    setInstanceTint: setInstanceTint,
    setInstanceTintRGB: setInstanceTintRGB,
    setInstanceAdvancedColor: setInstanceAdvancedColor,
    setInstanceAlpha: setInstanceAlpha
};
var COLOR_TRANSFORMS = {
    get NoneColorTransform() {
        return NoneColorTransform;
    },
    get BrightnessColorTransform() {
        return BrightnessColorTransform;
    },
    get TintColorTransform() {
        return TintColorTransform;
    },
    get AdvancedColorTransform() {
        return AdvancedColorTransform;
    },
    get AlphaColorTransform() {
        return AlphaColorTransform;
    },
    get: function (type) {
        return COLOR_TRANSFORMS_MAP[type];
    }
};
var COLOR_TRANSFORM_BUILDERS = {
    get BrightnessColorTransformBuilder() {
        return BrightnessColorTransformBuilder;
    },
    get TintColorTransformBuilder() {
        return TintColorTransformBuilder;
    },
    get AdvancedColorTransformBuilder() {
        return AdvancedColorTransformBuilder;
    },
    get AlphaColorTransformBuilder() {
        return AlphaColorTransformBuilder;
    },
    get: function (type) {
        return COLOR_TRANSFORM_BUILDERS_MAP[type];
    }
};
var COLOR_TRANSFORM_INSTANCES = {
    get setInstanceNone() {
        return setInstanceNone;
    },
    get setInstanceBrightness() {
        return setInstanceBrightness;
    },
    get setInstanceTint() {
        return setInstanceTint;
    },
    get setInstanceTintRGB() {
        return setInstanceTintRGB;
    },
    get setInstanceAdvancedColor() {
        return setInstanceAdvancedColor;
    },
    get setInstanceAlpha() {
        return setInstanceAlpha;
    },
    get: function (type) {
        return COLOR_TRANSFORM_INSTANCES_MAP[type];
    }
};


function createColorTransform(type, config) {
    var TransformClass = COLOR_TRANSFORMS_MAP[type];
    if (!TransformClass) {
        throw new Error("Unknown color transform type: ".concat(type));
    }
    var transform = new TransformClass();
    if (config) {
        Object.assign(transform, config);
    }
    return transform;
}
function createColorTransformBuilder(type) {
    var BuilderClass = COLOR_TRANSFORM_BUILDERS_MAP[type];
    if (!BuilderClass) {
        throw new Error("Unknown color transform builder type: ".concat(type));
    }
    return new BuilderClass();
}

;// ./src/index.ts





function parseColor(color) {
    return external_chroma_js_default()(color).hex();
}
function setAlpha(color, alpha) {
    return external_chroma_js_default()(color).alpha(alpha).hex();
}
function rgbToHex(red, green, blue) {
    return external_chroma_js_default().rgb(red, green, blue).hex();
}
function hexToRgb(hex) {
    return external_chroma_js_default()(hex).rgb();
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});