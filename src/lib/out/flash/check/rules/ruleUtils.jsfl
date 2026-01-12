// 这个文件由脚本 flash\check\rules\ruleUtils.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseRule = parseRule;
    exports.checkRule = checkRule;
    function parseRule(ruleStr) {
        var trimmed = ruleStr.trim();
        var match = trimmed.match(/^(>=|<=|>|<|==|!=)\s*(-?\d+)$/);
        if (!match) {
            throw new Error("\u89C4\u5219\u683C\u5F0F\u9519\u8BEF\uFF1A\"".concat(ruleStr, "\"\u3002\u5E94\u4E3A\u64CD\u4F5C\u7B26+\u6570\u5B57\uFF0C\u5982 \">=2\""));
        }
        return {
            op: match[1],
            val: Number(match[2])
        };
    }
    function checkRule(length, rule) {
        var op = rule.op, val = rule.val;
        switch (op) {
            case ">":
                return length > val;
            case ">=":
                return length >= val;
            case "<":
                return length < val;
            case "<=":
                return length <= val;
            case "==":
                return length === val;
            case "!=":
                return length !== val;
            default:
                return false;
        }
    }
});
