"use strict";
function TimeStamp(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.timeStamp = new Date();
        }
        getTimeStamp() {
            return this.timeStamp;
        }
    };
}
class TerminalUser1 {
    constructor(name) {
        this.name = name;
    }
}
class UserWithTimeStamp extends TimeStamp(TerminalUser1) {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age" ${this.age}`);
        console.log(`Timestamp: ${this.getTimeStamp()}`);
    }
}
const user1 = new UserWithTimeStamp("Alice", 30);
console.log(user1);
//# sourceMappingURL=User.js.map