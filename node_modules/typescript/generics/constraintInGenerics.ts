type HasLength= {
    length: number;
};
// This is how we can add constraints in Generics in TypeScript
function logLength<T extends HasLength>(item: T): void{
    console.log(item.length);
}

const numberArray:number[] = [1,2,34,5];
const stringArray1:string[] = ["1","2", "3"];

const john = {
    name : "John",
    age : 12
};

console.log(logLength(numberArray)); // works fine
console.log(logLength(stringArray1));
//console.log(logLength(john))// This is not valid because object deosnot have length