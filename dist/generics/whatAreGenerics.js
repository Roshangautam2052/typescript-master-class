"use strict";
// using Generics with named function
function returnParams(param) {
    return param;
}
// Is there a way to make the function generic and to annotate input as well as output using Generics 
function returnParams1(param) {
    return param;
}
// Now this function can be invoked using any type for example 
const return1 = returnParams1("123");
const return2 = returnParams1(123);
// Using Generics with function call signature or arrow function
const myParam = (param) => param;
// function expression 
const myParam2 = function (param) {
    return param;
};
//# sourceMappingURL=whatAreGenerics.js.map