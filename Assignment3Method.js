var Geometry = /** @class */ (function () {
    function Geometry() {
    }
    Geometry.prototype.AddNumber = function (a, b, c) {
        if (c === void 0) { c = 0; }
        return a + b + c;
    };
    Geometry.prototype.multiplyNumber = function (a, b) {
        return;
    };
    Geometry.prototype.subtractNumber = function (a, b) {
    };
    return Geometry;
}());
var geoObj = new Geometry();
var result = geoObj.AddNumber(2, 3, 6);
console.log(geoObj);
console.log(result);
