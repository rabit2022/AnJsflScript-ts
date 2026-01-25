/**
 * @file: utils.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 *//**
 * 生成一个数字序列，行为完全类似 Python 的 range() 函数。
 * 注意：生成的序列不包含 'stop' 值。
 *
 * @param startOrStop - 如果只有一个参数，这是 'stop'；否则是 'start'。
 * @param stop - 结束值（不包含在序列中）。
 * @param step - 步长，默认为 1。
 * @returns number[] - 返回生成的数字数组。
 */
export function generateRange(
    startOrStop: number,
    stop?: number,
    step: number = 1
): number[] {
    // 处理参数：如果 stop 是 undefined，说明只传了一个参数，即 range(stop)
    let start: number;
    let end: number;

    if (stop === undefined) {
        // 情况 1: range(stop) -> start=0, end=stop
        start = 0;
        end = startOrStop;
    } else {
        // 情况 2 & 3: range(start, stop) 或 range(start, stop, step)
        start = startOrStop;
        end = stop;
    }

    // 处理步长为 0 的边界情况，防止死循环
    if (step === 0) {
        throw new Error("Step argument must not be zero.");
    }

    const range: number[] = [];

    // 处理正步长
    if (step > 0) {
        for (let i = start; i < end; i += step) {
            range.push(i);
        }
    }
    // 处理负步长
    else {
        for (let i = start; i > end; i += step) {
            range.push(i);
        }
    }

    return range;
}
