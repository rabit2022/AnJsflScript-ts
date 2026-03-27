export class ColumnsManager {
    // 1. 定义私有静态字段，存储实际数据
    private static _columns: number[] = [100, 180];

    // 2. 定义公共静态访问器 (Getter)
    static get columns(): number[] {
        return this._columns;
    }

    //
    // // 3. 定义公共静态访问器 (Setter)
    // // 注意：这里保留了 Array.isArray 检查，如果不需要检查可以进一步简化
    // static set columns(value: number[]) {
    //     if (Array.isArray(value)) {
    //         this._columns = value;
    //     } else {
    //         throw new Error("Columns must be an array");
    //     }
    // }

    static get labelWidth() {
        return this._columns[0];
    }

    static set labelWidth(width: number) {
        this._columns[0] = width;
    }

    static get controlWidth() {
        return this._columns[1];
    }

    static set controlWidth(value: number) {
        this._columns[1] = value;
    }

}