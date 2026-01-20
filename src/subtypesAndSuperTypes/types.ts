type BritishPerson ={
    name: string;
    age: number;
};

type BritishEmployee = BritishPerson & {
    employeeId: number;
    department: string;
};


type BritishStudent = BritishPerson & {
    studentId: number;
    major: string;
};

function greetPerson(person:BritishPerson): string {
    return `Hello ${person.name}! You are ${person.age}`;
}


const britishEmployee: BritishEmployee = {
    name: "Alice",
    age: 30,
    employeeId: 102,
    department: "Computer science"

};

console.log(greetPerson(britishEmployee))

// But we cannot do this similar operation due to a check called as access property check

// console.log(greetPerson({
//     name: "Alice",
//     age: 30,
//     employeeId: 102,
//     department: "Computer science"
// }))