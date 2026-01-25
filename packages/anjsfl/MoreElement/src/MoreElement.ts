/**
 * @file: MoreElement.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// MoreElement.ts
import { ArrangementResult, ArrangementStrategy } from "./strategies/ArrangementStrategy";
import {
    GridArrangement,
    NeatArrangement,
    PerspectiveArrangement,
    PerspectiveConfig,
    StaggeredArrangement
} from "./strategies";
import { ArrangementMode } from "./enums/ArrangementMode";
import { SAT, SAT_T } from "@anjsfl/sat";

type Vector_T = SAT_T.Vector;
type Scale_T = SAT_T.Scale;
type Bounds_T = SAT_T.Bounds;

const { Vector, Bounds, Size } = SAT;

export class MoreElement {
    // 静态属性
    public static MODES = ArrangementMode;

    // 实例属性
    private element: Element;
    private position: Vector_T;
    private moveDirection: Vector_T;
    private offset: Vector_T;
    private baseRect: Bounds_T;

    // 策略映射
    private strategyMap: Map<ArrangementMode, ArrangementStrategy>;

    /**
     * 构造函数 - 使用 TypeScript 函数重载
     */
    constructor(element: Element);
    constructor(element: Element, h: number, v: number);
    constructor(element: Element, vec: Vector_T);
    constructor(element: Element, arg2?: number | Vector_T, arg3?: number) {
        this.element = element;
        this.position = new Vector(element.x, element.y);

        let horizontalSpacing = 1;
        let verticalSpacing = 1;

        // 处理不同的参数组合
        if (arg2 === undefined && arg3 === undefined) {
            horizontalSpacing = 1;
            verticalSpacing = 1;
        } else if (arg2 instanceof Vector) {
            horizontalSpacing = arg2.x;
            verticalSpacing = arg2.y;
        } else if (typeof arg2 === "number" && typeof arg3 === "number") {
            horizontalSpacing = arg2;
            verticalSpacing = arg3;
        }

        this.moveDirection = new Vector(horizontalSpacing, verticalSpacing);

        // const originSize = getSymbolSize(element);
        const originSize = Size.fromElement(element);
        this.offset = new Vector(
            originSize.width * horizontalSpacing,
            originSize.height * verticalSpacing
        );

        this.baseRect = Bounds.fromElement(element);

        // 初始化策略映射
        this.strategyMap = new Map();
        this.initializeStrategies();
    }

    /**
     * 初始化所有排列策略
     */
    private initializeStrategies(): void {
        const strategyArgs = [
            this.element,
            this.offset,
            this.position,
            this.baseRect,
            this.moveDirection
        ] as const;

        this.strategyMap.set(ArrangementMode.NEAT, new NeatArrangement(...strategyArgs));
        this.strategyMap.set(
            ArrangementMode.STAGGERED,
            new StaggeredArrangement(...strategyArgs)
        );
        this.strategyMap.set(
            ArrangementMode.PERSPECTIVE,
            new PerspectiveArrangement(...strategyArgs)
        );
        this.strategyMap.set(ArrangementMode.GRID, new GridArrangement(...strategyArgs));
        // 后续可以添加更多策略
    }

    /**
     * 通用排列计算方法
     */
    public arrange(
        x: number,
        y: number,
        mode: ArrangementMode = ArrangementMode.NEAT,
        config?: any
    ): ArrangementResult {
        const strategy = this.strategyMap.get(mode);
        if (!strategy) {
            throw new Error(`Unsupported arrangement mode: ${mode}`);
        }

        return strategy.calculate(x, y, config);
    }

    /**
     * 快捷方法 - 整齐排列
     */
    public neat(x: number, y: number): ArrangementResult {
        return this.arrange(x, y, ArrangementMode.NEAT);
    }

    /**
     * 快捷方法 - 交错排列
     */
    public staggered(x: number, y: number): ArrangementResult {
        return this.arrange(x, y, ArrangementMode.STAGGERED);
    }

    /**
     * 快捷方法 - 透视排列
     */
    public perspective(x: number, y: number, horizontalCount: number): ArrangementResult {
        const config: PerspectiveConfig = { horizontalCount };
        return this.arrange(x, y, ArrangementMode.PERSPECTIVE, config);
    }

    /**
     * 快捷方法 - 网格排列
     */
    public grid(x: number, y: number): ArrangementResult {
        return this.arrange(x, y, ArrangementMode.GRID);
    }

    /**
     * 执行网格操作（特殊方法）
     */
    public executeGridOperation(): void {
        const strategy = this.strategyMap.get(ArrangementMode.GRID) as GridArrangement;
        if (strategy && typeof (strategy as any).executeGridOperation === "function") {
            (strategy as any).executeGridOperation();
        } else {
            console.warn("Grid operation is not available");
        }
    }

    /**
     * 获取元素信息
     */
    public getElementInfo() {
        return {
            element: this.element,
            position: this.position,
            offset: this.offset,
            rect: this.baseRect,
            moveDirection: this.moveDirection
        };
    }

    /**
     * 添加自定义策略
     */
    public addStrategy(mode: ArrangementMode, strategy: ArrangementStrategy): void {
        this.strategyMap.set(mode, strategy);
    }

    /**
     * 移除策略
     */
    public removeStrategy(mode: ArrangementMode): boolean {
        return this.strategyMap.delete(mode);
    }

    /**
     * 检查是否支持某种排列模式
     */
    public hasStrategy(mode: ArrangementMode): boolean {
        return this.strategyMap.has(mode);
    }

    /**
     * 实例字符串表示
     */
    public toString(): string {
        return `MoreElement(element=${this.element}, position=${this.position}, offset=${this.offset}, baseRect=${this.baseRect})`;
    }

    /**
     * 类字符串表示
     */
    public static toString(): string {
        return "[object MoreElement]";
    }
}

// 工厂函数
export function createMoreElement(element: Element): MoreElement;
export function createMoreElement(element: Element, h: number, v: number): MoreElement;
export function createMoreElement(element: Element, vec: Vector_T): MoreElement;

export function createMoreElement(
    element: Element,
    arg2?: number | Vector_T,
    arg3?: number
): MoreElement {
    console.log("Creating MoreElement with arguments:", element, arg2, arg3);

    if (arg2 === undefined && arg3 === undefined) {
        return new MoreElement(element);
    } else if (arg2 instanceof Vector) {
        return new MoreElement(element, arg2);
    } else if (typeof arg2 === "number" && typeof arg3 === "number") {
        return new MoreElement(element, arg2, arg3);
    }

    return new MoreElement(element);
}

export default MoreElement;
