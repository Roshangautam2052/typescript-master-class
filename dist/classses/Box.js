"use strict";
class Box {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
const numberBox = new Box(123);
// numberBox.value = "string";
const stringBox = new Box("1234"); // manually typecasting the value 
//# sourceMappingURL=Box.js.map