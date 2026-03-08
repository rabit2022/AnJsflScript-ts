/**
 * @file: 重命名tag.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/8 14:52
 * @project: AnJsflScript-ts
 * @description:修复tag名字相同的bug问题
 */


require(["@xjsfl/UI"], function ({UI}) {

    var frames = UI.frames;

    function Main() {
        frames.forEach(function (frame, index) {
            // console.log(typeof frame.labelType, frame.name);
            if (frame.labelType === "none") {
                return;
            }
            frame.name = "frame_" + index;
        });
    }

    Main();
});
