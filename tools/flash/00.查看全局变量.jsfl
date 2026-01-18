/**
 * @file: 00.查看全局变量.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/2/12 16:44
 * @project: AnJsflScript
 * @description:
 */

(function() {
    var PROPERTY = window;

    var PROPERTY = FLAirAndroidExt;

    // var PROPERTY = Array
    // var PROPERTY = XML;
    var PROPERTY = document;


    // var doc = fl.getDocumentDOM(); //文档
    // var selection = doc.selection; //选择
    // var PROPERTY = selection[0];



    function Main(PROPERTY) {
        fl.trace("All properties:[" + PROPERTY + "]");
        // 创建两个数组，分别存储普通属性和函数
        var keys = [];
        var properties = [];

        var values = [];

        // 遍历 window 对象的所有属性
        for (var key in PROPERTY) {
            keys.push(key);
            // fl.trace(key);
            // fl.trace(PROPERTY[key]);
            try {
                // 确保是 window 自身的属性
                var value = PROPERTY[key];

                if (PROPERTY.hasOwnProperty(key)) {
                    properties.push(value);
                    continue;
                }

                values.push(value);
            } catch (e) {

            }
        }

        // 打印普通属性列表
        fl.trace("keys:");
        keys.forEach(function(prop) {
            fl.trace(prop);
        });

        fl.trace("\nproperties:");
        properties.forEach(function(prop) {
            fl.trace(prop);
        })

        // 打印函数列表
        fl.trace("\nvalues:");
        values.forEach(function(value) {
            fl.trace(value);
        });

    }

    Main(PROPERTY);
})();

// FeatureMatrix
/**
 * All properties:[[object Document]]
 * Properties:
 * name
 * path
 * timelines
 * currentTimeline
 * library
 * livePreview
 * width
 * height
 * backgroundColor
 * pasteboardColorCheck
 * frameRate
 * selection
 * viewMatrix
 * animatedViewRect
 * accName
 * description
 * silent
 * forceSimple
 * autoLabel
 * publishProfiles
 * currentPublishProfile
 * legacyLineSpacing
 * docClass
 * as3WarningsMode
 * as3StrictMode
 * as3AutoDeclare
 * as3Dialect
 * as3ExportFrame
 * playerVersion
 * asVersion
 * id
 * type
 * zoomFactor
 * exportSWC
 * mergeForSelection
 * sourcePath
 * libraryPath
 * externalLibraryPath
 * playerTarget
 * pathURI
 * isUncompressed
 * inTextEditMode
 * swfJPEGQuality
 * featureMatrix
 * fileGUID
 * stageScaleAnchor
 * scaleContentWithStage
 *
 * Functions:
 *
 * Objects:
 * test.fla
 * H:\project\js\AnJsflScript-ts\src\test\flash\test.fla
 * [object Timeline],[object Timeline],[object Timeline],[object Timeline]
 * 3
 * [object Library]
 * true
 * 1280
 * 720
 * #FFFFFF
 * false
 * 30
 * [object SymbolInstance]
 * [object Object]
 * true
 *
 *
 * false
 * false
 * true
 * 默认文件
 * 默认文件
 * false
 *
 * true
 * true
 * true
 * AS3
 * 1
 * 10
 * 3
 * 17138
 * Flash
 * 1
 * false
 * false
 * .
 * $(AppConfig)/ActionScript 3.0/libs
 *
 * Flash Player 32
 * file:///H|/project/js/AnJsflScript-ts/src/test/flash/test.fla
 * false
 * false
 * 80
 * [object FeatureMatrix]
 * 0B24A99EA853574E922BA232E8F62196
 * TopLeft
 * false
 */


