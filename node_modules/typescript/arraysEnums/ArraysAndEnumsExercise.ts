// Create an array numbers that only accepts numbers and another array string that only accept strings

type Numbers = number[];

let firstArray:Numbers = [1,2,3,4,5];

type Strings = string[];

let stringArray:Strings = ["a", "b", "e", "f"];


//Create a tuple person that holds a string (name) and a number(age)

type Person = [string, number];

let person1:Person = ["Roshan", 12];

// Create a readonly Array colors that holds strings and a readonly tuple point that holds two numbers
//(x,y). Attempt to modify their elements and observe the TypeScript error.


type ColorsArray = readonly string[];
type ReadOnlyPoint = readonly[number,number];


let firstColorArray:ColorsArray = ["Green", "Blue", "Black"];

let originPoint:ReadOnlyPoint = [0,0];


enum StatusEnum {
    ACTIVE = "Active",
    INACTIVE = "Inactive",
    PENDING = "Pending",
};

type Status1 = {
    [key:string]:string
}
let status2:Status1 = {
        active : "Active",
        inactive: "Inactive",
        pending: "Pending", 
    } as const
