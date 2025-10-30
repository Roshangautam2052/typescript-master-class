"use strict";
class User1234 {
    constructor(name, email, lastName) {
        this.name = name;
        this.email = email;
        this.lastname = lastName;
    }
}
class Admin extends User1234 {
    constructor(name, email, userReporting, lastName) {
        super(name, email, lastName);
        this.isAdmin = true;
        this.userReporting = userReporting;
    }
}
const user1234 = new User1234("John", "email", "Doe");
const admin = new Admin("Mark", "mark@gmail.com", 12);
