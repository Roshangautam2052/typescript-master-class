"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    addHolidays(holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
class ItDepartment extends Department {
    constructor() {
        super("IT Deparmtent");
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length == 0) {
            return console.log("There are no holidays");
        }
        console.log(`Here is the list of ${itDepartment.name}`);
        this.holidays.forEach((holiday, index) => console.log(`${index + 1}.$ .${holiday.reason}, ${holiday.date}`));
    }
}
class AdminDepartent extends Department {
    constructor() {
        super("Admin Department");
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length == 0) {
            return console.log("There are no holidays");
        }
        console.log(`Here is the list of ${adminDepart.name}`);
        this.holidays.forEach((holiday, index) => console.log(`${index + 1}.$ .${holiday.reason}, ${holiday.date}`));
    }
}
const itDepartment = new ItDepartment();
// This is something that we don't want our code to do for us we don't want
//  to make the constructor public so that any other departments can be created from the child classes
// we don't want to make the value acessible to the outside users 
const argiDepartment = new ItDepartment();
const itHolidays = [
    {
        date: new Date(2025, 11, 11),
        reason: "Admin Department Day",
    },
    {
        date: new Date(2025, 11, 12),
        reason: "Christmas",
    }
];
const firstItDepartment = new ItDepartment();
const adminDepart = new AdminDepartent();
firstItDepartment.addHolidays(itHolidays);
adminDepart.addHolidays(itHolidays);
firstItDepartment.printHolidays();
adminDepart.printHolidays();
//# sourceMappingURL=Department.js.map