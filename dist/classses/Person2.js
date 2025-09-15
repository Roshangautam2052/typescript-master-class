"use strict";
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
    // set methods have only one parameters 
    set age(age) {
        if (age > 200 && age > 0) {
            throw new Error("The age must be within the range of 200 to 0");
        }
        this._age = age;
    }
    // get methods don't have any parameters 
    get age() {
        if (this._age === undefined) {
            throw new Error("Age property is not defined");
        }
        return this._age;
    }
}
const johnDoe = new Person2("John", "Doe");
const mark5 = new Person2("Mark", "Doe");
johnDoe.age = 45; // we are using set function to set the age
console.log(john.age);
//# sourceMappingURL=Person2.js.map