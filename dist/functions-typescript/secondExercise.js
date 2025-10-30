"use strict";
const log = (message) => {
    console.log(message);
};
const throwError1234 = (error) => {
    throw new Error(error);
};
function processData(data) {
    log(`Processing ${data}`);
}
// function errorHandlingScenario(): never {
//     throwError("An unexpected error occurred!");
// }
console.log(log("Hello TypeScript"));
console.log(throwError("Test error"));
console.log(processData("sample data"));
//console.log(errorHandlingScenario("An unexpected error occured!"));
