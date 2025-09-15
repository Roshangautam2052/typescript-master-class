"use strict";
// Those functions which are required all the time are called default parameters
// optional parameters can only be declared only after default parameters
function intro(name, age, country) {
    if (country) {
        return `My name is ${name},  I am ${age} years old and I live in ${country}`;
    }
    return `My name is ${name} and I am ${age} years old`;
}
intro("John", 12);
//# sourceMappingURL=defaultParameters.js.map