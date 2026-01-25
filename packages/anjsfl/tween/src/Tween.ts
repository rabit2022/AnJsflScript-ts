/**
 * @file: Tween.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */class TweenSequence {
    private actions: Action[] = [];
    private loopCount: number = 0; // 外层循环
    private onCompleteCallback: (() => void) | null = null;

    // ———————— 公共 API ————————

    doMove(
        target: { x: number; y: number },
        duration: number,
        ease: EaseFunction = Easing.linear
    ): this {
        this.actions.push({ type: "move", target, duration, ease });
        return this;
    }

    doRotate(angle: number, duration: number, ease: EaseFunction = Easing.linear): this {
        this.actions.push({ type: "rotate", target: angle, duration, ease });
        return this;
    }

    goto(frame: number, duration: number = 0): this {
        this.actions.push({ type: "gotoFrame", frame, duration });
        return this;
    }

    setDelay(time: number): this {
        if (time > 0) {
            this.actions.push({ type: "delay", time });
        }
        return this;
    }

    setLoops(count: number): this {
        this.loopCount = count;
        return this;
    }

    onComplete(fn: () => void): this {
        this.onCompleteCallback = fn;
        return this;
    }

    complete(): this {
        // 立即完成所有动作（跳过动画，直接设终值）
        console.warn("complete() not fully implemented in skeleton");
        return this;
    }

    play(target: TweenTarget): Promise<void> {
        return this.executeActions(target);
    }

    // ———————— 内部执行逻辑 ————————

    private async executeActions(target: TweenTarget): Promise<void> {
        let loop = 0;
        const maxLoops = this.loopCount === -1 ? Infinity : this.loopCount || 1;

        while (loop < maxLoops) {
            for (const action of this.actions) {
                await this.executeAction(action, target);
            }
            loop++;
        }

        this.onCompleteCallback?.();
    }

    private async executeAction(action: Action, target: TweenTarget): Promise<void> {
        switch (action.type) {
            case "move": {
                const start = { x: target.x ?? 0, y: target.y ?? 0 };
                const { target: end, duration, ease } = action;
                await this.tween(start, end, duration, ease, (v) => {
                    target.x = v.x;
                    target.y = v.y;
                });
                break;
            }
            case "rotate": {
                const start = target.rotation ?? 0;
                const { target: end, duration, ease } = action;
                await this.tween(start, end, duration, ease, (v) => {
                    target.rotation = v;
                });
                break;
            }
            case "gotoFrame": {
                // 假设帧是离散状态，这里简化为立即跳转或带 duration 插值
                if (action.duration <= 0) {
                    // 立即跳转（由外部处理帧逻辑）
                    console.log(`Go to frame:  $ {action.frame}`);
                } else {
                    // 可模拟帧插值（通常不需要）
                }
                await this.sleep(action.duration);
                break;
            }
            case "delay":
                await this.sleep(action.time);
                break;
            case "callback":
                action.fn();
                break;
            default:
                break;
        }
    }

    private tween<T>(
        from: T,
        to: T,
        duration: number,
        ease: EaseFunction,
        onUpdate: (value: T) => void
    ): Promise<void> {
        return new Promise((resolve) => {
            if (duration <= 0) {
                onUpdate(to);
                resolve();
                return;
            }

            const startTime = performance.now();
            const endTime = startTime + duration;

            const step = (now: number) => {
                if (now >= endTime) {
                    onUpdate(to);
                    resolve();
                    return;
                }

                const t = ease((now - startTime) / duration);
                const current = this.interpolate(from, to, t);
                onUpdate(current);
                requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        });
    }

    // 简单插值（支持 number 和 {x,y}）
    private interpolate<T>(from: T, to: T, t: number): T {
        if (typeof from === "number" && typeof to === "number") {
            return (from + (to - from) * t) as T;
        }
        if (typeof from === "object" && typeof to === "object" && from && to) {
            const result: any = {};
            for (const key in from) {
                if (typeof (from as any)[key] === "number") {
                    result[key] =
                        (from as any)[key] + ((to as any)[key] - (from as any)[key]) * t;
                }
            }
            return result as T;
        }
        return to; // fallback
    }

    private sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
