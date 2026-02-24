define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgressBar = void 0;
    var ProgressBar = /** @class */ (function () {
        function ProgressBar(fmt, arg) {
            var _a, _b, _c, _d, _e, _f;
            this.lastRender = 0;
            this.terminated = false;
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
        ProgressBar.prototype.tick = function (len, tokens) {
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
        };
        ProgressBar.prototype.update = function (ratio, tokens) {
            var goal = Math.floor(this.total * ratio);
            this.curr = goal;
            this.render(tokens, true);
        };
        ProgressBar.prototype.render = function (tokens, force) {
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
            var allTokens = tslib_1.__assign(tslib_1.__assign({}, baseTokens), tokens);
            var line = this.fmt;
            for (var key in allTokens) {
                line = line.replace(":" + key, String(allTokens[key]));
            }
            // 核心变化：不碰 process / stream
            console.log(line);
        };
        ProgressBar.prototype.interrupt = function (message) {
            if (this.terminated)
                return;
            console.log(message);
            this.render({}, true);
        };
        ProgressBar.prototype.terminate = function () {
            if (this.terminated)
                return;
            this.terminated = true;
            if (this.clear) {
                console.log("");
            }
            if (this.callback) {
                this.callback(this);
            }
        };
        return ProgressBar;
    }());
    exports.ProgressBar = ProgressBar;
});
// const bar = new ProgressBar(":bar :current/:total", {
//     total: 100
// });
//
// for (let i = 0; i < 100; i++) {
//     bar.tick()
// }
