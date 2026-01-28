/**
 * @file: ex.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 */

/**
 * 缓动曲线类型
 * @private
 * @readonly
 */
var EASE_TYPES = {
    "No Ease": [5, -2, 0],
    "Classic Ease": [5, -1, 0],

    "Quad Ease-In": [5, 0, 0],
    "Cubic Ease-In": [5, 3, 0],
    "Quart Ease-In": [5, 6, 0],
    "Quint Ease-In": [5, 9, 0],
    "Sine Ease-In": [5, 12, 0],
    "Back Ease-In": [5, 15, 0],
    "Circ Ease-In": [5, 18, 0],
    "Bounce Ease-In": [5, 21, 0],
    "Elastic Ease-In": [5, 24, 0],

    "Quad Ease-Out": [5, 1, 0],
    "Cubic Ease-Out": [5, 4, 0],
    "Quart Ease-Out": [5, 7, 0],
    "Quint Ease-Out": [5, 10, 0],
    "Sine Ease-Out": [5, 13, 0],
    "Back Ease-Out": [5, 16, 0],
    "Circ Ease-Out": [5, 19, 0],
    "Bounce Ease-Out": [5, 22, 0],
    "Elastic Ease-Out": [5, 25, 0],

    "Quad Ease-In-Out": [5, 2, 0],
    "Cubic Ease-In-Out": [5, 5, 0],
    "Quart Ease-In-Out": [5, 8, 0],
    "Quint Ease-In-Out": [5, 11, 0],
    "Sine Ease-In-Out": [5, 14, 0],
    "Back Ease-In-Out": [5, 17, 0],
    "Circ Ease-In-Out": [5, 20, 0],
    "Bounce Ease-In-Out": [5, 23, 0],
    "Elastic Ease-In-Out": [5, 26, 0]
};
/**
 * 设置经典缓动曲线
 * @param {Timeline} timeline
 * @param {'Ease-In'|'Ease-Out'|'No Ease'} [easeInOut="No Ease"] 缓动方向
 * @param {number} [intensity=0] 缓动强度，-100~100
 */
function setClassicEaseCurve(timeline, easeInOut, intensity) {
    if (easeInOut === undefined) {
        easeInOut = "No Ease";
    }
    if (intensity === undefined) {
        intensity = 0;
    }
    // Ease-In  -1  Ease-Out 1  No Ease 0
    var native = 0;
    switch (easeInOut) {
        case "Ease-In":
            native = -1;
            break;
        case "Ease-Out":
            native = 1;
            break;
        case "No Ease":
            native = 0;
            break;
        default:
            throw Error("缓动方向不存在！");
    }

    // print("classic ease curve:"+native*intensity)
    timeline.createMotionTween();
    var finalIntensity = native * intensity;
    if (finalIntensity !== 0) {
        timeline.setFrameProperty("easeType", 5, -1, finalIntensity);
    }
}
/**
 * 设置缓动曲线
 * @param {Timeline} timeline
 * @param {'No Ease'|'Classic Ease'|'Quad Ease-In'|'Cubic Ease-In'|'Quart Ease-In'|'Quint Ease-In'|'Sine Ease-In'|'Back Ease-In'|'Circ Ease-In'|'Bounce Ease-In'|'Elastic Ease-In'|'Quad Ease-Out'|'Cubic Ease-Out'|'Quart Ease-Out'|'Quint Ease-Out'|'Sine Ease-Out'|'Back Ease-Out'|'Circ Ease-Out'|'Bounce Ease-Out'|'Elastic Ease-Out'|'Quad Ease-In-Out'|'Cubic Ease-In-Out'|'Quart Ease-In-Out'|'Quint Ease-In-Out'|'Sine Ease-In-Out'|'Back Ease-In-Out'|'Circ Ease-In-Out'|'Bounce Ease-In-Out'|'Elastic Ease-In-Out'} easeCurve 缓动类型
 * @throws {Error} 缓动类型不存在
 */
function setEaseCurve(timeline, easeCurve) {
    var easeData = EASE_TYPES[easeCurve];
    if (!easeData) {
        throw Error("缓动类型不存在！");
    }
    // timeline.createMotionTween();
    timeline.setFrameProperty("easeType", easeData[0], easeData[1], easeData[2]);
}
/**
 * 创建缓动
 * @param {Timeline} timeline
 * @param {'motion tween'|'shape tween'} tweenType 缓动类型
 */
