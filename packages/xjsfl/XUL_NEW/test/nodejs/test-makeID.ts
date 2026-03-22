
// 测试数据集
import {makeId} from "../../src/Constants/ID";

const testCases = [
    "User-123",
    "Product_Code v2.0",
    "Hello World!",
    "ID_001/Test",
    "123-ABC",
    "Special@Case#Here",
    "  Leading Spaces ",
    "NoSpecialChars123"
];

console.log("--- makeId 函数测试结果 ---");

testCases.forEach(input => {
    const result = makeId(input);
    console.log(`输入: "${input}"  =>  输出: "${result}"`);
});

// 预期输出对照：
// 输入: "User-123"              =>  输出: "user"
// 输入: "Product_Code v2.0"     =>  输出: "productcodev2"
// 输入: "Hello World!"          =>  输出: "helloworld"
// 输入: "ID_001/Test"           =>  输出: "id001"
// 输入: "123-ABC"               =>  输出: "123"
// 输入: "Special@Case#Here"     =>  输出: "special" (在 @ 处截断)
// 输入: "  Leading Spaces "     =>  输出: "leadingspaces" (首部空格保留在截断段内，最后被移除)
// 输入: "NoSpecialChars123"     =>  输出: "nospecialchars123"