type Tokens = Record<string, any>

export type ProgressBarOptions = {
    total: number
    curr?: number
    width?: number
    head?: string
    complete?: string
    incomplete?: string
    renderThrottle?: number
    callback?: (bar: ProgressBar) => void
    clear?: boolean
}


export default class ProgressBar {
    private fmt: string;
    private total: number;
    private curr: number;
    private width: number;
    private head: string;
    private complete: string;
    private incomplete: string;
    private renderThrottle: number;
    private callback?: (bar: ProgressBar) => void;
    private clear: boolean;

    private start: number;
    private lastRender = 0;
    private terminated = false;

    constructor(fmt: string, total: number)
    constructor(fmt: string, options: ProgressBarOptions)
    constructor(fmt: string, arg: number | ProgressBarOptions) {
        this.fmt = fmt;

        const options: ProgressBarOptions =
            typeof arg === "number" ? { total: arg } : arg;

        if (typeof options.total !== "number") {
            throw new Error("total is required");
        }

        this.total = options.total;
        this.curr = options.curr ?? 0;
        this.width = options.width ?? 20;
        this.head = options.head ?? ">";
        this.complete = options.complete ?? "=";
        this.incomplete = options.incomplete ?? "-";
        this.renderThrottle = options.renderThrottle ?? 16;
        this.callback = options.callback;
        this.clear = !!options.clear;

        this.start = Date.now();
    }

    tick(len?: number | Tokens, tokens?: Tokens): void {
        if (this.terminated) return;

        if (typeof len === "object") {
            tokens = len;
            len = 1;
        }

        this.curr += len ?? 1;
        if (this.curr > this.total) this.curr = this.total;

        this.render(tokens);

        if (this.curr >= this.total) {
            this.terminate();
        }
    }

    update(ratio: number, tokens?: Tokens): void {
        const goal = Math.floor(this.total * ratio);
        this.curr = goal;
        this.render(tokens, true);
    }

    render(tokens: Tokens = {}, force = false): void {
        if (this.terminated) return;

        const now = Date.now();
        if (!force && this.renderThrottle > 0) {
            if (now - this.lastRender < this.renderThrottle) return;
        }
        this.lastRender = now;

        const percent = this.curr / this.total;
        const completeLen = Math.round(this.width * percent);

        let bar =
            this.complete.repeat(Math.max(0, completeLen - 1)) +
            (this.curr < this.total ? this.head : this.complete) +
            this.incomplete.repeat(this.width - completeLen);

        const elapsed = (now - this.start) / 1000;
        const rate = this.curr / (elapsed || 1);
        const eta =
            rate > 0 ? Math.ceil((this.total - this.curr) / rate) : 0;

        const baseTokens: Tokens = {
            bar,
            current: this.curr,
            total: this.total,
            percent: Math.floor(percent * 100) + "%",
            rate: rate.toFixed(2),
            eta,
            elapsed: Math.floor(elapsed)
        };

        const allTokens = { ...baseTokens, ...tokens };

        let line = this.fmt;
        for (const key in allTokens) {
            line = line.replace(":" + key, String(allTokens[key]));
        }

        // 核心变化：不碰 process / stream
        console.log(line);
    }

    interrupt(message: string): void {
        if (this.terminated) return;
        console.log(message);
        this.render({}, true);
    }

    terminate(): void {
        if (this.terminated) return;
        this.terminated = true;

        if (this.clear) {
            console.log("");
        }

        if (this.callback) {
            this.callback(this);
        }
    }
}

// const bar = new ProgressBar(":bar :current/:total", {
//     total: 100
// });
//
// for (let i = 0; i < 100; i++) {
//     bar.tick()
// }




