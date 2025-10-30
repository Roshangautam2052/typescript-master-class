"use strict";
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const person1234 = {
    name: "Scott",
    age: 30,
    ageUnit: AgeUnit.Years
};
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}
;
console.log(convertAgeToMonths(person1234));
