(function () {
    var uri = fl.scriptURI.replace(".jsfl", ".xul");
    var settings = fl.xmlPanel(uri)
    console.log(settings);
})();