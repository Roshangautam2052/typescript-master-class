"use strict";
function multiplyBy(by, ...numbers) {
    return numbers.map((number) => by * number);
}
console.log(multiplyBy(2, 3, 4, 5, 6, 7, 7, 8));
const args = [8, 5];
const angle = Math.atan2(...args);
let numbersObject = {
    a: 2,
    b: 3,
    c: 4,
};
// Due to the usage of parameter desctructuring we can pass the parameters as numbers
function sum({ a, b, c }) {
    return a + b + c;
}
console.log(sum(numbersObject));
console.log(sum(numbersObject));
//# sourceMappingURL=RestParametersAndArguments.js.map