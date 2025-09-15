"use strict";
class OfficeAdmin {
    constructor(name, email, lastName) {
        this.name = name;
        this.email = email;
        this.lastname = lastName;
    }
}
class BirmighamAdmin extends OfficeAdmin {
    constructor(name, email, userReporting, lastName) {
        super(name, email, lastName);
        this.isAdmin = true;
        this.userReporting = userReporting;
    }
}
const officeAdmin = new OfficeAdmin("John", "email", "Doe");
const birminghamAdmin = new BirmighamAdmin("Mark", "mark@gmail.com", 12);
//# sourceMappingURL=inheritance.js.map