// Filter Function using generics 

// using function overload

// This is a very complicated way of defining to achieve polymorphic functions 
type Filter = {
    (array:number[], predicate:(item:number) => boolean): number[];
    (array:string[], predicate:(item:string) => boolean): string[];
}

// Using Generics to define function overloading
const filter =<T>(array: T[], predicate:(item: T) => boolean):T[] => {
    let result: T[]= [];
    for(let i =0 ; i<array.length; i++){
        if(predicate(array[i])){
            result.push(array[i]);
        }
    }
    return result;
};


let numbers = [1,2,3,4,5,6,7,8];

function predicate(item: number){
    return item > 7;
}

let animals = ["cat", "dog", "rat"];

function filtercat(item:string){
    return item === "cat";
}


console.log(filter(numbers, predicate));
console.log(filter(animals, filtercat));