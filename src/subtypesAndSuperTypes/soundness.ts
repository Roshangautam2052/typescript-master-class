/**
 * A type system is sound if it gaurantess that the errors will 
 * never occur at runtime ensuring that every operation on value is valid according to a 
 * declared type
 * 
 * TypeScript is not a sound programming language itself
 * 
 * Here is the example on how typeScript has been laid out 
 */

let value1: unknown = "Heelo, TypeScript!";

let str: number = value1 as number // assertion

type ChineseUser = {
    name: string;
    age: number;
};


const chineseUser = {name:"Alice", age: 12, isAdmin: true}

/**
 * Here even if chineseUser has an additional field isAdmin 
 * typeScript is not able to distinguish in between 
 * ChineseUser and chinenseUser 
 * which comprisises the soundness of langauge 
 */
const newUser: ChineseUser = chineseUser 


/**
 * A funtion which can accept a supertype 
 * can also accept its subtype is something called 
 * bivariance and this is also a flaw of typeScript 
 */

type AmazonAnimal = {
    name: string;
};


type Dog = AmazonAnimal & {
    breed: string;
};


let handleAnimal = (animal: AmazonAnimal) => {
    console.log('Handling animal')
}

 // Here even if handleAnimal should take only Animal typeScript doesnot complaion about this 
let handleDog:(dog: Dog) => void = handleAnimal

handleDog({name: "Tommy", breed: "Labrador"})

/**
 * While using restParameters they are optional 
 * and may/may not be passed
 */

function lognumber(...numbers: number[]){
    console.log(numbers);
}


console.log(lognumber());


/**
 * This is an unsound behaviour 
 * as even if we have runFunction take a function 
 * returning void and getPI returning a number 
 * Even if we pass getPI function inside runFunction 
 * typeScript doesnot complaion about this
 * 
 * 
 */

function runFunction(func: () => void){
    func();
}


const getPI = () => 3.14


runFunction(getPI)

/**
 * We have this unsound behaviour of 
 * typeScript so as to have interoperaiblity 
 * with JavaScript
 */