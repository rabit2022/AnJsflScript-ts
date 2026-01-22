console.log(fl.scriptURI);


// fl.runScript(fl.scriptURI.replace("t1.jsfl","t2.jsfl"));
var undefined1 = undefined;


undefined1 = FLfile.platformPathToURI(__dirname)+ "/t2.jsfl";
console.log(undefined1);


fl.runScript(undefined1);

