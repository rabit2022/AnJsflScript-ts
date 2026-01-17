declare module "Context" {
    type DOMSource =
        | true
        | number
        | string
        // | File
        | FlashDocument
        | { dom: FlashDocument };
    type TimelineSource =
        | true // 获取当前时间轴
        | null // 文档根时间轴
        | number // 场景索引
        | string // 库项目名称 (路径)
        | Timeline // 具体的时间轴对象
        | SymbolItem // 符号项目
        | SymbolInstance // 舞台上的符号实例
        | { timeline: Timeline; item?: Item }; // 其他 Context 或兼容对象

    type LayerSource =
        | true            // 布尔值：获取当前图层
        | number          // 数字：图层的 0 起始索引
        | string          // 字符串：图层名称
        | null            // 空值 (可选，根据实际逻辑)
        | FlashLayer           // 图层对象
        | { layer: FlashLayer };// 其他 Context 对象或兼容对象

    type FrameSource =
        | true            // 布尔值：获取当前帧
        | number          // 数字：帧的 0 起始索引
        | string          // 字符串：帧标签名称
        | RegExp          // 正则表达式：表示关键帧索引，例如 /2/
        | FlashFrame           // 帧对象
        | { frame: FlashFrame };// 其他 Context 对象或兼容对象

    type ElementSource =
        | true                    // 布尔值：获取第一个元素
        | number                  // 数字：元素的 0 起始索引
        | string                  // 字符串：元素名称
        | FlashElement                 // 元素对象
        | { element: FlashElement };   // 其他 Context 对象或兼容对象

    interface Context {
        readonly dom: FlashDocument | null; // 当前文档对象
        readonly item: Item | null; // 当前库项目
        readonly timeline: Timeline | null; // 当前时间轴
        readonly layer: FlashLayer | null; // 当前图层
        readonly frame: FlashFrame | null; // 当前帧
        readonly element: FlashElement | null; // 当前元素
    }

    interface Settable {
        setDOM(value: DOMSource): this;

        setTimeline(value: TimelineSource): this;

        setLayer(value: LayerSource): this;

        setFrame(value: FrameSource): this;

        setElement(value: ElementSource): this;
    }

    class Context implements Context, Settable {
        // private dom: FlashDocument | null; // 当前文档对象
        // private item: Item | null; // 当前库项目
        // private timeline: Timeline | null; // 当前时间轴
        // private layer: FlashLayer | null; // 当前图层
        // private frame: FlashFrame | null; // 当前帧
        // private element: FlashElement | null; // 当前元素

        private context: string; // 当前上下文类型标识

        constructor(dom?: DOMSource, timeline?: TimelineSource, layer?: LayerSource, frame?: FrameSource, element?: ElementSource);

        static create(dom?: boolean, timeline?: boolean, layer?: boolean, frame?: boolean, element?: boolean): Context;

        toString(): string;

        clone(): this;

        copy(context: this): void;

        setDOM(value: DOMSource): this;

        setTimeline(value: TimelineSource): this;

        setLayer(value: LayerSource): this;

        setFrame(value: FrameSource, allLayers?: boolean): this;

        setElement(value: ElementSource): this;

        goto(): this;

        update(dom?: boolean, timeline?: boolean, layer?: boolean, frame?: boolean): this;

        setKeyframe(keyframeIndex: number, layer?: LayerSource): this;

        select(): this;

        selectLayer(addToSelection?: boolean): this;

        selectFrame(addToSelection?: boolean): this;

        selectElement(addToSelection?: boolean): this;

        /**
         * 从短字符串创建上下文
         * @param {string} shortString - 短字符串格式：doc>item~layer@frame:element
         */
        from(shortString: string): void;


        readonly doc: FlashDocument | null; // 当前文档对象
        readonly selection: FlashElement[];//当前选择

        readonly library: FlashLibrary; // 库
        readonly items: Item[];//库项目列表
        readonly item: Item | null;//当前库项目

        readonly timelines: Timeline[];//时间轴列表
        readonly timeline: Timeline | null;//当前时间轴

        readonly layers: FlashLayer[];//所有图层对象
        readonly curLayerIndex: number;//当前图层索引
        readonly curLayer: FlashLayer | null;//当前图层对象

        readonly keyframes: FlashFrame[];//当前图层所有关键帧
        readonly keyframeIndexes: number[];//当前图层所有关键帧索引


        readonly frames: FlashFrame[];//所有帧对象
        readonly curFrameIndex: number | null;//当前帧索引
        readonly curFrame: FlashFrame | null;//当前帧对象

        readonly elements: FlashElement[];//当前帧所有元素
        readonly curElementIndex: number | null;//当前选中元素索引
        readonly element: FlashElement | null;//当前元素


        readonly firstSlLayerIndex: number | null;// 第一个选中图层的索引
        readonly firstSlLayer: FlashLayer | null; // 第一个选中图层对象

        readonly firstSlFrameIndex: number | null; // 第一个选中帧索引
        readonly firstSlFrame: FlashFrame | null; // 第一个选中帧对象
    }

    export = Context;
}