
import {findIndex} from 'lodash';

/**
 * @file Random.ts
 * @description 伪随机数生成器类，提供多种分布的随机数方法。
 * 注意：所有方法均基于 Math.random()，不适用于加密场景。
 */
class Random {
    /**
     * 内部随机数生成器，默认使用 Math.random
     */
    private _random: () => number = () => Math.random();

    /**
     * 设置自定义随机数生成函数（例如用于固定种子）
     * @param randomFn 返回 [0, 1) 的函数
     */
    setRandomGenerator(randomFn: () => number): void {
        this._random = randomFn;
    }

    /**
     * 返回一个随机整数，从 start（包含）到 stop（不包含）。
     * 如果只提供一个参数，则返回一个 0 到该参数之间的随机整数。
     * 如果提供了 step，则按步长生成。
     *
     * @param start 起始值（包含）
     * @param stop 结束值（不包含），若未提供则 start 视为 stop，start=0
     * @param step 步长，默认为 1
     * @returns 随机整数
     */
    randrange(start: number, stop?: number, step: number = 1): number {
        if (stop === undefined) {
            stop = start;
            start = 0;
        }
        if (step < 1) {
            throw new Error('Step must be 1 or greater');
        }
        const num = Math.floor(this._random() * Math.ceil((stop - start) / step));
        return start + num * step;
    }

    /**
     * 返回 [a, b] 范围内的随机整数（包含 a 和 b）
     */
    randint(a: number, b: number): number {
        return this.randrange(a, b + 1);
    }

    /**
     * 从序列中随机选择一个元素
     */
    choice<T>(seq: T[]): T {
        if (seq.length === 0) {
            throw new Error('Cannot choose from an empty sequence');
        }
        return seq[Math.floor(this._random() * seq.length)];
    }

    /**
     * 从序列中随机选择 k 个元素（可重复）
     */
    choices<T>(
        population: T[],
        weights: number[] | null = null,
        cumWeights: number[] | null = null,
        k: number = 1
    ): T[] {
        if (k > population.length && weights === null && cumWeights === null) {
            // 允许重复选择
        }

        if (weights !== null) {
            if (cumWeights !== null) {
                throw new Error('Cannot specify both weights and cumWeights');
            }
            // 构建累积权重
            cumWeights = [];
            let total = 0;
            for (const w of weights) {
                total += w;
                cumWeights.push(total);
            }
        }

        if (cumWeights !== null) {
            if (cumWeights.length !== population.length) {
                throw new Error('The number of weights does not match the population');
            }
            const result: T[] = [];
            const totalWeight = cumWeights[cumWeights.length - 1];
            for (let i = 0; i < k; i++) {
                const u = this._random() * totalWeight;
                // const j = cumWeights.findIndex(cw => cw >= u);
                const j = findIndex(cumWeights, cw => cw >= u);
                result.push(population[j]);
            }
            return result;
        }

        // 无权重：简单随机选择（允许重复）
        const result: T[] = [];
        for (let i = 0; i < k; i++) {
            result.push(this.choice(population));
        }
        return result;
    }

    /**
     * 原地打乱数组
     */
    shuffle<T>(seq: T[]): T[] {
        for (let i = seq.length - 1; i > 0; i--) {
            const j = Math.floor(this._random() * (i + 1));
            [seq[i], seq[j]] = [seq[j], seq[i]];
        }
        return seq;
    }

    /**
     * 从 population 中无放回地随机抽取 k 个元素
     */
    sample<T>(population: T[], k: number): T[] {
        if (k > population.length) {
            throw new Error('Sample larger than population');
        }
        // 创建副本避免修改原数组
        const pool = [...population];
        const result: T[] = [];
        for (let i = 0; i < k; i++) {
            const j = Math.floor(this._random() * pool.length);
            result.push(pool.splice(j, 1)[0]);
        }
        return result;
    }

    /**
     * 在 [a, b) 范围内生成均匀分布的随机浮点数
     */
    uniform(a: number, b: number): number {
        return a + (b - a) * this._random();
    }

    /**
     * 生成高斯（正态）分布的随机数（Box-Muller 变换）
     */
    gauss(mu: number, sigma: number): number {
        let x: number, y: number, z: number;
        do {
            x = this.uniform(-1, 1);
            y = this.uniform(-1, 1);
            z = x * x + y * y;
        } while (z >= 1 || z === 0);

        const multiplier = Math.sqrt((-2 * Math.log(z)) / z);
        return mu + sigma * x * multiplier;
    }

    /**
     * 生成指数分布的随机数
     */
    expovariate(lambd: number): number {
        if (lambd <= 0) {
            throw new Error('Lambda must be positive');
        }
        return -Math.log(1 - this._random()) / lambd;
    }

    /**
     * 生成冯·米塞斯分布的随机数（简化版）
     */
    vonmisesvariate(mu: number, kappa: number): number {
        if (kappa <= 0) {
            throw new Error('Kappa must be positive');
        }
        // 简化实现（实际应使用更精确算法）
        let s = 0;
        let r = 1;
        while (true) {
            const u = this._random();
            s += Math.log(1 - u) / kappa;
            if (s <= -Math.PI) break;
            r++;
        }
        return mu + Math.atan2(Math.sin(s), Math.cos(kappa * s));
    }

    /**
     * 生成帕累托分布的随机数
     */
    paretovariate(alpha: number): number {
        if (alpha <= 0) {
            throw new Error('Alpha must be positive');
        }
        return 1 / Math.pow(this._random(), 1 / alpha);
    }

    /**
     * 生成威布尔分布的随机数
     */
    weibullvariate(alpha: number, beta: number): number {
        if (alpha <= 0 || beta <= 0) {
            throw new Error('Alpha and beta must be positive');
        }
        return alpha * Math.pow(-Math.log(1 - this._random()), 1 / beta);
    }
}

export const random = new Random();
