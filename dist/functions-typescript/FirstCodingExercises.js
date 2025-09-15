"use strict";
const greet = (name = "Guest") => {
    return `Hello. ${name}!`;
};
const calculateArea = (width, height = 10) => {
    return width * height;
};
const checkStatus = (isActive = true) => {
    if (isActive) {
        return "Active";
    }
    return "Inactive";
};
// Testing using console.log
console.log(greet);
console.log(calculateArea(12));
console.log(checkStatus(false));
//# sourceMappingURL=FirstCodingExercises.js.map