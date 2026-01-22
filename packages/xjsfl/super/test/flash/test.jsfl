var aa = {
    x: 0,
    y: 0
}

var Superdoc1 = {
    properties: {
        set aa(x, y) {
            console.log(x, y)
            aa.x = x;
            aa.y = y;
        },
        get aa(propertyName) {
            console.log(propertyName);
            return aa;
            // return document.getElementProperty(propertyName);
        }
    }
}


Superdoc1.properties.aa = {x: 10, y: 20}

console.log(Superdoc1.properties.aa.x);
console.log(Superdoc1.properties.aa.y);

