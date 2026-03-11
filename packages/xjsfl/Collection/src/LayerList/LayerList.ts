/**
 * @file: LayerList.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/6/20 12:55
 * @project: AnJsflScript
 * @description: 图层列表类，提供类似Python列表的操作方法
 */

/**
 * 图层列表类，提供类似Python列表的操作方法
 */
export class LayerList {
    private _timeline: Timeline;
    private _mode: "selected" | "all";

    /**
     * 创建图层列表实例
     * @param timeline 时间线对象
     * @param mode 图层模式：'selected' 仅选中的图层，'all' 所有图层
     */
    constructor(timeline?: Timeline, mode: "selected" | "all" = "all") {
        const doc = fl.getDocumentDOM()!;
        this._timeline = timeline || doc.getTimeline();
        this._mode = mode;
    }

    /**
     * 获取图层列表
     * 根据模式返回所有图层或选中的图层
     */
    get layers(): Layer[] {
        switch (this._mode) {
            case "selected":
                const selectedLayers = this._timeline.getSelectedLayers();
                const globalLayers = this._timeline.layers;
                return selectedLayers.map((layer) => globalLayers[layer]);
            case "all":
                return this._timeline.layers;
            default:
                throw new Error("Invalid mode: " + this._mode);
        }
    }

    /**
     * 添加一个图层到列表末尾
     * @param layerName 图层名称
     * @param layerType 图层类型
     * @returns 新图层的全局索引
     */
    append(
        layerName?: string,
        layerType: "normal" | "guide" | "guided" | "mask" | "masked" | "folder" = "normal"
    ): number {
        const globalEndIndex = this._toGlobalIndex(this.layers.length - 1);
        this._timeline.currentLayer = globalEndIndex;

        // 添加新图层
        const newLayerIndex = this._timeline.addNewLayer(
            layerName || undefined,
            layerType,
            false
        );

        return newLayerIndex;
    }

    /**
     * 插入一个图层到指定位置
     * @param index 插入位置（局部索引）
     * @param layerName 图层名称
     * @param layerType 图层类型
     * @returns 新图层的全局索引
     */
    insert(
        index: number,
        layerName?: string,
        layerType: "normal" | "guide" | "guided" | "mask" | "masked" | "folder" = "normal"
    ): number {
        // 选中目标图层位置
        const globalIndex = this._toGlobalIndex(index);
        this._timeline.currentLayer = globalIndex;

        // 添加新图层
        const newLayerIndex = this._timeline.addNewLayer(
            layerName || "",
            layerType,
            true // 插入到当前层上方
        );

        return newLayerIndex;
    }

    /**
     * 对图层列表进行排序
     * @param compareFn 比较函数，返回正数表示layer1>layer2，负数表示layer1<layer2，0表示相等
     */
    sort(compareFn: (layer1: Layer, layer2: Layer) => number): void {
        for (let i = 0; i < this.layers.length; i++) {
            for (let j = i + 1; j < this.layers.length; j++) {
                if (compareFn(this.layers[i], this.layers[j]) > 0) {
                    const global_i = this._toGlobalIndex(i);
                    const global_j = this._toGlobalIndex(j);

                    // 调用导入的swapLayers函数
                    swapLayers(this._timeline, global_i, global_j);
                }
            }
        }
    }

    /**
     * 反转图层列表顺序
     */
    reverse(): void {
        for (let i = 0; i < this.layers.length / 2; i++) {
            const from = this._toGlobalIndex(i);
            const to = this._toGlobalIndex(this.layers.length - 1 - i);

            // 调用导入的swapLayers函数
            swapLayers(this._timeline, from, to);
        }
    }

    /**
     * 局部索引转换为全局索引
     * @param localIndex 局部索引（在this.layers中的索引）
     * @returns 全局索引（在this._timeline.layers中的索引）
     */
    private _toGlobalIndex(localIndex: number): number {
        if (localIndex < 0 || localIndex >= this.layers.length) {
            throw new Error(`局部索引 ${localIndex} 超出范围`);
        }

        const toMoveLayer = this.layers[localIndex];
        const globalLayers = this._timeline.layers;
        const globalIndex = globalLayers.indexOf(toMoveLayer);

        if (globalIndex === -1) {
            throw new Error(`无法找到图层对应的全局索引`);
        }

        return globalIndex;
    }
}
/**
 * 交换图层
 */
function swapLayers(timeline:Timeline, layerIndex1:number, layerIndex2:number) {
    var layers = timeline.layers; // 获取所有图层

    if (
        !(
            layerIndex1 >= 0 &&
            layerIndex1 < layers.length &&
            layerIndex2 >= 0 &&
            layerIndex2 < layers.length
        )
    ) {
        console.error("图层索引超出范围。");
        return;
    }

    // 如果两个索引相同，无需交换
    if (layerIndex1 === layerIndex2) {
        console.info("图层索引相同，无需交换。");
        return;
    }

    // 交换图层顺序
    timeline.reorderLayer(layerIndex1, layerIndex2);
    timeline.reorderLayer(layerIndex2, layerIndex1);

    console.info(
        `layerUtil.js:图层${layerIndex1}(${layers[layerIndex1].name})和图层${layerIndex2}(${layers[layerIndex2].name})交换成功。`
    );
}

