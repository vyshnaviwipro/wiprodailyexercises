var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(123);
console.log(numberBox.getValue());
var stringBox = new Box("vyshnavi");
console.log(stringBox.getValue());
