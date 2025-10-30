"use strict";
class User565 {
    constructor(name, email) {
        this.name = name; // get from this class the name field 
        this.email = email;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const user565 = new User565("Mary", "mary@gmail.com");
console.log(user565.greet);
//user565.email("hello@email.coom");
