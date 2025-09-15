"use strict";
//Declare a function named greet that takes a string parameter name and returns a greeting message
const firstGreeting = (message) => {
    return `Hi ${message}`;
};
const products = [
    {
        id: 123,
        name: "Heaphone"
    },
    {
        id: 123456,
        name: "Iphone"
    },
    {
        id: 1234,
        name: "Car"
    }
];
const getProduct = function (id) {
    return products.find(product => product.id === id);
};
console.log(getProduct(1234));
//# sourceMappingURL=FunctionsExercises.js.map