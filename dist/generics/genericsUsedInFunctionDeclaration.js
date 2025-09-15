"use strict";
// We use this function signature when we want to use the same function to deal with different data types
// This function can deal with both string and number data types 
const getFirstElement = (arr) => {
    return arr[0];
};
const numbersArray = [1, 2, 3, 4, 5];
const stringArray12312 = ["a", "b", "c", "d"];
let numberOutput = getFirstElement(numbersArray);
let stringOutput = getFirstElement(stringArray);
const getFirstString = (array) => {
    return array[0];
};
const getFirstNumber = (array) => {
    return array[0];
};
//# sourceMappingURL=genericsUsedInFunctionDeclaration.js.map