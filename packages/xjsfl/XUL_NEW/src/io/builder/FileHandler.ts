/**
 * 文件处理接口
 * 定义了文件读取和保存的标准行为
 */
export interface IFileHandler {
    // /**
    //  * 读取文件
    //  * @param path 文件路径
    //  * @returns 返回解析后的数据（例如 JSON 对象）
    //  */
    // load(path: string): any;

    /**
     * 保存文件
     * @param path 文件路径
     * @param data 需要保存的数据
     */
    save(path: string, data: any): void;
}