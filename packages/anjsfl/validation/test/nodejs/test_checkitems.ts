// 1. 先获取数据（在调用处）
import {CheckSelectedItems} from "../../src";

const selectedItems = fl.getDocumentDOM().library.getSelectedItems();

// 2. 再传入校验（使用重构后的函数）
const result = CheckSelectedItems(selectedItems, LibraryCondition.OnlyOne);

result.match({
    Ok: (items) => {
        console.log("校验通过，处理业务:", items[0].name);
    },
    Err: (error) => {
        console.error("校验失败:", error);
    }
});
