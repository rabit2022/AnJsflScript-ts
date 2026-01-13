// Version 0.9.0 - Copyright 2012 - 2021 -  Jim Riecken <jimr@jimr.ca>
//
// Released under the MIT License - https://github.com/jriecken/sat-js
//
// A simple library for determining intersections of circles and
// polygons using the Separating Axis Theorem.
/** @preserve SAT.js - Version 0.9.0 - Copyright 2012 - 2021 - Jim Riecken <jimr@jimr.ca> - released under the MIT License. https://github.com/jriecken/sat-js */

define(["FUNC", "SObject", "overload-js"], function(FUNC, so, overload) {
    const { INHERIT_MACRO } = FUNC;
    const { SObject } = so;
    const o = overload.o;


    var SAT = {};
    var SAT_GLOBALS = {};
    var SAT_CHECk = {};

    // ------------------------------------------------------------------------------------------------------------------------
    //  ______     __   __     ______   __     ______   __  __
    // /\  ___\   /\ "-.\ \   /\__  _\ /\ \   /\__  _\ /\ \_\ \
    // \ \  __\   \ \ \-.  \  \/_/\ \/ \ \ \  \/_/\ \/ \ \____ \
    //  \ \_____\  \ \_\\"\_\    \ \_\  \ \_\    \ \_\  \/\_____\
    //   \/_____/   \/_/ \/_/     \/_/   \/_/     \/_/   \/_____/
    //
    // ------------------------------------------------------------------------------------------------------------------------
    // ENTITY
    var SAT_ENTITY = {
        ELEMENT: {
            getOrigin: getOrigin,
            getTopLeft: getTopLeft
        },
        SYMBOL: {
            getCenter: getSymbolCenter,
            getBounds: getSymbolBounds,
            getSize: getSymbolSize
        },
        STAGE: {
            getCenter: getStageCenter,
            getBounds: getStageBounds,
            getSize: getStageSize
        },
        CAMERA: {
            getBounds: getCameraBounds,
            getCenter: getCameraCenter
        }
    };

    function getSymbolSize(element) {
        return new Size.from(element);
    }

    // ------------------------------------------------------------------------------------------------------------------------
    //  ______   __  __     ______   ______     ______
    // /\__  _\ /\ \_\ \   /\  == \ /\  ___\   /\  ___\
    // \/_/\ \/ \ \____ \  \ \  _-/ \ \  __\   \ \___  \
    //    \ \_\  \/\_____\  \ \_\    \ \_____\  \/\_____\
    //     \/_/   \/_____/   \/_/     \/_____/   \/_____/
    //
    // ------------------------------------------------------------------------------------------------------------------------
    // TYPES
    // region sat.CHECk
    overload.defineType("Element", function(val) {
        return IsElementBoundsLike(val);
    });

    overload.defineType("Vector", function(val) {
        return IsVectorLike(val);
    });

    overload.defineType("Rectangle", function(val) {
        return IsRectangleLike(val);
    });

    overload.defineType("Size", function(val) {
        return IsSizeLike(val);
    });

    overload.defineType("Transform", function(val) {
        return IsTransformLike(val);
    });

    overload.defineType("FrameRange", function(val) {
        return IsFrameRangeLike(val);
    });

    overload.defineType("Scale", function(val) {
        return IsScaleLike(val);
    });

    overload.defineType("Skew", function(val) {
        return IsSkewLike(val);
    });

    overload.defineType("LineSegment", function(val) {
        return IsLineSegmentLike(val);
    });

    overload.defineType("Circle", function(val) {
        return IsCircleLike(val);
    });
    // endregion sat.CHECk

    var SAT_TYPES = {
        T_Element: o.Element,
        T_Vector: o.Vector,
        T_Rectangle: o.Rectangle,
        T_Size: o.Size,
        T_Transform: o.Transform,
        T_FrameRange: o.FrameRange,
        T_Scale: o.Scale,
        T_Skew: o.Skew,
        T_LineSegment: o.LineSegment,
        T_Circle: o.Circle
    };


    SAT["GLOBALS"] = SAT_GLOBALS;
    SAT["CHECk"] = SAT_CHECk;
    SAT["ENTITY"] = SAT_ENTITY;
    SAT["TYPES"] = SAT_TYPES;

    return SAT;
});
