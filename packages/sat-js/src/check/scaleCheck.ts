
function IsScaleLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.scaleX === "number" && typeof obj.scaleY === "number");
}