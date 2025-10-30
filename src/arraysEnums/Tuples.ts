// we want to asssign the elements with the fixed order (string, string, number)
// this won't do the job as the order can be of any type ["John", "18", "Doe"]
let person123:(number | string)[] = ["John", "Doe", 18];

// This will always follow the same order (string, string and number)
let secondPerson:[string, string, number] = ["John", "Doe", 20];

type User19 = [string, string, number, string?];

let user19:User19 = ["Mark", "Doe", 32, "mark@gmail.com"]

type listOfStudents = [number, boolean, ...string[]]

let listOfPassingStudnets = [3, true, "John", "Stella", "Mark"]