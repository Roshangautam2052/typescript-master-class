/**
 * Nominal vs Structural types
 */


interface Ball {
    diameter: number;
}


interface Sphere {
    diameter: number;
}

let ball: Ball = {diameter: 10};
let sphere: Sphere = {diameter: 20};

// Since they have the same structure they are equal as typeScript use structural type-System
sphere = ball;
ball = sphere;


interface Tube {
    diameter: number;
    length: number;
}

// Here since Tube has all the fields of a ball along with an extra field length they can be assigned to equal
let newTube: Tube = {
    diameter: 12,
    length:3,
};

// This can be assigned 
ball = newTube
sphere = newTube

// For making a stricter type System 
//Using a intersection type to make typescript behave as nominal type
type ValidatedInputString = string &{__brand: "Validated Input"};

const validateUserINput =(input:string)=> {
    const simpleValidatedInput = input.trim();
    return simpleValidatedInput as ValidatedInputString;
};


const printName = (name: ValidatedInputString ) => {
    console.log(name);
};

//Here we have validated the UserInput
printName(validateUserINput("John"));

// But we can also do something like this 

// printName("John"); // typeScript doesnot complain even after adding ValidatedInput String this one complains




