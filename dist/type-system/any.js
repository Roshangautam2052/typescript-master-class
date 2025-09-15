"use strict";
let firstNam = "Mark";
// any type can accept all types of number
function returnParam(param) {
    return param;
}
function multiplyByTwo(number) {
    if (typeof number == "number") {
        return number * 2;
    }
    return "Please provide a valid number";
}
console.log(multiplyByTwo(4));
console.log(multiplyByTwo("string"));
//# sourceMappingURL=any.js.map