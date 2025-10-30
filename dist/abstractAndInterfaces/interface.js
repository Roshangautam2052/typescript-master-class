"use strict";
class Admin11 {
    constructor(userName, email, adminLevel) {
        this.userName = userName;
        this.email = email;
        this.adminLevel = adminLevel;
    }
    login() {
        console.log("Admin is now logged in");
    }
}
class Customer {
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }
    login() {
        console.log("Customer is now logged in");
    }
}
class Auth {
    static login(user) {
        user.login();
    }
}
const admin12 = new Admin11("mark", "mark@email.com", 1);
const customer12 = new Customer("john", "john@gmail.com");
Auth.login(admin12);
Auth.login(customer12);
