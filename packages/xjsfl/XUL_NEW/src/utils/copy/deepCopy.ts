export class Copy {
    /**
     * 深拷贝（后面可替换为 structuredClone）
     */
    static deepCopy<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }
}
