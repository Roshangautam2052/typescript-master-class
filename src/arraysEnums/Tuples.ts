// we want to asssign the elements with the fixed order (string, string, number)
// this won't do the job as the order can be of any type ["John", "18", "Doe"]
let person12:(number | string)[] = ["John", "Doe", 18];

// This will always follow the same order (string, string and number)
let secondPerson:[string, string, number] = ["John", "Doe", 20];

type listOfStudents = [number, boolean, ...string[]]

let listOfPassingStudnets = [3, true, "John", "Stella", "Mark"]