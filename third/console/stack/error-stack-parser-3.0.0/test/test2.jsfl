(function() {

    line = "(\"_@r7\",(function (ErrorStackParser) {\n" +
        "function Main() {try {throw new Error(\"Something went wrong!\");} catch (err) {console.log(err.stack);const frames = ErrorStackParser.parse(err);console.log(JSON.stringify(frames));frames.forEach(function (frame) {});}}\n" +
        "\n" +
        "Main();}),[object Array],(void 0))@H:\\project\\js\\AnJsflScript-ts\\third\\require\\requirejs\\require-js.jsfl:1852"

    var match = line.match(/([\s\S]*)@(.*?):(\d+)$/);

    if (match) {
        const beforeAt = match[1];   // @ 之前的所有内容（含换行）
        const filePath = match[2];   // H:\project\...
        const lineNum = match[3];   // "1580"
        console.log("Before @:", beforeAt);
        console.log("File:", filePath);
        console.log("Line:", lineNum);
    }

})();
