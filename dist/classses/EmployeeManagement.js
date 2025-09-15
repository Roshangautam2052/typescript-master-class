"use strict";
/**
 * /**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */
class Employee {
    static getCompanyName() {
        return this.companyName;
    }
    constructor(name, age, _salary, id) {
        this.name = name;
        this.age = age;
        this._salary = _salary;
        this.id = id;
    }
    set salary(salary) {
        if (salary < 0) {
            throw new Error("Salary must be positive");
        }
        else {
            this.salary = salary;
        }
    }
    get salary() {
        return this._salary;
    }
    getDetails() {
        return `Name:${this.name}, Age:${this.age}, Salary:${this.salary}`;
    }
}
Employee.companyName = "Rubix Solutions";
;
class Manager extends Employee {
    constructor(name, age, salary, id, department) {
        super(name, age, salary, id);
        this.department = department;
    }
    getDetails() {
        return `${super.getDetails()}, Department:${this.department}`;
    }
}
const employee = new Employee("Alice", 20, 50000, 1);
console.log(employee.getDetails());
const manager = new Manager("Bob", 40, 70000, 2, "Engineering");
console.log(manager.getDetails);
//# sourceMappingURL=EmployeeManagement.js.map