(function() {
    // 1. 提取核心信息到全局变量
    // WIN 24,0,0,305
    var APP_VERSION_STRING = fl.version;
    var PLATFORM_CODE = APP_VERSION_STRING.substr(0, 3).toLowerCase();

    // 2. 解析版本号
    // --------------------------------------------------
    var VERSION_NUMBER = 0;
    var VERSION_NAME = "Unknown";

    var versionMatch = APP_VERSION_STRING.match(/\w+ (\d+)/);
    if (versionMatch) {
        VERSION_NUMBER = parseInt(versionMatch[1]);

        // 版本映射表
        var VERSION_MAP = { "9": "CS3", "10": "CS4", "11": "CS5", "12": "CS6","13": "CC", "14": "CC 2014", "15": "CC 2015", "16": "Animate CC", "17": "Animate CC 2017", "18": "Animate CC 2018", "19": "Animate CC 2019", "20": "Animate 2020", "21": "Animate 2021", "22": "Animate 2022", "23": "Animate 2023", "24": "Animate 2024" };

        VERSION_NAME = VERSION_MAP[VERSION_NUMBER] || "Unknown";
    }


    window.AnJsflScript = window.AnJsflScript || {};
    window.AnJsflScript.app = {
        platform: PLATFORM_CODE,
        version: VERSION_NUMBER,
        name: VERSION_NAME,
        os: {
            mac: PLATFORM_CODE === "mac",
            win: PLATFORM_CODE === "win"
        }
    };


    // console.log(APP_VERSION_STRING);
    //
    // console.log(AnJsflScript.app.platform);
    // console.log(AnJsflScript.app.version);
    // console.log(AnJsflScript.app.name);
    // console.log(AnJsflScript.app.os.mac);
    // console.log(AnJsflScript.app.os.win);

    var cwd = window.AnJsflScript.$ProjectFileDir$;
    window.AnJsflScript.folders = {
        AnJsflScript: cwd,
        // core: cwd + 'core/',
        // modules: cwd + 'modules/',
        // user: cwd + 'user/',
        Log: cwd + "/config/Log", // console.log 输出日志
        flash: fl.configURI,
        swf: fl.configURI + "WindowSWF/",

        // H:\project\js\AnJsflScript-ts\packages\xjsfl\XUL
        "@xjsfl/XUL":cwd + "/packages/xjsfl/XUL/"
    };

})();