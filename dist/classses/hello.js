"use strict";
class RamUser {
    constructor(name, email) {
        this.name = name; // get from this class the name field 
        this.email = email;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const ramUser = new RamUser("Mary", "mary@gmail.com");
console.log(ramUser.greet);
//# sourceMappingURL=hello.js.map