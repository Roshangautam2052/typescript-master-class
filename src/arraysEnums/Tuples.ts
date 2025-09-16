// we want to asssign the elements with the fixed order (string, string, number)
// this won't do the job as the order can be of any type ["John", "18", "Doe"]
let person:(number | string)[] = ["John", "Doe", 18];

// This will always follow the same order (string, string and number)
let secondPerson:[string, string, number] = ["John", "Doe", 20];

type User = [string, string, number, string?];

let user:User = ["Mark", "Doe", 32, "mark@gmail.com"]

type listOfStudents = [number, boolean, ...string[]]

let listOfPassingStudnets = [3, true, "John", "Stella", "Mark"]