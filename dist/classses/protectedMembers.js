"use strict";
class User3 {
    constructor(name, email, phone, lastName) {
        this.name = name,
            this.email = email,
            this.phone = phone,
            this.lastname = lastName;
    }
}
class Admin3 extends User3 {
    constructor(name, email, phone, id, hasRole, lastName) {
        super(name, email, phone, lastName);
        this.hasRole = hasRole;
        this.id = id;
    }
    displayOutput() {
        console.log(this.phone);
    }
}
const firstUserFromUk = new User3("Harry", "harry@gmail.com", 123456, "Potter");
//# sourceMappingURL=protectedMembers.js.map