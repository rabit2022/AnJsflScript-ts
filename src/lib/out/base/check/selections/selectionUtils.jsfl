// 这个文件由脚本 base\check\selections\selectionUtils.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports", "selectionTypes"], function (require, exports, selectionTypes_1) {
    "use strict";
    var _a, _b, _c, _d, _e, _f, _g, _h;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MESSAGES = exports.CONDITION_ALIAS_MAP = void 0;
    exports.checkCondition = checkCondition;
    exports.CONDITION_ALIAS_MAP = {
        "=0": selectionTypes_1.CheckCondition.Zero,
        ">0": selectionTypes_1.CheckCondition.NotZero,
        "=1": selectionTypes_1.CheckCondition.OnlyOne,
        "=2": selectionTypes_1.CheckCondition.OnlyTwo,
        ">=2": selectionTypes_1.CheckCondition.More
    };
    exports.MESSAGES = (_a = {},
        _a[selectionTypes_1.CheckMode.SelectElement] = (_b = {},
            _b[selectionTypes_1.CheckCondition.NoLimit] = null,
            _b[selectionTypes_1.CheckCondition.NotZero] = "请选择一个元件。",
            _b[selectionTypes_1.CheckCondition.Zero] = "请至少选择一个元件。",
            _b[selectionTypes_1.CheckCondition.OnlyOne] = "请只选择一个元件。",
            _b[selectionTypes_1.CheckCondition.OnlyTwo] = "请同时选择两个元件。",
            _b[selectionTypes_1.CheckCondition.More] = "请选择多个元件。",
            _b),
        _a[selectionTypes_1.CheckMode.SelectFrame] = (_c = {},
            _c[selectionTypes_1.CheckCondition.NoLimit] = null,
            _c[selectionTypes_1.CheckCondition.NotZero] = "请选择一个帧。",
            _c[selectionTypes_1.CheckCondition.Zero] = "请至少选择一个帧。",
            _c[selectionTypes_1.CheckCondition.OnlyOne] = "请只选择一个帧。",
            _c[selectionTypes_1.CheckCondition.OnlyTwo] = "请同时选择两个帧。",
            _c[selectionTypes_1.CheckCondition.More] = "请选择多个帧。",
            _c),
        _a[selectionTypes_1.CheckMode.ElementOnFrame] = (_d = {},
            _d[selectionTypes_1.CheckCondition.NoLimit] = null,
            _d[selectionTypes_1.CheckCondition.NotZero] = "当前帧上需要有元件。",
            _d[selectionTypes_1.CheckCondition.Zero] = "当前帧上至少需要一个元件。",
            _d[selectionTypes_1.CheckCondition.OnlyOne] = "当前帧上只能有一个元件。",
            _d[selectionTypes_1.CheckCondition.OnlyTwo] = "当前帧上只能有两个元件。",
            _d[selectionTypes_1.CheckCondition.More] = "当前帧上需要多个元件。",
            _d),
        _a[selectionTypes_1.CheckMode.SelectLibItem] = (_e = {},
            _e[selectionTypes_1.CheckCondition.NoLimit] = null,
            _e[selectionTypes_1.CheckCondition.NotZero] = "请选择库中的一个项目。",
            _e[selectionTypes_1.CheckCondition.Zero] = "请至少选择一个库项目。",
            _e[selectionTypes_1.CheckCondition.OnlyOne] = "请只选择一个库项目。",
            _e[selectionTypes_1.CheckCondition.OnlyTwo] = "请同时选择两个库项目。",
            _e[selectionTypes_1.CheckCondition.More] = "请选择多个库项目。",
            _e),
        _a[selectionTypes_1.CheckMode.SelectLayer] = (_f = {},
            _f[selectionTypes_1.CheckCondition.NoLimit] = null,
            _f[selectionTypes_1.CheckCondition.NotZero] = "请选择一个图层。",
            _f[selectionTypes_1.CheckCondition.Zero] = "请至少选择一个图层。",
            _f[selectionTypes_1.CheckCondition.OnlyOne] = "请只选择一个图层。",
            _f[selectionTypes_1.CheckCondition.OnlyTwo] = "请同时选择两个图层。",
            _f[selectionTypes_1.CheckCondition.More] = "请选择多个图层。",
            _f),
        _a[selectionTypes_1.CheckMode.SelectedFrameDuration] = (_g = {},
            _g[selectionTypes_1.CheckCondition.NoLimit] = null,
            _g[selectionTypes_1.CheckCondition.NotZero] = "所选帧总时长 不能为 0 帧。",
            _g[selectionTypes_1.CheckCondition.Zero] = "所选帧总时长 至少为 1 帧。",
            _g[selectionTypes_1.CheckCondition.OnlyOne] = "所选帧总时长 只能为 1 帧。",
            _g[selectionTypes_1.CheckCondition.OnlyTwo] = "所选帧总时长 只能为 2 帧。",
            _g[selectionTypes_1.CheckCondition.More] = "所选帧总时长 不能小于 2 帧。",
            _g),
        _a[selectionTypes_1.CheckMode.SelectedFrameFirstDuration] = (_h = {},
            _h[selectionTypes_1.CheckCondition.NoLimit] = null,
            _h[selectionTypes_1.CheckCondition.NotZero] = "所选帧的 第一段 时长 不能为 0 帧。",
            _h[selectionTypes_1.CheckCondition.Zero] = "所选帧的 第一段 时长 至少为 1 帧。",
            _h[selectionTypes_1.CheckCondition.OnlyOne] = "所选帧的 第一段 时长 只能为 1 帧。",
            _h[selectionTypes_1.CheckCondition.OnlyTwo] = "所选帧的 第一段 时长 只能为 2 帧。",
            _h[selectionTypes_1.CheckCondition.More] = "所选帧的 第一段 时长 不能小于 2 帧。",
            _h),
        _a);
    function checkCondition(condition, length) {
        switch (condition) {
            case selectionTypes_1.CheckCondition.NoLimit:
                return true;
            case selectionTypes_1.CheckCondition.NotZero:
                return length > 0;
            case selectionTypes_1.CheckCondition.Zero:
                return length === 0;
            case selectionTypes_1.CheckCondition.OnlyOne:
                return length === 1;
            case selectionTypes_1.CheckCondition.OnlyTwo:
                return length === 2;
            case selectionTypes_1.CheckCondition.More:
                return length > 2;
            default:
                throw new Error("\u672A\u77E5\u6761\u4EF6: ".concat(condition));
        }
    }
});
