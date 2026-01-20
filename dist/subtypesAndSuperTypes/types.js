"use strict";
function greetPerson(person) {
    return `Hello ${person.name}! You are ${person.age}`;
}
const britishEmployee = {
    name: "Alice",
    age: 30,
    employeeId: 102,
    department: "Computer science"
};
console.log(greetPerson(britishEmployee));
// But we cannot do this similar operation due to a check called as access property check
// console.log(greetPerson({
//     name: "Alice",
//     age: 30,
//     employeeId: 102,
//     department: "Computer science"
// }))
