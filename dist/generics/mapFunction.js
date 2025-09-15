"use strict";
// Creating a map function in typeScript 
const mapFunction = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let changedValue = predicate(array[i]);
        result.push(changedValue);
    }
    return result;
};
function incrementByOne(value) {
    return value + 1;
}
const sampleArray = [1, 2, 3, 4];
console.log(mapFunction(sampleArray, incrementByOne));
//# sourceMappingURL=mapFunction.js.map