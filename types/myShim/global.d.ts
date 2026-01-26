interface AnJsflScript {
    importFlashScripts: (scripts: string[]) => void;
    // $ProjectFileDir$: string;
    app: {
        platform: string,
        version: number,
        name: string,
        os: {
            mac: boolean,
            win: boolean
        }
    };
    folders: {
        AnJsflScript: string,
        Log: string,
        flash: string,
        swf: string
    };
}

declare var AnJsflScript: AnJsflScript;
