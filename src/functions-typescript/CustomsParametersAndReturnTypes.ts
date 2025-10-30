enum AgeUnit {
    Years = "years",
    Months = "months"
}

type Person1234 = {
    name: string,
    age: number;
    ageUnit: AgeUnit;

}

const person1234:Person1234 = {
    name: "Scott",
    age: 30,
    ageUnit: AgeUnit.Years
}


function convertAgeToMonths(person: Person1234):Person1234 {
    if(person.ageUnit === AgeUnit.Years){
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
};

console.log(convertAgeToMonths(person1234));