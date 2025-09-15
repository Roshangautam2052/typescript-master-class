"use strict";
class Hospital {
    constructor(name, address, employeeNumbers) {
        this.name = name;
        this.address = address;
        this.numberOfEmployees = employeeNumbers;
    }
    getNumberOfEmployees() {
        return this.numberOfEmployees;
    }
}
class MaternityHospital extends Hospital {
    constructor(name, address, numberOfEmployees, numberOfMidwives, departments) {
        super(name, address, numberOfEmployees);
        this.numberofMidwives = numberOfMidwives;
        this.departments = departments;
    }
    getNumberOfEmployees() {
        return this.numberofMidwives;
    }
}
const newCrossHospital = new MaternityHospital("MaternityHospital", "Wolverhampton", 100, 12, ["Gyno", "Delivery-suite"]);
//# sourceMappingURL=Hospital.js.map