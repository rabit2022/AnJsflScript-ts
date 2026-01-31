/**
 * @file: progress.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/31 22:59
 * @project: AnJsflScript-ts
 * @description:
 */

// 这个文件由脚本 progress.ts 自动生成，任何手动修改都将会被覆盖.

(function(){
var __assign = (this && this.__assign) || function () {
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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressBar = (function () {
        function ProgressBar(fmt, arg) {
            var _a, _b, _c, _d, _e, _f;
            Object.defineProperty(this, "fmt", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "total", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "curr", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "width", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "head", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "complete", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "incomplete", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "renderThrottle", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "callback", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "clear", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "start", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "lastRender", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 0
            });
            Object.defineProperty(this, "terminated", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: false
            });
            this.fmt = fmt;
            var options = typeof arg === "number" ? { total: arg } : arg;
            if (typeof options.total !== "number") {
                throw new Error("total is required");
            }
            this.total = options.total;
            this.curr = (_a = options.curr) !== null && _a !== void 0 ? _a : 0;
            this.width = (_b = options.width) !== null && _b !== void 0 ? _b : 20;
            this.head = (_c = options.head) !== null && _c !== void 0 ? _c : ">";
            this.complete = (_d = options.complete) !== null && _d !== void 0 ? _d : "=";
            this.incomplete = (_e = options.incomplete) !== null && _e !== void 0 ? _e : "-";
            this.renderThrottle = (_f = options.renderThrottle) !== null && _f !== void 0 ? _f : 16;
            this.callback = options.callback;
            this.clear = !!options.clear;
            this.start = Date.now();
        }
        Object.defineProperty(ProgressBar.prototype, "tick", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (len, tokens) {
                if (this.terminated)
                    return;
                if (typeof len === "object") {
                    tokens = len;
                    len = 1;
                }
                this.curr += len !== null && len !== void 0 ? len : 1;
                if (this.curr > this.total)
                    this.curr = this.total;
                this.render(tokens);
                if (this.curr >= this.total) {
                    this.terminate();
                }
            }
        });
        Object.defineProperty(ProgressBar.prototype, "update", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (ratio, tokens) {
                var goal = Math.floor(this.total * ratio);
                this.curr = goal;
                this.render(tokens, true);
            }
        });
        Object.defineProperty(ProgressBar.prototype, "render", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (tokens, force) {
                if (tokens === void 0) { tokens = {}; }
                if (force === void 0) { force = false; }
                if (this.terminated)
                    return;
                var now = Date.now();
                if (!force && this.renderThrottle > 0) {
                    if (now - this.lastRender < this.renderThrottle)
                        return;
                }
                this.lastRender = now;
                var percent = this.curr / this.total;
                var completeLen = Math.round(this.width * percent);
                var bar = this.complete.repeat(Math.max(0, completeLen - 1)) +
                    (this.curr < this.total ? this.head : this.complete) +
                    this.incomplete.repeat(this.width - completeLen);
                var elapsed = (now - this.start) / 1000;
                var rate = this.curr / (elapsed || 1);
                var eta = rate > 0 ? Math.ceil((this.total - this.curr) / rate) : 0;
                var baseTokens = {
                    bar: bar,
                    current: this.curr,
                    total: this.total,
                    percent: Math.floor(percent * 100) + "%",
                    rate: rate.toFixed(2),
                    eta: eta,
                    elapsed: Math.floor(elapsed)
                };
                var allTokens = __assign(__assign({}, baseTokens), tokens);
                var line = this.fmt;
                for (var key in allTokens) {
                    line = line.replace(":" + key, String(allTokens[key]));
                }
                console.log(line);
            }
        });
        Object.defineProperty(ProgressBar.prototype, "interrupt", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (message) {
                if (this.terminated)
                    return;
                console.log(message);
                this.render({}, true);
            }
        });
        Object.defineProperty(ProgressBar.prototype, "terminate", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (this.terminated)
                    return;
                this.terminated = true;
                if (this.clear) {
                    console.log("");
                }
                if (this.callback) {
                    this.callback(this);
                }
            }
        });
        return ProgressBar;
    }());
    exports.default = ProgressBar;
});

})();