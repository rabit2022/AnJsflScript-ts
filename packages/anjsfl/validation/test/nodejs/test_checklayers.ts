// 1. 获取数据（在调用处）
import {CheckSelectedLayers} from "../../src/validation/flash/CheckSelectedLayers";

const currentTimeline = fl.getDocumentDOM().getTimeline();
const selectedIndices = currentTimeline.getSelectedLayers();

// 2. 校验数据（使用重构后的函数）
const result = CheckSelectedLayers(selectedIndices, LayerCondition.EQ1);

result.match({
    Ok: (indices) => {
        console.log("选中了图层:", indices[0]);
    },
    Err: (error) => {
        console.error(error);
    }
});
