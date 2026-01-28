require(["error-stack-parser"], function(ErrorStackParser) {

    function Main() {

        try {
            throw new Error("Something went wrong!");
        } catch (err) {
            // console.log(err.stack);
            const frames = ErrorStackParser.parse(err);
            // console.log(frames);
            // console.log(JSON.stringify(frames));

            // 移除属性
            const stackFramesCopy = JSON.parse(JSON.stringify(frames));
            stackFramesCopy.forEach(function (frame)  {
                delete frame.source;
                delete frame.args;
            });
            console.log(JSON.stringify(stackFramesCopy));

        }

    }

    Main();
});
