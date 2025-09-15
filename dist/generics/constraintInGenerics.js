"use strict";
// This is how we can add constraints in Generics in TypeScript
function logLength(item) {
    console.log(item.length);
}
const numberArray = [1, 2, 34, 5];
const stringArray1 = ["1", "2", "3"];
const john = {
    name: "John",
    age: 12
};
console.log(logLength(numberArray)); // works fine
console.log(logLength(stringArray1));
//console.log(logLength(john))// This is not valid because object deosnot have length
//# sourceMappingURL=constraintInGenerics.js.map