function createTween(timeline, tweenType = "motion tween") {
    switch (tweenType) {
        case "motion tween":
            timeline.createMotionTween();
            break;
        case "shape tween":
            timeline.setFrameProperty("tweenType", "shape");
            break;
        default:
            throw Error("缓动类型不存在！");
    }
}


/**
 * 设置旋转缓动
 * @param {Timeline} timeline
 * @param {'none'|'auto'|'clockwise'|'counter-clockwise'} motionTweenRotate 旋转方向
 * @param {number} motionTweenRotateTimes 旋转次数
 */
function setTweenRotation(timeline, motionTweenRotate = "none", motionTweenRotateTimes = 0) {
    timeline.setFrameProperty("motionTweenRotate", motionTweenRotate);
    timeline.setFrameProperty("motionTweenRotateTimes", motionTweenRotateTimes);
}

/**
 * 删除缓动
 * @param {Timeline} timeline
 * @param {number} startFrame 开始帧
 * @param {number} [endFrame] 结束帧，默认开始帧
 */
function deleteMotionTween(timeline, startFrame, endFrame) {
    if (endFrame === undefined) endFrame = startFrame;

    timeline.setSelectedFrames(startFrame, endFrame, true);
    timeline.setFrameProperty("tweenType", "none");
}

// --- 重构后的 Tween 类 ---
type EaseName = keyof typeof EASE_TYPES;

// 定义 Action 委托类型：一个接受 Timeline 并无返回值的函数
type Action = (timeline: Timeline) => void;

class Tween {
    private timeline: Timeline;
    private startFrame: number;
    private endFrame: number;

    // 1. 核心修改：将所有操作存储为 Action 数组
    private actions: Action[] = [];

    // 用于 play 时的回调
    private onCompleteCallback: (() => void) | null = null;

    constructor(timeline: Timeline, startFrame: number, endFrame: number) {
        this.timeline = timeline;
        this.startFrame = startFrame;
        this.endFrame = endFrame;
    }

    // --- 1. 旋转设置 ---
    rotate(motionTweenRotate: 'none' | 'auto' | 'clockwise' | 'counter-clockwise', motionTweenRotateTimes: number = 0): this {
        // 2. 核心修改：不再立即执行，而是将操作封装为函数推入数组
        this.actions.push((timeline) => {
            setTweenRotation(timeline, motionTweenRotate, motionTweenRotateTimes)

        });
        return this;
    }

    // --- 2. 缓动类型设置 ---
    ease(easeName: EaseName): this {
        this.actions.push((tl) => { // 使用参数 tl 代表传入的 timeline
            setEaseCurve(tl, easeName); // 修正这里：使用 tl 而不是外部的 timeline
        });
        return this;
    }

    // --- 4. 完善 onComplete 及 play 方法 ---

    /**
     * 设置补间完成后的回调函数
     * @param fn 回调函数
     */
    onComplete(fn: () => void): this {
        this.onCompleteCallback = fn;
        return this;
    }

    /**
     * 应用所有设置到时间轴
     */
    play(): void {
        // 1. 选择帧范围
        this.timeline.setSelectedFrames(this.startFrame, this.endFrame, false);

        // 2. 创建补间 (注意：原代码 createTween 缺少 this.)
        createTween(this.timeline, "motion tween");

        // 3. 执行所有存储的动作
        this.actions.forEach(action => action(this.timeline));

        // 4. 模拟 onComplete：由于 JSFL 是立即执行的，设置完属性即视为“完成”
        if (this.onCompleteCallback) {
            console.log(`补间 [${this.startFrame}-${this.endFrame}] 已应用，触发回调。`);
            this.onCompleteCallback();
        }
    }


    // --- 6. 销毁/删除 ---
    kill(): void {
        // 直接删除指定帧的补间
        deleteMotionTween(this.timeline, this.startFrame, this.endFrame);
        this.onCompleteCallback = null;
        // 清空动作数组
        this.actions = [];
    }
}



// 假设你已经获取了 fl.getDocumentDOM().getTimeline()
var myTimeline = fl.getDocumentDOM().getTimeline();

// 创建一个从第1帧到第30帧的补间
new Tween(myTimeline, 1, 30)
    .rotate("clockwise", 2) // 设置顺时针旋转2圈
    .ease("Elastic Ease-Out") // 设置缓动类型
    .onComplete(() => { // 添加回调
        alert("补间设置已完成！"); // 弹窗提示（JSFL中可用）
        console.log("补间已生成"); // 控制台输出
    })
    .play(); // 执行