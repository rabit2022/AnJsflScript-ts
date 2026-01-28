// 假设这是从外部获取的文档
const currentDoc: Document | null = fl.getDocumentDOM(); 

const result = checkDocument(currentDoc);

// 方式一：使用 match (函数式风格)
result.match({
    Ok: (doc) => {
        console.log("文档有效，开始操作:", doc.name);
        // 在这里执行后续逻辑
    },
    Err: (error) => {
        console.error("错误:", error);
    }
});

// 方式二：使用 isOk (命令式风格)
if (result.isOk()) {
    const doc = result.unwrap();
    console.log("文档有效:", doc.name);
} else {
    console.error("错误:", result.unwrapErr());
}
