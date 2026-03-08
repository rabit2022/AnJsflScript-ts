declare module "Context" {
    type DomType = Boolean | Document | Number | String | Context | undefined;

    type TimelineType = Timeline | Boolean | SymbolItem | SymbolInstance | Context | String | Number | null | undefined;

    type LayerType = Layer | Boolean | Number | String | Context | undefined;

    type FrameType = Frame | Boolean | Number | String | RegExp | Context | undefined;

    type ElementType = Element | Boolean | Number | String | Context | undefined;

    export class Context {
        // dom: Document | null; // 当前文档对象
        // item: Item | null; // 当前库项目
        // timeline: Timeline | null; // 当前时间轴
        // layer: Layer | null; // 当前图层
        // frame: Frame | null; // 当前帧
        // element: Element | null; // 当前元素
        // private context: string; // 当前上下文类型标识

        constructor(dom?: DomType, timeline?: TimelineType, layer?: LayerType, frame?: FrameType, element?: ElementType);

        static create(dom?: boolean, timeline?: boolean, layer?: boolean, frame?: boolean, element?: boolean): Context;

        toString(): string;

        clone(): Context;

        copy(context: Context): void;

        setDOM(value: DomType): Context;


        setTimeline(value: TimelineType): Context;


        setLayer(value: LayerType): Context;


        setFrame(value: FrameType, allLayers?: boolean): Context;

        setElement(value: ElementType): Context;

        goto(): Context;

        update(dom?: boolean, timeline?: boolean, layer?: boolean, frame?: boolean): Context;

        setKeyframe(keyframeIndex: number, layer?: LayerType): Context;

        select(): Context;

        selectLayer(addToSelection?: boolean): Context;

        selectFrame(addToSelection?: boolean): Context;

        selectElement(addToSelection?: boolean): Context;

        // /**
        //  * 从短字符串创建上下文
        //  * @param {string} shortString - 短字符串格式：doc>item~layer@frame:element
        //  */
        // from(shortString: string): void;
    }

    // export = Context;
}