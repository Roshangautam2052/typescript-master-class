"use strict";
/**
 * Nominal vs Structural types
 */
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
// Since they have the same structure they are equal as typeScript use structural type-System
sphere = ball;
ball = sphere;
// Here since Tube has all the fields of a ball along with an extra field length they can be assigned to equal
let newTube = {
    diameter: 12,
    length: 3,
};
// This can be assigned 
ball = newTube;
sphere = newTube;
const validateUserINput = (input) => {
    const simpleValidatedInput = input.trim();
    return simpleValidatedInput;
};
const printName = (name) => {
    console.log(name);
};
//Here we have validated the UserInput
printName(validateUserINput("John"));
// But we can also do something like this 
// printName("John"); // typeScript doesnot complain even after adding ValidatedInput String this one complains
