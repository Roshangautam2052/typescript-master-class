let person = {
    name: "Mark",
    age: 32,
};

let car: Object = {
    brand: "BMW",
    color: "Black",
};

// This is not complained in typescript but it is wrong as object can also be functions 
car = [];

// Defined using object literal syntax
let newCar: {
    brand: string;
    color: string;
} = {
    brand: "BMW",
    color: "Black",
};

newCar = [];